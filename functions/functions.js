// function areBothEven (n1, n2) {
//     return !(n1 % 2) && !(n2 % 2);
// }
// console.log(areBothEven(3,7));

// let maria = getDevOpject ('Maria', 'HTML', 'CSS', 'Javascript', 'SQL')
// function getDevOpject (name) {
//     let skills = [];

//     for (let i = 1; i < arguments.length; i++) {
//         skills.push(arguments [i]);
//     }

//     return{
//         devName: name, 
//         jobSkills: skills
//     }
// }
// console.log(getDevOpject(maria));

const sayName = (name) => {
    console.log(`Hello my name is ${name}`); 
}

sayName('Ted');
sayName('Keley');
sayName('Coach Beard'); 

// const calculateAreaOfSquare = (length, heigh) => {
//     let sqft = length * height;
//     console.log(`My square or rectangle is ${sqft}`);

// }
// calculateAreaOfSquare (38, 18);
const calculateAreaofTriangle = (width, height) => {
    let calculateAreaofTriangle = ((width * height)/2)
    console.log(`The area of a triangle with a width of 10 and a height of 5 is ${calculateAreaofTriangle} square units`); 
}
calculateAreaofTriangle (10, 5);
