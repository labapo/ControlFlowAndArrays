// const adventurer = {
//     name: 'Odin the Great',
//     hitpoints: 10,
//     belongings: ['sword', 'potion', 'tums'], 
//     companion: {
//         name: 'Adam', 
//         type: 'Druid',
//         companion: {
//             name: 'Meowcolm',
//             type: 'Cat', 
//             belongings: ['Catnip', 'Litter box', '']
//         }
//     }
// }
// console.log(adventurer.belongings[0])

// for (let i = 0; i < adventurer.belongings.length; i++) {
// console.log(adventurer.belingings[i]);
// }

// //Access companion object
// console.log(adventurer.companion);
// console.log(adventurer.companion.name);
// console.log(adventurer.companion.companion.name);

// const movies = [
//     {title: 'Dune'}, 
//     {title: 'Hellraiser'},
//     {title: 'Halloween'}
// ]

// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i].title)
// }

// const foo = {
//     someArray: [1,2,3],
//     someObject: {
//         someProp: 'Oh hi, mark'
//     },
//     someMethod: () => {
//         console.log('inside of method')
//     }
// }

// console.log(foo.someObject.someProp);
// console.log(foo.someMethod)

// const player = {
//     name: 'Odin the Great',
//     health: '1000',
//     power: '1000',
//     stamina: '1000'
// }
// const bigBadBoss= {
//     name: 'Magnardo the Merciless',
//     health: 1000000000000000000,
//     power: 10000000000000000,
//     stamina: 'Infinity'
// }

class Character {
    //constructor
    constructor(){
        this.legs = 2;
        this.arms = 2; 
        this.eyes = 'Hazel';
        this.hair = "Gray"
    }
    greet(otherCharacter) {
        console.log('hi ' + otherCharacter + '!');
    }
}

const p1 = new Character();
const enemy = new Character();
console.log(Character);
console.log(p1.greet('bob'));