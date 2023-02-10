const links = document.querySelectorAll('.js-nav>a');
let activeSlide = 0;

const reset = () => {
  links.forEach((link) => link.removeAttribute('class'));
  links[activeSlide].className = 'active';
};
reset();

links.forEach((link, index) => {
  link.addEventListener('click', () => {
    activeSlide = index;

    reset();
  });
});
