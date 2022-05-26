const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const mybutton = document.getElementById('myBtn');

window.onscroll = function () {
  const top = window.scrollY;

  scrollFunction();

  if (top >= 2200) {
    header.classList.add('active');
    logo.classList.add('active');
  } else {
    header.classList.remove('active');
    logo.classList.remove('active');
  }
};

// display scrollBtn fn
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
//
