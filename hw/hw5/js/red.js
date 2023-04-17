
  const myText = document.querySelector('#hello');
  const button = document.getElementById("change");
  const button2 = document.getElementById("change2");
  const text = document.getElementById("next1");
  const chg = document.getElementById("chg");

  button.addEventListener('click', () => {
    text.innerHTML = 'Little Red Hoodie and the man continued walking towards the grandmother’s house. With every step, Little Red Hoodie felt weirder and more awkward. She could feel that something wasn’t right.';
  });
  
  button2.addEventListener('click', () => {
    text.innerHTML = 'Little Red Hoodie entered the coffee shop, called her parents, and waited for them to come pick her up.';
  });


myText.textContent = 'What would you say?';
console.log(myText);


let message = 'some new message';
console.log(message);
message = 'Continue scrolling';


const myBtn = document.querySelector('.chg');
myBtn.onclick = function () {
  myText.textContent = message;
};


  // button.addEventListener("click", function() {
  //   text.style.display = "block";
  //   text.style.margin = "auto";
  //   text.style.width = "60%";
  //   text.style.textAlign = "center";
  //   text.style.padding = "5em";
  // });




