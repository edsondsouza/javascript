// creating the promise
// const promiseone = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('async code executed')
//         resolve()
//     }, 1000)
// })

// consuming the promise
// promiseone.then(function(){
//     console.log('promise resolved')
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve()
//         console.log('async code executed again!')
//     }, 2000)
// }).then(()=>{
//     console.log('promise is resolved')
// })

// data consumption in promise
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('data is provided via resolve')
//         resolve({username: 'edson', age: 21})
//     })
// })

// promiseThree.then(function(data){
//     console.log(data)
// })

// callback hell / thenables
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let result = false;
//         if(result){
//             resolve({username: 'edson', age: 21})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// }).then(function(data){
//     console.log(data)
//     return data.username
// }).then(function(username){
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log('finally will execute even if the promise is resolved or rejected')
// })

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let result = false
//         if(result){
//             resolve({username: 'edson', age: 21})
//         } else{
//             reject('ERROR: Something went wrong!')
//         }
//     }, 2000)
// })

// async function handlePromiseFive(){
//     try {
//         const data = await promiseFive
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// handlePromiseFive()

const userGithubUri = 'https://api.github.com/users/edsondsouza'

// async function getUserData(){
//     try {
//         const data = await fetch(userGithubUri)
//         // console.log(data)
//         // console.log(typeof data)
//         const objdata = await data.json()
//         console.log(objdata.name)
//     } catch (error) {
//         console.log(error)
//     }
// }
// getUserData()

fetch('https://api.github.com/users/edsondsouza')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data.name)
    console.log(data.location)
})
.catch(function(error){
    console.log(error)
})

