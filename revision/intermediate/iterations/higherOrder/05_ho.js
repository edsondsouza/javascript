// map

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const mulwith10 = numbers
                        .map((num) => num * 10)
                        .map((num) => num + 1)
                        .filter((num) => num > 33)
console.log(mulwith10)