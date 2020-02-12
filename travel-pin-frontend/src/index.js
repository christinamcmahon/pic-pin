// ES Modules syntax
import Unsplash from 'unsplash-js';
// require syntax
const Unsplash = require('unsplash-js').default;
// const unsplash = new Unsplash({ accessKey: "{APP_ACCESS_KEY}" });
// const unsplash = new Unsplash({
//   accessKey: "{APP_ACCESS_KEY}",
//   // Optionally you can also configure a custom header to be sent with every request
//   headers: {
//     "X-Custom-Header": "foo"
//   },
//   // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
//   timeout: 500 // values set in ms
// });


document.addEventListener("DOMContentLoaded",() => {
    getUnsplash();
});

function getUnsplash(){
    return fetch("https://api.unsplash.com/", {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Accept-Version" : "v1"
        }
    })
        .then(res=>res.json())
        .then(photo=>console.log(photo))
        // .then(photo=>showPhoto(photo))
        .catch(err=>console.log(err))
}

function showPhoto(photo){
    console.log(photo)
    const unsplash = new Unsplash({ accessKey: "{APP_ACCESS_KEY}" });

}
