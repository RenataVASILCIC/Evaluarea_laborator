function addition() {
    var x = parseInt(document.getElementById('x').value);
    var y = parseInt(document.getElementById('y').value);

    if (isNaN(x)==true) x=0;
    if (isNaN(y)==true) y=0;

    var c = x + y;

    document.getElementById('result').innerHTML = x + " + " + y + " = " + c;
}

const change = () => {

    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);

    if (isNaN(a) == true) a = 0;
    if (isNaN(b) == true) b = 0;

    let temp = a;
    a=b;
    b=temp;

    document.getElementById('results').innerHTML = ( a + " " + b);
}


const elem = document.getElementById('elem');


/*** Exercitiu 5 7  ***/
const secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
secondArray.splice(4, 1);
elem.innerHTML += `A 5 Valoare este stearsa: ${secondArray}. <br>`;

/*** Exercitiu 9 ***/
let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 50));
elem.innerHTML += `Crescator: ${arr.sort()}. <br>`;

/*** Exercitiu 10 ***/
function loaded() {
changeColor();
var now = new Date().getTime();
var remain = 5000 - (now % 5000);
setTimeout(function () {
setInterval(changeColor, 5 * 500);
}, remain);
}
function changeColor() {
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
document.body.style.backgroundColor = rgb;
}

/*** Exercitiu 12 ***/
var count = 0;
function func() {
    var plusButton = document.getElementsByClassName("button_plus");
    if (document.onclick = plusButton) {
        count++;
        console.log(count);
    }
};
