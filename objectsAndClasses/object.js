// const myBook = {
//     title: 'Dune',
//     subTitle: ' Messiah',
//     author: 'Frank Herbert',
//     isSeries: true
// }
// console.log(mycar.title);

// const myPet = {
//     name: 'Odin the Great King of Meowsgard',
//     age: 10,
//     favoriteThing: ['Sleeping on my Lap', 'lunchmeat', 'cheese'],
//     speakFrench: false,
//     solveRubix: false
// }
// console.log(myPet);

class Vehicle {
    //constructor
    constructor(vin, make, model) {
        this.vin = vin;
        this.make = make;
        this.model = model
    }
}
const plane = new Vehicle ('X123Y', 'Boeing');
const car = new Vehicle ('A1234', 'Toyota', 'Camry');
console.log(car);
