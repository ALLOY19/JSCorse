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
*/

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