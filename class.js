class Car {
    carName = "x";

    constructor(carName) {
        this.carName = carName
    }
}

let myCarName = new Car('BMW');
console.log(myCarName);

let herCarName = new Car("Ford");
console.log(herCarName);