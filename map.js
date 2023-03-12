const evenNumber = [2, 4, 6, 8, 10, 12, 14, 16, 20];
const squareIt = number => number * number;
//console.log(evenNumber.map(squareIt));


const names = ['Rahman', 'Akter', 'Jahan', 'Khan'];

const fullName = name => 'Farhana'.concat(" ").concat(name);

//console.log(names.map(fullName));

const product = [
    { name: 'burger', price: 250, rating: 4, taste: 'spicy' },
    { name: 'sandwitch', price: 200, rating: 5, taste: 'less spicy' },
    { name: 'chicken fry', price: 300, rating: 3, taste: 'sweet spicy' }
];

const showProduct = pro => console.log(pro);
product.map(showProduct)