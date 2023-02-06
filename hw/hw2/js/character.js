const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const image4 = document.querySelector('#image4');


window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    console.log(offset);
    image1.style.bottom = offset * 1 + 'px';
    image2.style.bottom = offset * .7 + 'px';
    image3.style.bottom = offset * .5 + 'px';
    image4.style.bottom = offset * .3 + 'px';

    image1.style.transform = 'rotate(' + offset * 0.4 + 'deg)';
    image2.style.transform = 'rotate(' + offset * 0.4 + 'deg)';
    image3.style.transform = 'rotate(' + offset * 0.4 + 'deg)';
    image4.style.transform = 'rotate(' + offset * 0.4 + 'deg)';

     });

     window.addEventListener("scroll", () => {
        let offset = window.scrollY;
        console.log(offset);
        image1.style.bottom = offset * 1 + 'px';
        image2.style.bottom = offset * .7 + 'px';
    
        image1.style.transform = 'rotate(' + offset * 0.4 + 'deg)';
        image2.style.transform = 'rotate(' + offset * 0.4 + 'deg)';
        
         });