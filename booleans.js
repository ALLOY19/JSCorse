// BOOLEANS AND IF STATEMENT


console.log(3 > 5 - 5);

console.log(5 === '5.00');

if (false) {
    console.log('WARUP');
} else {
    console.log('else');
}

const age = 15;

if (age >= 16) {
    console.log('you can drive');
    console.log('Congrats');
} else if (age >= 14) {
    console.log('Almost there!');
} else {
    console.log('you can not drive');
}


console.log(true && false);
console.log(0.2 >= 0 && 0.2 < 1 / 3);

console.log(true || false);
console.log(!true);



if (0) {
    console.log('truthy');
}

const cartQuanty = 5;

if (cartQuanty) {
    console.log('cart is full');
}

console.log(!0);

console.log('nice' / 6);

let boolean1;
console.log(boolean1);


const result = 0 ? 'truthy' : 'falsy';
console.log(result);

false && console.log('Yooo');

const message = 3 && 'Yooo';
console.log(message);

const currency = undefined || 'USD';
console.log(currency);