const BASE_URL = "http://localhost:3000"
const USER_URL = `${BASE_URL}/users`
let currentUser = null

document.addEventListener('DOMContentLoaded', event => {
    signupForm()
    loginForm()
})

// signup 
function signupForm() {
    let signup = document.getElementById("signup")
    signup.addEventListener("submit", event => {
        event.preventDefault()
        let user = { name: event.target.name.value }
        postUser(user)
    })
}

function postUser(user) {
    fetch(USER_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application.json",
            Accept: "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

// login
function loginForm() {
    let login = document.getElementById("login")
    login.addEventListener("submit", event => {
        event.preventDefault()
        let user = { name: event.target.name.value }
        loginUser(user)
    })
}

function loginUser(user) {
    fetch(USER_URL)
        .then(res => res.json())
        .then(data => validUser(data, user))
        .catch(err => console.log(err))
}

function validUser(data, user) {
    let currentUserH3 = document.getElementById("current-user")
    let userExists = data.find(u => u.name == user.name)
    if (userExists) {
        currentUser = userExists
        currentUserH3.textContent = currentUser.name
        //render explore page here??
    } else {
        alert("User Does Not Exist")
    }
}

