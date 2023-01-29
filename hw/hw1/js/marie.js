const marie = document.querySelector('#marie');
const france = document.querySelector('#france');
const plain = document.querySelector('#plain');
const dart = document.querySelector('#dart')

const open = document.querySelector('#openMenu');
const close = document.querySelector('#closeMenu');
const nav = document.querySelector('#myNav');


open.addEventListener('click', function(){
  nav.style.height = '20vh';
});

close.addEventListener('click', function(){
  nav.style.height = '0';
});

window.addEventListener("scroll", () => {
let offset = window.scrollY;
console.log(offset);
marie.style.bottom = offset * 1.4 + 'px';
france.style.bottom = offset * 0.3 + 'px';
plain.style.transform = `translateX(-${offset * 0.4}px)`;
 });

 dart.addEventListener('click', function(){
      this.classList.toggle('change');
  });