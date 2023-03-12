const book = { name: "programing shikhi", price: 1000, color: 'green', page: 350 };
const { name, price, color, page } = book;

console.log(price);

const comapny = {
    name: "telco.com",
    ceo: {
        id: 16511052,
        relegion: 'islam',
        age: 45,
    },

    web: {
        work: "website developer",
        employee: 20,
        framework: 'javascript',
        tech: {
            first: "html",
            second: 'css',
            third: "dom",
            fourth: "mern stack"
        }

    }

}

const output = comapny.web.tech.third;
console.log(output);

//ternary operator
const ceoName = comapny.ceo?.agee

console.log(ceoName)

