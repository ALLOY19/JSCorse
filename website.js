let variable1 = 3;
console.log(variable1);

let calculation = 2 + 2;
console.log(calculation);
console.log(calculation + 2);

let result = calculation + 2;
console.log(result);

let message = 'hey there';
console.log(message);

variable1 = 5;
console.log(variable1);

variable1 = variable1 + 1;
console.log(variable1);


let cartQuantity = 0;

function openCart() {
    console.log(`Cart quantity: ${cartQuantity}`);
}

function addCart() {
    cartQuantity = cartQuantity + 1;
    console.log(`Cart quantity: ${cartQuantity}`);
}