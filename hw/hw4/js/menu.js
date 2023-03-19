const open = document.querySelector('#openMenu');
const close = document.querySelector('#closeMenu');
const nav = document.querySelector('#myNav');


open.addEventListener('click', function(){
  nav.style.height = '25vh';
});

close.addEventListener('click', function(){
  nav.style.height = '0';
});