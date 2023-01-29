// alert('testing');
const myText = document.querySelector('#hello');
myText.textContent = 'Hi! I am Marie';
console.log(myText);

const open = document.querySelector('#openMenu');
const close = document.querySelector('#closeMenu');
const nav = document.querySelector('#myNav');


open.addEventListener('click', function(){
  nav.style.height = '20vh';
});

close.addEventListener('click', function(){
  nav.style.height = '0';
});


let message = 'some new message';
console.log(message);
message = 'My name is Marie Skywalker, and I come from a galaxy far far away';


const myBtn = document.querySelector('#change');
myBtn.onclick = function () {
  myText.textContent = message;
};



