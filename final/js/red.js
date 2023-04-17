
function showSection1() {
  var section = document.getElementById("mySection1");
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

function showSection2() {
  var section = document.getElementById("mySection2");
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

function showSection3() {
  var section = document.getElementById("mySection3");
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

function showSection4() {
  var section = document.getElementById("mySection4");
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

function showSection5() {
  var section = document.getElementById("mySection5");
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

function showSection6() {
  var section = document.getElementById("mySection6");
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

const path = document.getElementById("my-path1");
const pathLength = path.getTotalLength();
const pathOffsetTop = path.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

function animatePath() {
  const scrollPosition = window.pageYOffset;
  const scrollPercentage = (scrollPosition - pathOffsetTop + windowHeight) / (windowHeight * 10);

  if (scrollPercentage >= 0 && scrollPercentage <= 1) {
    const drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;
  }
}

window.addEventListener("scroll", animatePath);




  // button.addEventListener('click', () => {
  //   text.innerHTML = 'Little Red Hoodie and the man continued walking towards the grandmother’s house. With every step, Little Red Hoodie felt weirder and more awkward. She could feel that something wasn’t right.';
  // });
  
  // button2.addEventListener('click', () => {
  //   text.innerHTML = 'Little Red Hoodie entered the coffee shop, called her parents, and waited for them to come pick her up.';
  // });





  // myText.textContent = 'What would you say?';
// console.log(myText);


// let message = 'some new message';
// console.log(message);
// message = 'Continue scrolling';


// const myBtn = document.querySelector('.chg');
// myBtn.onclick = function () {
//   myText.textContent = message;
// };





