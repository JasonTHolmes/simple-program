// DAY 1

var numone1 = document.getElementById('d-1-num-one');
var numtwo1 = document.getElementById('d-1-num-two');
var addsum1 = document.getElementById('day-1-add-sum');

var h1element = document.getElementsByTagName('h1');

var h1element2 = h1element.innerText;

numone1.addEventListener('input', add);
numtwo1.addEventListener('input', add);

function add() {
    var one = parseFloat(numone1.value) || 0;
    var two = parseFloat(numtwo1.value) || 0;
    addsum1.innerText = one+two;
    }

console.log('h1element2')