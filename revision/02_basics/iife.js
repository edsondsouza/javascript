// iife => Immediately Invoked Function Expression

// why do we use iife => to prevent global scope pollution

/* syntax for iife

(function() {
  // code
})();

*/

(function() {
  var username = "edsondsouza"
  console.log(username)
})();
// console.log(username) // this will throw an error


(function dbconnection(name) {
  console.log(`${name}DB connected`)
})("Mongo");

(
  (name) => {
    console.log(`Database ${name} connected`)
  }
)("MongoDB")