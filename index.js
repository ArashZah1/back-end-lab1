const express = require('express') //Require imports the express package into the file.  If you don't import the package is not used in the file.
const app = express() // app assigns express 
const cors = require('cors') //cors assigned to file.

app.use(cors()); //verb is for using package installed
app.use(express.json()); //bring in javascript object notation (basic structor file) express. runs the json package.


const friendsArr = ['Joe', 'John', 'Micheal', 'Michelle'];
app.get('/api/users', function(req, res) { // verb get requests to GET data from the server and the specific location is '' the function request and we respond with the status code and send the array. res is function is handler funct.  
    res.status(200).send(friendsArr); //response 200 send array funct
})

app.get("/weather/:temperature", (req, res) => {
    const {temperature} = req.params;
    const phrase = `<h3> It was ${temperature} today </h3>`; res.status(200).send(phrase);
})

const SERVER_PORT = 4000
app.listen(SERVER_PORT, function() {
    console.log(`Server is running on ${SERVER_PORT}`)
});
