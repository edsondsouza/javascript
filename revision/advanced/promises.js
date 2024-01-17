// creating promise
// const promiseOne = new Promise(function (resolve, reject) {
// Async code
// DB connection, cryptography, networking request
//   setTimeout(function () {
//     console.log("Async code executed");
//     resolve();
//   }, 1000);
// });

// consuming promise
// promiseOne.then(function () {
//   console.log("resolve executed");
// });

// another way of creating and consuming promise
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async 2 task");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async task 2 resolved");
// });

// Third promise
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (data) {
  console.log(data);
});

// Fourth promise => example for chaining or callback hell
const promiseFour = new Promise(function (resolve, reject) {
  let error = false;
  if (!error) {
    resolve({ username: "edson", email: "edson@example.com" });
  } else {
    reject("ERROR: Something went wrong");
  }
});

promiseFour
  .then(function (userdata) {
    console.log(userdata);
    return userdata.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The promise is either resolved or rejected");
  });

// Fifth promise

// const promiseFive = new Promise(function (resolve, reject) {
//   let error = true;
//   if (!error) {
//     resolve({ username: "edson", email: "edson@example.com" });
//   } else {
//     reject("ERROR: JS went wrong");
//   }
// });

// you can use async-await or then-catch (your choice)
// async function handlePromiseFive() {
//   try {
//     const data = await promiseFive;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// handlePromiseFive();

// get all users using async-await
// async function getUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// getUsers()

// get users using then-catch
fetch("https://api.github.com/users/edsondsouza")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
