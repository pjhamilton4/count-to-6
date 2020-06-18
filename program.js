//1 of 10
//console.log("HELLO ES6");

//2 of 10
// const name = process.argv[2];
// let string = `Hello, ${name}!
// Your name lowercased is "${name.toLowerCase()}".`;

// console.log(string);

//3 of 10
const inputs = process.argv.slice(2);

const reducer = (accu, currVal) => accu + currVal;
const mapper = (element) => element.substring(0, 1);

let result = inputs.map(mapper)
    .reduce(reducer);
console.log('[' + inputs.join(',') + ']' + " becomes \"" + result + "\"");