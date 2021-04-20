// Access from browser with http://localhost:8080/
const { query } = require('express');
const express = require('express');
const mysql = require('mysql');
const conf = require('./conf.json');

let postcodeRegion = ""; // Stores the postcode region the user has entered on the homepage for table.ejs and map.ejs
let QUERY = `SELECT * FROM isd.libraries WHERE Postcode LIKE '%${postcodeRegion}%'`; // Query for the db, MUST be updated after postcodeRegion changes.

var app = express();

// Dictionary mapping the value of Option to the postcode (1 : BS1, 13 : BS16 etc)
let postcodeDictionary = {
    "1" : "BS1",
    "2": "BS2",
    "3": "BS3",
    "4": "BS4",
    "5": "BS5",
    "6": "BS7",
    "7": "BS8",
    "8": "BS9",
    "9": "BS10",
    "10": "BS11",
    "11": "BS13",
    "12": "BS14",
    "13": "BS16",
    "14": ""
}; 

// Configure Express to use embedded JavaScript (EJS)
app.set("view engine", "ejs");

// Serve static content (images etc) from 'static' folder
app.use(express.static('static'));

// Callback function for the splash page request handler
function splash(request, response) {
    response.render("index", request.query);
}

// Splash page (index.html) is served by default
app.get("/", splash);
app.get("/index.html", splash);

app.get("/map.html", function(request, response){
    response.render("map", request.query);
});

app.get("/table.html", function(request, response){
    postcodeRegion = postcodeDictionary[request.query.option]; // Updates postcode region using the dictionary
    console.log(postcodeRegion);
    if (postcodeRegion != null) 
    {
        QUERY = `SELECT * FROM isd.libraries WHERE Postcode LIKE '%${postcodeRegion}%'`; // Updates query before use
    }
    else
    {
        QUERY = `SELECT * FROM isd.libraries`
    }
    
    connection.query(QUERY, function(err, rows, fields) {
        if (err) throw err;
        response.render("table", {'rows' : rows, postcodeRegion});
    });
});

// Create connection
var connection = mysql.createConnection(conf.db);

// Use connection to connect to database
connection.connect(function(err){
	if (err) {
    	console.error("Connection error: ", err.message);    
	} else {
    	console.log("Connected as: ", connection.threadId);    
	}
});

app.listen(conf.port);
console.log("Listening on port %s", conf.port);