const myarr = [1, 2, 3, 4, 5]

for (const num of myarr) {
  // console.log(num)
}

const greetings = "Hello"

for (const greet of greetings) {
  // console.log(greet)
}

// Maps 

const map = new Map()
map.set("in", "india")
map.set("us", "united states of america")
map.set("fn", "france")
// console.log(map)

for (const [key, value] of map) {
  // console.log(key, " => ", value)
}

const user = {
  name: "Edson",
  age: 21
}

for (const userinfo of user) {
  // console.log(userinfo) // objects are not iterable by default
}