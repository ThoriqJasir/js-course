// CODING CHALLENGE 1

var massMark = 80;
var heightMark = 1.80;

var massJohn = 70;
var heightJohn = 1.92;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn, BMIMark)

var markHigherBMI = BMIMark > BMIJohn;
console.log('Apakah Mark\'s BMI lebih tinggi dari John\'s?' + markHigherBMI);


// CODING CHALLENGE 2

var johnScore = 89 + 120 + 103;
var mikeScore = 116 + 94 + 123;
console.log(johnScore, mikeScore)

if (johnScore > mikeScore) {
    console.log('john\'s Team wins with the average of score: ' + johnScore / 3 + ' Points')
} else if (mikeScore > johnScore) {
    console.log('Mike\'s Team wins with the average score: ' + mikeScore / 3 + ' Points')
} else {
    console.log('Draw')
}

//EXTRA

var johnScore = 89 + 120 + 103;
var mikeScore = 116 + 94 + 123;
var maryScore = 97 + 134 + 105;
console.log(johnScore, mikeScore, maryScore)

if (johnScore > mikeScore && johnScore > maryScore) {
    console.log('john\'s Team wins with the average of score of: ' + johnScore / 3 + ' Points')
} else if (mikeScore > johnScore && mikeScore > maryScore) {
    console.log('Mike\'s Team wins with the average score of: ' + mikeScore / 3 + ' Points')
} else if (maryScore > mikeScore && maryScore > johnScore) {
    console.log('Mary\'s Team wins with the average score of: ' + maryScore / 3 + ' Points')
} else {
    console.log('It\'s a Draw')
}

