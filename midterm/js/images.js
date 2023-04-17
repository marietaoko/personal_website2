const book = document.querySelector('.book');

window.addEventListener("scroll", () => {
let offset = window.scrollY;
console.log(offset);
book.style.left = offset * .15 + 'px';
 });

 


