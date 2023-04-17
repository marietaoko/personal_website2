const open = document.querySelector('#openMenu');
const close = document.querySelector('#closeMenu');
const nav = document.querySelector('#myNav');


open.addEventListener('click', function(){
  nav.style.height = '50vh';
  open.style.display = 'none';
});

close.addEventListener('click', function(){
  nav.style.height = '0';
  open.style.display = 'block';
});