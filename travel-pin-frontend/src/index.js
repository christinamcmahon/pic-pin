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
        showNavOptions()
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

function showNavOptions() {
    const formsDiv = document.getElementById("forms-div")
    formsDiv.style.display = "none"
    const navOptions = document.getElementById("nav-options")
    navOptions.style.display = "block"
}

// photos from Unsplash API
function fetchPics() {
    event.preventDefault();
    const search_input = document.querySelector('input[type="search"]');
    const search = search_input.value;
    fetch(`${API_BASE_URL}${search}`)
        .then((res) => {
            return res.json();
        })
        .then((jsonData) => {
            console.log(jsonData);
            showPhotos(jsonData)
        }).catch((error) => {
            console.error("Fetch pictures Error", error);
        });
}

function showPhotos(photosArray) {
    console.log(photosArray.results[0])
    const photos = photosArray.results
    photos.map(photo => addPhoto(photo))
}

function addPhoto(photo) {
    const photos = document.getElementById("photos");
    const photoCard = makePhotoCard(photo);
    photos.appendChild(photoCard);
}

function makePhotoCard(photo) {
    console.log(photo)
    const div = document.createElement("div");
    div.className = "card";

    // make elements using api data...
    const img = document.createElement("img")
    img.src = photo.urls.regular


    const h2 = document.createElement("h2")
    h2.textContent = photo.tags[0].title

    //add all elements to div
    div.appendChild(img)
    div.appendChild(h2)

    return div;
}

