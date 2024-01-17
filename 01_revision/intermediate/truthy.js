const userEmail = []; // "edson@edson.ai", ""

if (userEmail) {
  // console.log("have email");
} else {
  // console.log("no email");
}


// truthy and falsy

// falsy values
// false, 0, -0, "", BigInt 0n, null, undefined, NaN

// truthy
// true, " ", [], "0", "false", {}, function(){}

if(userEmail.length === 0) {
  // console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
  // console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15

// ternary operator

let age = 21
age >= 21 ? console.log("You can marry") : console.log( "You cannot marry")





// console.log(val1)