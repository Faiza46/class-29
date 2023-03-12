const evenNumber = [2, 4, 6, 8, 10, 12, 14, 16, 20];
const findNumber = number => number % 4 == 0;

//console.log(evenNumber.filter(findNumber));

const product = [
    { name: 'burger', price: 250, rating: 4, taste: 'spicy' },
    { name: 'sandwitch', price: 200, rating: 5, taste: 'less spicy' },
    { name: 'chicken fry', price: 300, rating: 3, taste: 'sweet spicy' }
];

const findBestProduct = itemRate => itemRate.rating > 3;

console.log(product.filter(findBestProduct));
