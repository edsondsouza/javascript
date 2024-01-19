document.querySelector('#start').addEventListener('click', checkinterval, false)
document.querySelector('#stop').addEventListener('click', stopColor, false)

let intervalID;

function checkinterval(){
    if(!intervalID){
        intervalID = setInterval(changeColor, 1000)
    }
}

function changeColor(){
    let headingclass = document.getElementById('heading')
    headingclass.className = headingclass.className === 'green' ? 'red' : 'green'
}

function stopColor(){
    clearInterval(intervalID)
    intervalID = null
}