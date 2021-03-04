# Requirements

## User Needs

### Actors
Library User living in Bristol.

### User stories
Story 1: As a library user, I want to find my nearest libraries so that I can find the book I want.  
Story 2: As a library user, I want my nearest libraries marked on a map so that I can find the directions to get there from my present location.  
Story 3: As a library user, I want to see the opening times of my local libraries so that I can plan when to visit.  
### Use Cases

| UC1 | See a list of nearest Libraries | 
| --- | ------------------------------- |
| **Description** | Perform a location search to provide nearest libraries |
| **Actors** | Library User |
| **Assumptions** | Library User is wanting to find libraries that are stored on Bristol Open Data</td></tr>
| **Steps** | <ol><li>Library User enters their search location and radius</li><li>Library User enters their search location and radius</li><li>Library User enters their search location and radius</li><li>Library User enters their search location and radius</li></ol>|
| **Variations** | Library User incorrectly enters location, validation needed |
| **Non-functional** | System should limit the entry to postcode and address |
| **Issues** | Decide whether to use geolocation or manual entry |

| UC2 | See nearest Libraries on a map | 
| --- | ------------------------------ |
| **Description** | Display the nearest libraries to the user on a map of the local area |
| **Actors** | Library User |
| **Assumptions** | The Library User wants to know the best possilbe routes to their local libraries </td></tr>
| **Steps** | <ol><li>Library user enters their postcode and radius</li><li>Program pulls data from Open Data Bristol and Google Maps</li><li>Program displays library locations from ODB on the map from Google Maps</li></ol> |
| **Variations** | <ol><li>Library user enters an invalid postcode - Validation required</li><li>Library user enters a postcode outside of the BS region - Warning message required (Open Data Bristol only stores data for the BS region)</li></ol> |
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. |
| **Issues** | Lack of experience relating to Google Maps' API could raise problems during development. |

| UC3 | See opening times of nearest Libraries | 
| --- | -------------------------------------- |
| **Description** | TODO: Goal to be achieved by use case and sources for requirement |
| **Actors** | TODO: List of actors involved in use case |
| **Assumptions** | TODO: Pre/post-conditions if any</td></tr>
| **Steps** | TODO: Interactions between actors and system necessary to achieve goal |
| **Variations** | TODO: OPTIONAL - Any variations in the steps of a use case |
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. |
| **Issues** | TODO: OPTIONAL - List of issues that remain to be resolved |


![Insert your Use-Case Diagram Here](images/ContextDiagram.png)

## Software Requirements Specification
### Functional requirements

* FR1: The system shall request location input of user, and search radius (from UC1)
* FR2: The system shall get libraries within search area from database (from UC2)
* FR3: The system shall display Libraries in order of distance (from UC2)


### Non-Functional Requirements
* NFR1: The system shall display a welcome message and brief explanation of purpose (from UC1)
* NFR2: The system shall enable user to read information for desired library (from UC3)

