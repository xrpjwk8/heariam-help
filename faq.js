// Keep native details/summary keyboard behavior and no-JavaScript fallback.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
for (const details of document.querySelectorAll('.faq details')) {
  const summary = details.querySelector('summary');
  const answer = details.querySelector('.faq-answer');
  let expanded = details.open;
  let heightAnimation;
  let fadeAnimation;

  function settle() {
    heightAnimation?.cancel();
    fadeAnimation?.cancel();
    heightAnimation = fadeAnimation = null;
    details.open = expanded;
    details.style.height = '';
    answer.style.opacity = '';
    delete details.dataset.animating;
  }

  summary.addEventListener('click', (event) => {
    event.preventDefault();
    const startHeight = details.getBoundingClientRect().height;
    const startOpacity = details.open ? getComputedStyle(answer).opacity : '0';
    heightAnimation?.cancel();
    fadeAnimation?.cancel();
    expanded = !expanded;
    details.dataset.expanded = String(expanded);
    summary.setAttribute('aria-expanded', String(expanded));

    if (reducedMotion.matches || !details.animate) {
      settle();
      return;
    }

    // Closing stays open until the animation completes, so content never vanishes early.
    details.open = true;
    details.style.height = '';
    const border = parseFloat(getComputedStyle(details).borderTopWidth)
      + parseFloat(getComputedStyle(details).borderBottomWidth);
    const endHeight = expanded ? details.getBoundingClientRect().height
      : summary.getBoundingClientRect().height + border;
    details.style.height = `${endHeight}px`;
    details.dataset.animating = '';
    const options = { duration: 360, easing: 'cubic-bezier(.22, 1, .36, 1)' };
    heightAnimation = details.animate([
      { height: `${startHeight}px` }, { height: `${endHeight}px` }
    ], options);
    fadeAnimation = answer.animate([
      { opacity: startOpacity }, { opacity: expanded ? 1 : 0 }
    ], options);
    const current = heightAnimation;
    current.onfinish = () => {
      if (heightAnimation === current) settle();
    };
  });

  // A viewport/font-size change must not leave a stale fixed height.
  window.addEventListener('resize', settle);
  reducedMotion.addEventListener('change', settle);
}
