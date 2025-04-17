const {data} = require('./peoples');

console.log(data);
console.log(data.people);
console.log(data.age);

// in another way
const { people, age } = require("./peoples");

console.log(people)
console.log(age);

const os = require('os');
// console.log(os);
console.log(os.platform());
console.log(os.homedir());



