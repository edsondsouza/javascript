let user1 = {
  id: 1,
  name: "Edson",
  age: 21,
  college: "MVJ College of Engineering",
  batch: 2020,
};

// accessing the object properties
// console.log(user.id)
// console.log(user.name)
// console.log(user["age"])
// console.log(user["college"])
// console.log(user["name", "id"]) // considers only the last value
// console.log(user[["college"], ["age"]]) // considers only the last value

const mysymbol = Symbol("keyValue");
// console.log(typeof mysymbol)

let user2 = {
  id: 2,
  name: "Hitesh",
  age: 22,
  college: "MVJ College of Engineering",
  batch: 2022,
  [mysymbol]: "123",
};
// console.log(typeof mysymbol)
// console.log(user2[mysymbol])
// console.log(typeof user2[mysymbol])
// console.log(user2)

// important 👇
let user3 = {
  id: 1,
  name: "Edson",
  age: 21,
  college: "MVJ College of Engineering",
  batch: 2020,
};

user3.greeting = function () {
  return `Hello there, my name is ${this.name}`;
};

user3.greetingAgain = function greetingYouMan() {
  return "Hello there, my name is Edson Sooraj Dsouza";
};

// console.log(user3)
// console.log(user3.greeting())

// learn more about using "this" keyword in arrow function
let user4 = {
  name: "Edson",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
  greetArrow: () => {
    console.log(`Hello, ${this.name}`);
  },
};

console.log(user4);
console.log(user4.greet());
console.log(user4.greetArrow());
