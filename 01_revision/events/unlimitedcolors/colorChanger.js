const randomColorGenerator = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  document.querySelector("body").style.backgroundColor = color;
};

let colorChanger;

document.querySelector("#start").addEventListener('click', function(){
  console.log("started")
  if(!colorChanger){
    colorChanger = setInterval(randomColorGenerator, 2000)
  }
})

document.querySelector("#stop").addEventListener('click', function(){
  clearInterval(colorChanger)
  console.log("stopped")
  colorChanger = null
})

