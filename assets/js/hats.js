document.addEventListener('DOMContentLoaded', function() {
  const hatCount = 4;
  const hatBase = '/imgs/hats/hat';

  document.querySelectorAll('.organizer-photo-wrap .party-hat').forEach(function(node) {
    const idx = Math.floor(Math.random() * hatCount) + 1;
    const src = hatBase + idx + '.png';

    // If the placeholder is already an <img>, just set src
    // Prepare random visual tweaks
    const offsetX = Math.round((Math.random() * 12) - 6); // -6..+6 px
    const angle = Math.round((Math.random() * 30) - 15); // -15..+15 deg

    function applyImg(el) {
      el.src = src;
      el.alt = '';
      el.style.display = 'block';
      el.style.transform = `translateX(calc(-50% + ${offsetX}px)) rotate(${angle}deg)`;
      el.style.transformOrigin = '50% 100%';
      el.onerror = function() { el.style.display = 'none'; };
    }

    if (node.tagName && node.tagName.toLowerCase() === 'img') {
      applyImg(node);
      return;
    }

    // Otherwise replace the element with an img
    const img = document.createElement('img');
    img.className = 'party-hat';
    applyImg(img);
    node.parentNode.replaceChild(img, node);
  });
});
