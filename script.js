
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) { // Adjust this value as needed
        header.classList.add('header-opaque');
        header.classList.remove('header-transparent');
    } else {
        header.classList.remove('header-opaque');
        header.classList.add('header-transparent');
    }
});


const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.item');
const prev = carousel.querySelector('.prev');
const next = carousel.querySelector('.next');
let index = 0;

items[index].classList.add('active');

next.addEventListener('click', () => {
  items[index].classList.remove('active');
  index = (index + 1) % items.length;
  items[index].classList.add('active');
});

prev.addEventListener('click', () => {
  items[index].classList.remove('active');
  index = (index - 1 + items.length) % items.length;
  items[index].classList.add('active');
});




