let userInput: unknown; // like any but more restrictive, with some type checking
let userName: string;

userInput = 5;
userInput = "Teste";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  // never type says that the function is meant to never return values
  throw { message, errorCode: code };
}

generateError("An error occurred", 500);
