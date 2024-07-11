/*
const product = {
    name: 'Boxs',
    price: 1050
};
console.log(product);
console.log(product.name, product.price);

product.name = 'Black Box';
console.log(product);

product.newProperty = 'property';
console.log(product);

product.name = {name: 'gogo', rice: 'beans'}


delete product.newProperty;
console.log(product);


const product2 = {
    name: 'shirt',
    ['delivery-time']: '1 day',
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function function1() {
        console.log('function inside object');
    }
};
console.log(product2);

console.log(product2.rating.count);

product2.fun();

console.log(JSON.stringify(product2))

const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));
*/

console.log('hello'.length);
console.log('hello'.toUpperCase());

const object1 = {
    message: 'hello'
};
const object2 = object1;

object1.message = 'Good job!';
console.log(object1);

const object3 = {
    message: 'Good job!'
};
console.log(object3 === object1);
console.log(object2 === object1);

const object4 = {
    message: 'Good job!',
    price: 500
};
const { message, price } = object4;
/*or const message = obeject4.message;*/
console.log(message);
console.log(price);

const object5 ={
    message,
    /*method: function function1() {
        console.log('method');
    } or*/ 
    method() {
        console.log('method');
    }
};
console.log(object5);
object5.method();