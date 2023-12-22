function sayName() {
  console.log("Edson");
}

// sayName()

function user() {
  let age = 21
  return age
  let name = "Edson"
  console.log(name)
}

const userInfo = user()
// console.log(userInfo)

function loggedIn(username = "User#1234") {
  if (!username) return "Please enter the username"

  return `${username} just logged in!!`
}

const userLoggedIn = loggedIn()
// console.log(userLoggedIn)

// object handling
function handleObject(user) {
  // console.log(`The name of the user is ${user.name} and his age is ${user.age}`)
}
handleObject({
  name: "Edson",
  age: 21
})

// array handling
function handleArray(myarray) {
  return myarray[1]
}

// console.log(handleArray([
//   100, 200, 300, 400, 500, 600
// ]))

const number = handleArray([
  100, 200, 300, 400, 500, 600
])

// console.log(number)

function calculateCartPrice(val1, val2, ...num1) {
  return num1
}

console.log(calculateCartPrice(200, 300, 400, 2000))
// Rest parameter should always be a last parameter