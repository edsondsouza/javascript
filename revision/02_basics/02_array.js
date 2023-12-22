const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "batman", "flash"];

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)
// console.log(marvelHeros[3][2])

// let copyofmarvelheros = marvelHeros.concat(dcHeros) // original array remains the same
// console.log(copyofmarvelheros)
// console.log(marvelHeros)

// const assemble = [...marvelHeros, ...dcHeros]
// console.log(assemble)

const anotherArr = [1, 2, 3, 4, 5, [6, 7, 8], [4, 5, [6, 7, [1]]]];
const real_another_arr = anotherArr.flat(2); // give the depth here 4 or give Infinity
// console.log(real_another_arr);

console.log(Array.isArray("Edson"))
console.log(Array.from("Edson"))
console.log(Array.from({name: "Edson"})) // this will give an empty array so write something like below 👇
console.log(Array.from( {length: 1, 0:"Edson"}))

const a  = 24;
const b  = 243;
const c  = 224;

console.log(Array.of(a, b, c))