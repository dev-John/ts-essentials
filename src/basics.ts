function sum(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = sum(number1, number2);

console.log(result);

// some more

let userInput: unknown; // like any but more restrictive, with some type checking
let userName: string;

userInput = 5;
userInput = 'Teste';

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  // never type says that the function is meant to never return values
  throw { message, errorCode: code };
}

generateError('An error occurred', 500);
