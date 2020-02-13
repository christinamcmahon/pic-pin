// unsplash api links
let API_BASE_URL = "https://api.unsplash.com/search/photos?&client_id=28dcfd24d5d678c88e38fcb751323ba6bae6b9eec6d3d514f24f645deb90b2b4&query="
let SEARCH = {};

// track current user
let currentUser = null

document.addEventListener('DOMContentLoaded', () => {
    loginForm()
    const signupButton = document.getElementById("signup-button")
    signupButton.addEventListener("click", () => {
        signupForm()
    })
})

// signup 
function signupForm() {
    const loginDiv = document.getElementById("login-div")
    loginDiv.style.display = "none"
    const signupDiv = document.getElementById("signup-div")
    const signupForm = document.getElementById("signup-form")
    signupDiv.style.display = "block"
    signupForm.addEventListener("submit", event => {
        event.preventDefault()
        let user = { name: event.target.name.value }
        postUser(user)
    })
}

function postUser(user) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            console.log(res)
            const formsDiv = document.getElementById("forms-div")
            formsDiv.style.display = "none"
        })
        .catch(err => console.log(`ERROR:${err}`))
}

// login
function loginForm() {
    let loginForm = document.getElementById("login-form")
    loginForm.addEventListener("submit", event => {
        event.preventDefault()
        let user = { name: event.target.name.value }
        loginUser(user)
    })
}

function loginUser(user) {
    fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => validLogin(data, user))
        .catch(err => console.log(`ERROR:${err}`))
}

function validLogin(data, user) {
    let currentUserElement = document.getElementById("current-user")
    let userExists = data.find(userObj => userObj.name == user.name)
    if (userExists) {
        console.log("valid user")
        currentUser = userExists
        currentUserElement.textContent = currentUser.name
        //render explore page here??
    } else {
        alert("User Does Not Exist")
    }
}

// delete user
function deleteUser(currentUser) {
    fetch(`http://localhost:3000/users/${currentUser.id}`, {
        method: "DELETE"
    })
}

// edit user
function editUserForm() {
    let editForm = document.getElementById("edit-form")
    let editInput = document.getElementById("edit-input")
    editInput.value = currentUser.name
    editForm.addEventListener("submit", event => {
        event.preventDefault()
        let newName = editInput.value
        editUser(currentUser, newName)
    })
}

function editUser(currentUser, newName) {
    fetch(`http://localhost:3000/users/${currentUser.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({ name: newName })
    })
        .then(res => res.json())
        .then(data => {
            editedUser = data
            let currentUserElement = document.getElementById("current-user")
            currentUserElement.textContent = editedUser.name
        })
        .catch(err => console.log(`ERROR: ${err}`))
}

// fetch pics from unsplash api
function fetchPics() {
    event.preventDefault();
    const search_input = document.querySelector('input[type="search"]');

    // console.log(search_input.value);
    const search = search_input.value;
    fetch(`${API_BASE_URL}${search}`)

        .then((res) => {
            return res.json();
        })
        .then((jsonData) => {
            console.log(jsonData);

        }).catch((error) => {
            console.error("Fetch pictures Error", error);
        });

}