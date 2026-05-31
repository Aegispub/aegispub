/* panel.js — AegisPub post expansion panel
   Zero network requests. All content pre-rendered in page.
   Opens in under 100ms. Graceful degradation if blocked. */

(function () {
  'use strict';

  var panel      = document.getElementById('post-panel');
  var panelInner = document.getElementById('post-panel-content');
  var panelNav   = document.getElementById('post-panel-nav');
  var btnPrev    = document.getElementById('panel-prev');
  var btnNext    = document.getElementById('panel-next');
  var permalink  = document.getElementById('panel-permalink');

  if (!panel || !panelInner) return;

  var postIds     = window.AEGIS_POST_IDS || [];
  var currentIdx  = -1;
  var savedScroll = 0;

  /* ── Open panel with post at index ── */
  function openPost(idx) {
    if (idx < 0 || idx >= postIds.length) return;

    var slug    = postIds[idx];
    var source  = document.getElementById('post-' + slug);
    if (!source) return;

    currentIdx = idx;

    panelInner.innerHTML = source.innerHTML;

    /* Close button */
    var closeBtn = document.createElement('button');
    closeBtn.className   = 'post-panel__close';
    closeBtn.innerHTML   = '&times;';
    closeBtn.setAttribute('aria-label', 'Close post');
    closeBtn.addEventListener('click', closePanel);
    panelInner.insertBefore(closeBtn, panelInner.firstChild);

    /* Prev / Next state */
    btnPrev.disabled = (idx === 0);
    btnNext.disabled = (idx === postIds.length - 1);

    /* Permalink */
    var postEl = panelInner.querySelector('.post-panel__permalink a');
    if (postEl && permalink) {
      permalink.innerHTML = '<a href="' + postEl.getAttribute('href') + '">Permalink</a>';
    }

    if (!panel.classList.contains('is-open')) {
      savedScroll = window.scrollY;
      panel.classList.add('is-open');
      panel.scrollTo(0, 0);
      /* Scroll window so panel top is visible */
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      panel.scrollTo(0, 0);
    }
  }

  /* ── Close panel ── */
  function closePanel() {
    panel.classList.remove('is-open');
    currentIdx = -1;
    /* Restore scroll position */
    window.scrollTo(0, savedScroll);
  }

  /* ── Card click / keyboard ── */
  function handleCardActivation(e) {
    var card = e.target.closest('[data-post-id]');
    if (!card) return;
    /* Skip if user clicked the fallback link */
    if (e.target.tagName === 'A') return;

    var slug = card.getAttribute('data-post-id');
    var idx  = postIds.indexOf(slug);
    if (idx === -1) return;

    e.preventDefault();
    openPost(idx);
  }

  document.addEventListener('click', handleCardActivation);

  document.addEventListener('keydown', function (e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('[data-post-id]')) {
      handleCardActivation(e);
    }
    if (e.key === 'Escape' && panel.classList.contains('is-open')) {
      closePanel();
    }
  });

  /* ── Prev / Next buttons ── */
  btnPrev.addEventListener('click', function () { openPost(currentIdx - 1); });
  btnNext.addEventListener('click', function () { openPost(currentIdx + 1); });

}());
