let button = document.getElementById('button');
let scoresLabel = document.getElementById('scores');
let resultLabel = document.getElementById('result');

let scores = [12, 50, 25, 40, 50];

let scoresString = "Student Results are: ";
let resultsString = "";

// Set up scores label - Full stop if last number, comma if not.
scores.forEach((x, i) => scoresString += i !== scores.length - 1 ? x + ', ' : x + '.') 
scoresLabel.textContent = scoresString;

// Add event listener
button.addEventListener('click', calculateTotal);

// On button press
function calculateTotal() {
    let count = scores.length;
    let total = 0;
    scores.forEach((x) => total += x);

    let average = total / count;
    
    resultLabel.textContent = "Total score: " + total + ". Average: " + average + ".";
    button.style = "display: none";
}
