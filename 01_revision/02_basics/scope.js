

function somefunction() {
  const pi = 3.14
  function anotherFunction() {
    console.log(pi)
  }
  console.log(pi)
  anotherFunction()
}

// anotherFunction() error
// console.log(pi) // error

// somefunction()

// randomFunction()
function randomFunction() {
  console.log("executed")
}
// randomFunction()

user() // error
let user = function() {
  console.log("code executed")
}

user()