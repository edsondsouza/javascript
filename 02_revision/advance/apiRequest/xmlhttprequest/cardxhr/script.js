const username = document.querySelector('.username')
const moreinformation = document.querySelector('.moreinformation')
const image = document.querySelector('img')
const visit = document.querySelector('.visitProfile')

const usergithub = 'https://github.com/edsondsouza'

const xhr = new XMLHttpRequest()
const apiuri = 'https://api.github.com/users/edsondsouza'
xhr.open('GET', apiuri)

xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
    if(xhr.readyState === 4) {
        console.log(this.responseText)
        const data = JSON.parse(this.responseText)
        image.setAttribute('src', data.avatar_url)
        username.innerText = data.name
        // console.log(username)
        // trying out (can do directly too)
        // const textnode = document.createTextNode(data.location)
        // moreinformation.appendChild(textnode)
        moreinformation.innerText = data.location

        visit.addEventListener('click', function(){
            // window.location.href = data.url
            window.open(usergithub, '_blank')
        })
    }
}
xhr.send()