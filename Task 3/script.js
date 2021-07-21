let button = document.getElementById('button');
let resultLabel = document.getElementById('result');

let scores = [12, 25, 40, 50];

let resultString = "Student Results are: ";

scores.forEach((x) => resultString += x + ', ');
resultLabel.textContent = resultString;

button.addEventListener('click', calculateTotal);

function calculateTotal() {
    let count = scores.length;
    let total = 0;
    scores.forEach((x) => total += x);

    let average = total / count;
    
    resultLabel.textContent = "Total score: " + total + ". Average: " + average;
}
