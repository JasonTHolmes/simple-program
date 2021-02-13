// DAY 1

var numone1 = document.getElementById('d-1-num-one');
var numtwo1 = document.getElementById('d-1-num-two');
var addsum1 = document.getElementById('day-1-add-sum');

numone1.addEventListener('input', add);
numtwo1.addEventListener('input', add);

function add() {
    var one = parseFloat(numone1.value) || 0;
    var two = parseFloat(numtwo1.value) || 0;
    addsum1.innerText = one+two;
    }

// DAY 2

var numone2 = document.getElementById('d-2-num-one');
var numtwo2 = document.getElementById('d-2-num-two');
var addsum2 = document.getElementById('day-2-add-sum');

numone2.addEventListener('input', add2);
numtwo2.addEventListener('input', add2);

function add2() {
    var one = parseFloat(numone2.value) || 0;
    var two = parseFloat(numtwo2.value) || 0;
    addsum2.innerText = one+two;
    }

// DAY 3

var numone3 = document.getElementById('d-3-num-one');
var numtwo3 = document.getElementById('d-3-num-two');
var addsum3 = document.getElementById('day-3-add-sum');

numone3.addEventListener('input', add3);
numtwo3.addEventListener('input', add3);

function add3() {
    var one = parseFloat(numone3.value) || 0;
    var two = parseFloat(numtwo3.value) || 0;
    addsum3.innerText = one+two;
    }

// DAY 4

var numone4 = document.getElementById('d-4-num-one');
var numtwo4 = document.getElementById('d-4-num-two');
var addsum4 = document.getElementById('day-4-add-sum');

numone4.addEventListener('input', add4);
numtwo4.addEventListener('input', add4);

function add4() {
    var one = parseFloat(numone4.value) || 0;
    var two = parseFloat(numtwo4.value) || 0;
    addsum4.innerText = one+two;
    }

// DAY 5

var numone5 = document.getElementById('d-5-num-one');
var numtwo5 = document.getElementById('d-5-num-two');
var addsum5 = document.getElementById('day-5-add-sum');

numone5.addEventListener('input', add5);
numtwo5.addEventListener('input', add5);

function add5() {
    var one = parseFloat(numone5.value) || 0;
    var two = parseFloat(numtwo5.value) || 0;
    addsum5.innerText = one+two;
    }