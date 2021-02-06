var numone = document.getElementById('num-one');
var numtwo = document.getElementById('num-two');
var numthree = document.getElementById('num-three');

var addsum = document.getElementById('add-sum');
var addsum2 = document.getElementById('add-sum2');


numone.addEventListener('input', add);
numtwo.addEventListener('input', add);
numthree.addEventListener('input', multiply)

function add() {
    var one = parseFloat(numone.value) || 0;
    var two = parseFloat(numtwo.value) || 0;
    addsum.innerText = one+two;
    }

function multiply() {
    var three = parseFloat(numthree.value) || 0
}