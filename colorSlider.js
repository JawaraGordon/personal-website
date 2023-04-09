const r = document.querySelector('#r');
const g = document.querySelector('#g');
const b = document.querySelector('#b');

const rOut = document.querySelector('#r-out');
const gOut = document.querySelector('#g-out');
const bOut = document.querySelector('#b-out');
const hexOut = document.querySelector('#hex');

const body = document.body;

r.addEventListener('input', () => {
  rOut.value = r.value;

  setRbgColor();
  setHexValue();
});

g.addEventListener('input', () => {
  gOut.value = g.value;

  setHexValue();
  setRbgColor();
});

b.addEventListener('input', () => {
  bOut.value = b.value;

  setHexValue();
  setRbgColor();
});

const setRbgColor = () => {
  rOutputNum = parseInt(r.value);
  gOutputNum = parseInt(g.value);
  bOutputNum = parseInt(b.value);
  body.style.backgroundColor =
    'rgb(' + rOutputNum + ', ' + gOutputNum + ', ' + bOutputNum + ')';
};

const setHexValue = () => {
  rHex = rOutputNum.toString(16);
  gHex = gOutputNum.toString(16);
  bHex = bOutputNum.toString(16);
  hex = '#' + rHex + gHex + bHex;
  hexOut.value = hex;
};