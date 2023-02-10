// const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// let info = 'The numbers are: ';
// const para = document.querySelector('#displayNumbers');

let points = 0;
const showButtons = document.querySelector('#buttons');
const all = document.querySelectorAll('.btn')


const one = document.querySelectorAll('#one');


const myHobies = ['Dancing', 'Piano', 'Singing', 'Drawing', 'Cinema', 'Reading','Climbing',];
const displayH = document.querySelector('#displayHobies');


const two = document.querySelectorAll('#two');

const myWomen = ['Rosa', 'Aretha', 'Jennifer', 'Whitney', 'Viola', 'Selena','Rhianna',];
const displayW = document.querySelector('#displayWomen');


const three = document.querySelectorAll('#three');

const myMangas = ['Dragon Ball', 'Naruto', 'Attack on Titans', 'Death Note', 'Kurokos Basket', 'My Hero Academia','Demon Slayer',];
const displayM = document.querySelector('#displayMangas');


const four = document.querySelectorAll('#four');

const mySiblings = ['Clemence', 'Simon', 'Antoine', 'Alice',];
const displayS = document.querySelector('#displaySiblings');


// ------------


const numItems = one.length;

one.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', function() {
    displayH.innerHTML = '';
    for (let i = 0; i < myHobies.length; i++) {
    displayH.innerHTML += `${myHobies[i]} <br>`;
  }
  });
});

// -------

const numItems2 = two.length;

two.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', function() {
    displayW.innerHTML = '';
    for (let i = 0; i < myWomen.length; i++) {
    displayW.innerHTML += `${myWomen[i]} <br>`;
  }
  });
});


// ---------

const numItems3 = three.length;

three.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', function() {
    displayM.innerHTML = '';
    for (let i = 0; i < myMangas.length; i++) {
    displayM.innerHTML += `${myMangas[i]} <br>`;
  }
  });
});


// ------------

const numItems4 = four.length;

four.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', function() {
    displayS.innerHTML = '';
    for (let i = 0; i < mySiblings.length; i++) {
    displayS.innerHTML += `${mySiblings[i]} <br>`;
  }
  });
});


// ------------


const numItem0 = all.length;


all.forEach((btn) => {
    console.log(btn);
btn.addEventListener('click', function() {
    this.style.backgroundColor = 'pink';
    this.style.color = 'black'
    this.disabled = true;
    points++;
    showButtons.textContent = `total points: ${points}`;
    pointChecker();

});
});

function pointChecker() {
    if (points >= numItem0) {
      showButtons.textContent = 'The End!';
    }
  }

