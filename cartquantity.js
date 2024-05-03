// CARTQUANTITY

function openCart() {
    console.log(`Cart quantity: ${cartQuantity}`);
}

function addCart() {
    cartQuantity = cartQuantity + 1;
    console.log(`Cart quantity: ${cartQuantity}`);
}

function plusCart1() {
    cartQuantity = cartQuantity + 2;
    console.log(`Cart quantity: ${cartQuantity}`);
}

function pluscart2() {
    cartQuantity = cartQuantity + 3;
    console.log(`Cart quantity: ${cartQuantity}`);
}

function resetCart() {
    cartQuantity = 0;
    console.log('Cart was reset');
    console.log(`Cart quantity: ${cartQuantity}`);
}

