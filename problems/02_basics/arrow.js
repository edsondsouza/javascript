// function chai(){
//     let username = "Edson"
//     console.log(this.username);
//     console.log(this)
// }

// const chai = function(){
//     let username = "Edson"
//     console.log(this.username);
//     console.log(this)
// }

const chai = () => {
  let username = "Edson"
  console.log(this.username);
  console.log(this)
}

// chai()
function outerFunction() {
  const arrowFunction = () => {
    console.log(this);
  };
  arrowFunction();
}

const obj = {
  name: "Example Object",
  outerFunction: outerFunction
};

obj.outerFunction();
