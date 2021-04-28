// Access from browser with http://localhost:8080/
const express = require('express');
const mysql = require('mysql');
const conf = require('./conf.json');
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const QUERY = "SELECT * FROM `libraries` WHERE Postcode LIKE ? order by `Library Name`";

var app = express();

// Configure Express to use embedded JavaScript (EJS)
app.set("view engine", "ejs");

// Serve static content (images etc) from 'static' folder
app.use(express.static('static'));

// Callback function for the splash page request handler
function splash(request, response) {
    var option;
    if (typeof request.query.option == "undefined") {
        option = "BS%";
    }
    else {
        option = request.query.option;
    }
    response.render("index", {"option":option });
}

// Splash page (index.html) is served by default
app.get("/", splash);
app.get("/index.html", splash);

app.get("/map.html", function(request, response) {
    connection.query(QUERY, [request.query.option+" %"], function(err, rows) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else {
            response.render("map", {'rows':rows, "option":request.query.option });
        }
    });
});

app.get("/table.html", function(request, response) {
    connection.query(QUERY, [request.query.option+" %"], function(err, rows) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else {
            response.render("table", {'rows':rows, "option":request.query.option});
        }
    });
});

// Create connection
var connection = mysql.createConnection(conf[process.env.NODE_ENV].db);

// Use connection to connect to database
connection.connect(function(err){
	if (err) {
    	console.error("Connection error: ", err.message);    
	} else {
    	console.log("Connected as: ", connection.threadId);    
	}
});

app.listen(conf[process.env.NODE_ENV].port);
console.log("Listening on port %s", conf[process.env.NODE_ENV].port);