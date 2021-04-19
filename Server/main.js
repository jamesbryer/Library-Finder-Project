// Access from browser with http://localhost:8080/
const express = require('express');
const mysql = require('mysql');
const conf = require('./conf.json');

const QUERY = "SELECT * FROM `libraries`";

var app = express();

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
    connection.query(QUERY, function(err, rows, fields) {
        if (err) throw err;
        response.render("table", {'rows' : rows});
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