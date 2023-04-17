const text = document.getElementById("red");
const btn = document.querySelector('#button');
btn.addEventListener('click', hire);

const reds = [];

function Red(name, age, city){
  this.name = name;
  this.age = age;
  this.city = city;
  this.doReport = function () {
    return `Once upon our time, in the city of ${this.city}, lived a ${this.age} year old student named ${this.name}. She had always been known as the most beautiful girl in school, and people started to call her “Belle”.<br>`;
  };
}

function makeReport() {
   let output = '';
   for (let i = 0; i < reds.length; i++) {
      output += `${reds[i].doReport()} `;
   }
   document.querySelector('#output').innerHTML = output;
}

function hire() {
  const red = new Red(
    document.querySelector('#name').value,
    document.querySelector('#age').value,
    document.querySelector('#city').value,
  );
  reds.push(red);
  makeReport();
}

btn.addEventListener("click", function() {
  text.style.display = "block";
});


