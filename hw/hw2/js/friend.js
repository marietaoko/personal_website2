const display = document.querySelector('#display');
const check = document.querySelector('#checkBtn');

function write() {
    let uName = document.querySelector('#myText').value;
    console.log(uName);

    if (uName === 'Rachel') {
        location.href = 'rachel.html'; 
    } 
    
    else if (uName === 'Chandler') {
        location.href = 'chandler.html';
    } 
    
    else if (uName === 'Phoebe') {
        location.href = 'phoebe.html';
    } 
    
    else if (uName === 'Monica') {
        location.href = 'monica.html';
    } 
    
    else if (uName === 'Ross') {
        location.href = 'ross.html';
    } 
    
    else if (uName === 'Joey') {
        location.href = 'joey.html';
    } 
    
    else if (uName === 'Janice') {
        location.href = 'janice.html';
    } 
    
    else if (uName === 'Gunther') {
        location.href = 'gunther.html';
    } 
    
    else if (uName === 'Amy') {
        location.href = 'amy.html';
    } 
    
    else if (uName === 'Carol') {
        location.href = 'carol.html';
    }

    else {
        display.textContent = `Sorry, we don't have any information on this character`;
    } 
} 

check.addEventListener('click', write);









