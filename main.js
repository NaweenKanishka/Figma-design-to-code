let lastScrollTop = 0;
const section = document.getElementById('main');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let sectionTop = section.getBoundingClientRect().top;
  let sectionBottom = section.getBoundingClientRect().bottom;
  let windowHeight = window.innerHeight;

  if (scrollTop < lastScrollTop) {
    // Scrolling Up
    if (sectionTop < windowHeight && sectionBottom > 0) {
      section.classList.add('show');
    }
  } else {
    // Scrolling Down
    section.classList.remove('show');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
