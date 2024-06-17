// Get the modal elements
const modalOne = document.getElementById('id01');
const modalTwo = document.getElementById('id02');
const modalThree = document.getElementById('id03');
const modalFour = document.getElementById('id04');
const modalFive = document.getElementById('id05');
const modalSix = document.getElementById('id06');

// When the user clicks anywhere outside of the modals, close them
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
  // Check to see if user is on mobile
  if ('ontouchstart' in document.documentElement) {
    return;
    // If on desktop, enable onHover
  } else {
    projectOne = document.getElementById('modal1');
    projectTwo = document.getElementById('modal2');
    projectThree = document.getElementById('modal3');
    projectFour = document.getElementById('modal4'); // New project

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
    projectFour.addEventListener('mouseover', function () {
      console.log('onHover');
      modalSix.style.display = 'block'; 
    });
  }
};

onHover();
