const text = document.getElementById("red");
const btn = document.querySelector('#button');
btn.addEventListener('click', hire);

const reds = [];

function Red(age, city){
//   this.name = name;
  this.age = age;
  this.city = city;
  this.doReport = function () {
    return `Once upon our time, in the town of ${this.city}, lived a family of four. The ${this.age} year old children, Henry and Grace, were both curious about, and interested in everything and anything.<br>`;
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
    // document.querySelector('#name').value,
    document.querySelector('#age').value,
    document.querySelector('#city').value,
  );
  reds.push(red);
  makeReport();
}

btn.addEventListener("click", function() {
  text.style.display = "block";
});


