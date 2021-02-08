//Aula 41 - exercicio 5

//a)
function sum(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo;
}
sum(2,3);

//b)
function sub(number1: number, number2: number): number {
    return number1 - number2;
}
sub(4,2);

//c)
function mult(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber;
}
mult(3,2);

//d)
function greatestNumber(oneNumber?: number, twoNumber?: number): void {
    if(oneNumber > twoNumber) {
        console.log(`${oneNumber} é maior`);
    }
    else if(oneNumber < twoNumber) {
        console.log(`${twoNumber} é maior`);
    }
}
console.log(greatestNumber(2,5));