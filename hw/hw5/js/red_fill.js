const btn = document.querySelector('#button');
btn.addEventListener('click', hire);

const reds = [];

function Red(name, age, city){
  this.name = name;
  this.age = age;
  this.city = city;
  this.doReport = function () {
    return `Once upon our time, in the North of ${this.city}, lived a ${this.age} year old girl nameg ${this.name}. She was always very kind and helpful to others. Almost every day, the girl wore a red hoodie, which, in the neighbourhood, gave her the nickname of Little Red Hoodie. She lived in a small house at the west of the district with her parents, but she loved visiting her grandmother who was living on the other side of the neighbourhood.'<br>`;
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



