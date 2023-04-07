// // Get the modal
// // const modal = document.querySelectorAll(
// //   '#id01, #id02, #id03, #id04, #id05, #id06'
// // );

const modalOne = document.getElementById('id01');
const modalTwo = document.getElementById('id02');
const modalThree = document.getElementById('id03');
const modalFour = document.getElementById('id04');
const modalFive = document.getElementById('id05');
const modalSix = document.getElementById('id06');

// When the user clicks anywhere outside of the modalOne, close it
window.onclick = function (event) {
  if (event.target == modalOne) {
    modalOne.style.display = 'none';
  } else if (event.target == modalTwo) {
    modalTwo.style.display = 'none';
  } else if (event.target == modalThree) {
    modalThree.style.display = 'none';
  } else if (event.target == modalFour) {
    modalFour.style.display = 'none';
  } else if (event.target == modalFive) {
    modalFive.style.display = 'none';
  } else if (event.target == modalSix) {
    modalSix.style.display = 'none';
  }
};

const onHover = () => {
  //check to see if user is on mobile
  if ('ontouchstart' in document.documentElement) {
    return;
    // if on desktop enable onHover
  } else {
    projectOne = document.getElementById('modal1');
    projectTwo = document.getElementById('modal2');
    projectThree = document.getElementById('modal3');

    projectOne.addEventListener('mouseover', function () {
      console.log('onHover');
      modalOne.style.display = 'block';
    });
    projectTwo.addEventListener('mouseover', function () {
      console.log('onHover');
      modalTwo.style.display = 'block';
    });
    projectThree.addEventListener('mouseover', function () {
      console.log('onHover');
      modalFive.style.display = 'block';
    });
  }
};

onHover();
