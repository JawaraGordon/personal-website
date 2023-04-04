// Get the modal
// const modal = document.querySelectorAll(
//   '#id01, #id02, #id03, #id04, #id05, #id06'
// );

const modal1 = document.getElementById('id01');
const modal2 = document.getElementById('id02');
const modal3 = document.getElementById('id03');
const modal4 = document.getElementById('id04');
const modal5 = document.getElementById('id05');
const modal6 = document.getElementById('id06');

console.log(typeof modal1);

// When the user clicks anywhere outside of the modal1, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = 'none';
  } else if (event.target == modal2) {
    modal2.style.display = 'none';
  } else if (event.target == modal3) {
    modal3.style.display = 'none';
  } else if (event.target == modal4) {
    modal4.style.display = 'none';
  } else if (event.target == modal5) {
    modal5.style.display = 'none';
  } else if (event.target == modal6) {
    modal6.style.display = 'none';
  }
};
