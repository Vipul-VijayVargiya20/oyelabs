const request = require("request");

function GooglehomeRequest() {
  return new Promise((resolve, reject) => {
    
    var url = "http://www.google.com"
      request(url, function (err, response, body) {

        if(err){
            reject(err)
        }else{
            resolve(body)
        }
        console.log( response); // Print the response status

        // code if a response was received

        console.log("body:", body); // Print the HTML for the Google homepage.
      });
  });
}

console.log(
  GooglehomeRequest()
    .then(res => console.log(res))
    .catch((error) => console.log(error))
);