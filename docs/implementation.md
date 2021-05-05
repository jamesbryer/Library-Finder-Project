# Implementation

## Introduction
This will be the first release version of the application, v1.0.0

## Project Structure
All of the project files are located with the folder /server/. A brief description of these files and their purpose is provided below:

| File | Description | jslint warnings |
| ---- | ----------- | --------------- |
| **main.js** | The primary JavaScript file; acts as the server and handles all requests from the browser and appropriate responses. Also responsible for rendering the correct file EJS view and sending this as a response. | 13 errors |
| **/Views/index.ejs/** | View for the homepage | 1 error |
| **/Views/map.ejs** | View for the map page; displays to the user the location of libraries on the map. | 1 error |
| **/Views/table.ejs** | View for the table page; displays all libraries in the given area to the user. | 1 error |
| **/Views/templates/head.ejs** | Template for the html head contains the liks to all stylesheets used etc. | 1 error |
| **/Views/templates/header.ejs** | Template for the header of the page; Contains the title of the page and all relevant formatting. | 1 error |
| **/Views/templates/nav.ejs** | Template for the navigation bar; contains buttons for navigation to each page of the site. | 1 error |
| **/static/script.js** | Static JavaScript file containing 2 subroutines for getting the location of the user (geolocation) and loading the map with given co-ordinates. | 2 errors |
| **/static/style.css** | Contains the style template for the site | 1 error |
| **/test/test.js** | Contains a js file used for testing | 6 errors |


## Software Architecture
3 tier architecture:
1. Web app
2. Web server
3. Database

![Insert your component Diagram here](images/component.png)
