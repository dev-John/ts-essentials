var userInput; // like any but more restrictive, with some type checking
var userName;
userInput = 5;
userInput = "Teste";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred", 500);
