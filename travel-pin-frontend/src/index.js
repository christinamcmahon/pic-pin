// unsplash api links
let API_BASE_URL = "https://api.unsplash.com/search/photos?&client_id=28dcfd24d5d678c88e38fcb751323ba6bae6b9eec6d3d514f24f645deb90b2b4&query="
let SEARCH = {};

// login links
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
    console.log(user);
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
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
    console.log(data);
    let currentUserH3 = document.getElementById("current-user")
    let userExists = data.find(u => u.name == user.name)
    if (userExists) {
        currentUser = userExists
        currentUserH3.textContent = currentUser.name
        //render explore page here??
        console.log(currentUser)
    } else {
        alert("User Does Not Exist")
    }
}


// fetch pics from unsplash api
function fetchPics() {
    event.preventDefault();
    const search_input = document.querySelector('input[type="search"]');
    
    console.log(search_input.value);
  const search = search_input.value;
  fetch( `${API_BASE_URL}${search}`)
      
    .then((res) => {
          return res.json();
      })
      .then((jsonData) => {
          console.log(jsonData);
          
      }).catch((error) => {
          console.error("Fetch pictures Error", error);
      });

}