// 1-A: for changing header & logo color
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

// 2-A: getting scrollUp button
const mybutton = document.getElementById('myBtn');

window.onscroll = function () {
  // 1-B:
  const top = window.scrollY;

  if (top >= 2200) {
    header.classList.add('active');
    logo.classList.add('active');
  } else {
    header.classList.remove('active');
    logo.classList.remove('active');
  }

  // 2-B:
  scrollFunction();
};

// 2-C: display scrollBtn fn
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// 3 - Modal
const refs = {
  openModalBtn: document.querySelector('[data-open-modal]'),
  openModalBtn1: document.querySelector('[data-open-modal1]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.openModalBtn1.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.backdrop.addEventListener('click', logBackdropClick);

function toggleModal() {
  refs.backdrop.classList.toggle('backdrop--is-hidden');
}

function logBackdropClick() {
  console.log('This is a click to the backdrop');
}
