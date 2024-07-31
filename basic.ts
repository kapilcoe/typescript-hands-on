console.log("Your code goes here");

function add(n1: number, n2: number, printPhrase: boolean, phrase: string) {
  if (printPhrase) {
    console.log(phrase);
  } else {
    return n1 + n2;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printPhrase = true;
const phrase = "hello there";
const result = add(number1, number2, printPhrase, phrase);
console.log(result);
