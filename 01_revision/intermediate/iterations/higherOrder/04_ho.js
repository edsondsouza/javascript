const superheros = ["spiderman", "superman", "batman", "ironman", "thor"]


// const heros = superheros.forEach((heros) => {
//   // console.log(heros)
//   return heros;
// })
// console.log(heros) // forEach loop does not return anything. The above code gives "undefined"

// filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const value = numbers.filter((num) => {
//   return num > 5
// })
// const value = numbers.filter((num) => (num > 4))
// const value = numbers.filter((num) => num > 2)
// console.log(value);

console.log("Using forEach method")
numbers.forEach((num) => {
  if (num > 2) {
    console.log(num)
  }
})