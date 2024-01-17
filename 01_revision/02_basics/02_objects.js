const tinderUser = {}

// console.log(tinderUser)
tinderUser.id = 12
tinderUser.name = "Karan"
tinderUser.age = 22
tinderUser.email = "karan@gmail.com"

// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
      userfullname: {
          firstname: "hitesh",
          lastname: "choudhary"
      }
  }
}
// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// Object.assign interview question => target object and source object
// in the below code obj1 is the target object and obj2 and obj4 are sorce objects. This concept is important
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// const obj3 = Object.assign(obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4} // using spread operator

// console.log(obj3)
// console.log(obj1)
// console.log(obj3 === obj1)

const users = [
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id: 1,
      email: "c@gmail.com"
  },
  {
      id: 1,
      email: "g@gmail.com"
  },
]

// console.log(users[1].email)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// to check if the property exits
// console.log(tinderUser.hasOwnProperty("age"));

const course = {
  courseName: "js in hindi",
  price: "free",
  courseInstructor: "Hitesh"
}

// const {courseInstructor} = course
// console.log(courseInstructor)

// const {courseInstructor: instructor} = course
// console.log(instructor)

const {email} = tinderUser
console.log(email)

const {name: tinderUsername} = tinderUser
console.log(tinderUsername)