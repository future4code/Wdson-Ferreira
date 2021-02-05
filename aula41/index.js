//Aula 41 - exercicio 5
//a)
function sum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
sum(2, 3);
//b)
function sub(number1, number2) {
    return number1 - number2;
}
sub(4, 2);
//c)
function mult(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
mult(3, 2);
//d)
function greatestNumber(oneNumber, twoNumber) {
    if (oneNumber > twoNumber) {
        console.log(oneNumber + " \u00E9 maior");
    }
    else if (oneNumber < twoNumber) {
        console.log(twoNumber + " \u00E9 maior");
    }
}
console.log(greatestNumber(2, 5));
