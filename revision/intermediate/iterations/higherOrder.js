// for of => does not work for objects
// Maps
// for in
// forEach => forEach does not return any CSSMathValue, therefore we use filter method
// filter => return a value, this is a true or false game
// map
// reduce


const myObj = {
  user: "Edson",
  age: 21
}

// for (const obj of myObj) {
//   console.log(obj)
// } // Objects are not iterable

// for (const obj in myObj) {
//   console.log(myObj[obj])
// }

const myarr = [1, 2,3 ,4,5,6,7]

// for (const index of myarr) {
//   console.log(index)
// }

for (const key in myarr) {
  // console.log(key)
} // index of array

// myarr.forEach((item) => {
//   console.log(item)
// })

const arrayofobjs = [
  {
    user1: "Edson",
    age: 21
  },
  {
    user2: "Vivek",
    age: 24
  },
  {
    user3: "Dileep",
    age: 25
  }
]

// arrayofobjs.forEach((item) => {
//   console.log(item.user1)
//   console.log(item.age)
// })

