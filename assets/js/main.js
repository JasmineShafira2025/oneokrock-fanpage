/* OneOkRock Fan — vanilla JS for nav, lightbox, tour filter, form */

(() => {
  'use strict';

  // ----- Mobile nav toggle -----
  const navToggle = document.getElementById('navToggle');
  const siteNav   = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const open = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });

    // Close on link click (mobile)
    siteNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ----- Gallery lightbox -----
  const gallery  = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');

  if (gallery && lightbox) {
    const stage    = lightbox.querySelector('.lightbox-stage');
    const caption  = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    const open = (item) => {
      const captionText = item.dataset.caption || '';
      const img = item.querySelector('img');
      // Reset the stage, then either show the photo or fall back to gradient
      stage.style.backgroundImage = '';
      stage.style.backgroundColor = '';
      stage.innerHTML = '';
      if (img) {
        const clone = document.createElement('img');
        clone.src = img.src;
        clone.alt = captionText;
        stage.appendChild(clone);
      } else {
        stage.dataset.color = item.dataset.color || '1';
      }
      caption.textContent = captionText;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const close = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    gallery.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => open(item));
    });
    closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  // ----- Tour region filter -----
  const tourBody = document.getElementById('tourBody');
  if (tourBody) {
    document.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const region = chip.dataset.region;
        tourBody.querySelectorAll('tr').forEach(row => {
          row.style.display = (region === 'all' || row.dataset.region === region) ? '' : 'none';
        });
      });
    });
  }

  // ----- Contact form (front-end only, mailto fallback) -----
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.classList.remove('error');
      status.textContent = '';

      const data = Object.fromEntries(new FormData(form).entries());
      const errors = [];
      if (!data.name || data.name.trim().length < 2) errors.push('name');
      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('email');
      if (!data.subject) errors.push('subject');
      if (!data.message || data.message.trim().length < 10) errors.push('message');

      if (errors.length) {
        status.classList.add('error');
        status.textContent = 'Please fill in: ' + errors.join(', ');
        errors.forEach(field => {
          const el = form.elements[field];
          if (el) el.focus();
        });
        return;
      }

      // Since this is a static site, open the user's mail client.
      const subject = encodeURIComponent('[OneOkRock Fan] ' + data.subject);
      const body    = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
      );
      window.location.href = `mailto:hello@oneokrockfan.example?subject=${subject}&body=${body}`;

      status.textContent = 'Opening your email client…';
      form.reset();
    });
  }
})();
