//1 of 10
//console.log("HELLO ES6");

//2 of 10
// const name = process.argv[2];
// let string = `Hello, ${name}!
// Your name lowercased is "${name.toLowerCase()}".`;

// console.log(string);

//3 of 10
// const inputs = process.argv.slice(2);

// const reducer = (accu, currVal) => accu + currVal;
// const mapper = (element) => element.substring(0, 1);

// let result = inputs.map(mapper)
//     .reduce(reducer);
// console.log('[' + inputs.join(',') + ']' + " becomes \"" + result + "\"");

//4 of 10
// const yelp = "Ouch!";

// let foot = {
//     kick: function () {
//         setImmediate(() => {
//             console.log(yelp);
//         });
//     }
// };
// foot.kick();

//5 of 10
// let userArray = process.argv.slice(2);

// let data = {};

// [, data.username, data.email] = userArray;

// console.log(data);

//6 of 10
// let inArray = process.argv.slice(2);

// var min = Math.min(...inArray);

// console.log(`The minimum of [${inArray}] is ${min}`);

//7 of 10
// module.exports = function average(...nums){
//     return nums.reduce((a,b) => a + b) / nums.length; 
// }

//8 of 10
module.exports = function midpoint(lower = 0, upper = 1){
    let combined = lower + upper;
    let mid = combined / 2;
    return mid;
}