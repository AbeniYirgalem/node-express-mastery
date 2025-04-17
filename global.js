
// Global Object
// This file contains the global object that is used throughout the application

console.log("Global object is being initailized.");
globalThis.setTimeout(() => {
    console.log("This is a global timeout function that runs after 1 second");
}, 1000);

console.log("This is a global console log message.");

const int = setInterval(() => {
    console.log("This is a global interval function that runs every 2 seconds");
}, 2000);

setTimeout(() => {
    clearInterval(int);
    console.log("interval cleared");
},6000)

console.log("Abeni Yirgalem");

console.log(__dirname);
console.log(__filename);

