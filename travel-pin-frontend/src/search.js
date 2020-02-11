const BASE_URL = "http://localhost:3000"
const CITIES_URL = `${BASE_URL}/cities`

let CITIES = {}; 
document.addEventListener('DOMContentLoaded', (event) => {
    fetchCities();


});



function fetchCities() {
    console.log("fetching cities")
    fetch(CITIES_URL)
    .then((res) => {
        return res.json();
    })
    .then((jsonData) => {
        console.log(jsonData);
    }).catch((error) => {
        console.error("Fetch Cities Error", error);
    });


}