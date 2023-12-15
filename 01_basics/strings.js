const language = "JavaScript";
const ranking = 1
// console.log(typeof language) // string
// console.log(`The programming language ${language} is one of the most loved language among the developers and is ranked ${ranking} in 2023.`)

const city = new String("Bengaluru");
// console.log(city);
// console.log(typeof city); // Object

// console.log(city[0])
// console.log(city.length)
// console.log(city.toUpperCase())
// console.log(city) // this is important
// console.log(typeof city) // this is important
// console.log(city.toLowerCase())
// console.log(city.charAt(4))
// console.log(city.indexOf('a'))

// console.log(city.length)

// substring, string

// substring
// => indexStart, indexEnd

// => if indexEnd is not given, it will consider only the characters other than indexStart
// => if indexStart === indexEnd, return empty string
// => if indexStart is greater than indexEnd, swap and display the output

// => Any argument value that is less than 0 or greater than str.length is treated as if it were 0 and str.length, respectively.

// => Any argument value that is NaN is treated as if it were 0.
// Bengaluru
// console.log(city.substring(0, 4)) // Beng
// console.log(city.substring(2)) // ngaluru
// console.log(city.substring(2, 2)) // empty string
// console.log(city.substring(4,2)) // ng
// console.log(city.substring(7,2)) // ngalu
// console.log(city.substring(8,2)) // ngalur
// console.log(city.substring(NaN,2)) // NaN is treated as 0

// trim, includes, replace, split

const superHero = "Bhopender Jogi2 Bhoperder Jogi3"
// console.log(superHero.split(" "))

const someVariable = superHero.split(" ")
console.log(someVariable[1])
