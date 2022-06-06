// 1-A: for changing header & logo color
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

// 2-A: getting scrollUp button
const mybutton = document.getElementById('myBtn');

// 3-A: for modal
const backdrop = document.getElementById('simpleBackdrop');
const backdropBtn = document.getElementsByClassName('btn')[0];
const backdropBtn1 = document.getElementsByClassName('btn')[1];
const backdropBtn2 = document.getElementsByClassName('signmeupBtn')[0];
const closeBtn = document.getElementsByClassName('closeBtn')[0];
backdropBtn.addEventListener('click', openBackdrop);
backdropBtn1.addEventListener('click', openBackdrop);
backdropBtn2.addEventListener('click', openBackdrop);
closeBtn.addEventListener('click', closeBackdrop);
window.addEventListener('click', clickOutside);

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

// 3-B: for modal
function openBackdrop() {
  backdrop.style.display = 'block';
  mybutton.style.display = 'none';
}

function closeBackdrop() {
  backdrop.style.display = 'none';
  mybutton.style.display = 'block';
}

function clickOutside(e) {
  console.log('clickOutside DOES NOT working correctly!!');
  if (e.target == backdrop) {
    backdrop.style.display = 'none';
  }
}
