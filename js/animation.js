const flyUpElements = document.querySelectorAll('.fly-up');

function flyUpHandler() {
  flyUpElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
      el.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', flyUpHandler);
