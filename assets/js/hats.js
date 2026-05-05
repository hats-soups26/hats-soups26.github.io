document.addEventListener('DOMContentLoaded', function() {
  const hatCount = 4;
  const hatBase = (window.HATS_BASE_URL || '/imgs/hats/').replace(/\/?$/, '/');

  document.querySelectorAll('.organizer-photo-wrap .party-hat').forEach(function(node) {
    const idx = Math.floor(Math.random() * hatCount) + 1;
    const src = hatBase + 'hat' + idx + '.png';
    const offsetX = Math.round((Math.random() * 12) - 6);
    const angle = Math.round((Math.random() * 30) - 15);

    function applyImg(el) {
      el.src = src;
      el.alt = '';
      el.style.display = 'block';
      el.style.width = '26px';
      el.style.maxWidth = 'none';
      el.style.height = 'auto';
      el.style.transform = 'translateX(calc(-50% + ' + offsetX + 'px)) rotate(' + angle + 'deg)';
      el.style.transformOrigin = '50% 100%';
      el.onerror = function() { el.style.display = 'none'; };
    }

    if (node.tagName && node.tagName.toLowerCase() === 'img') {
      applyImg(node);
      return;
    }

    const img = document.createElement('img');
    img.className = 'party-hat';
    applyImg(img);
    node.parentNode.replaceChild(img, node);
  });
});
