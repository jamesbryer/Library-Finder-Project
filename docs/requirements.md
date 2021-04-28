# Requirements

## User Needs

### Actors
Library User living in Bristol.

### User stories
Story 1: As a library user, I want to find my nearest library so that I can find the book I want.  
Story 2: As a library user, I want my nearest library marked on a map so that I can see how far it is from me.  
Story 3: As a library user, I want to see the contact information of my local libraries so that I can plan a visit.  
### Use Cases

| UC1 | See a list of nearest Libraries | 
| --- | ------------------------------- |
| **Description** | Display the Libraries in a table within a certain postcode area |
| **Actors** | Library User |
| **Assumptions** | Library User wants to know if there are any Libraries nearby</td></tr>
| **Steps** | <ol><li>Library User selects their postcode zone</li><li>Program pulls all libraries from database (data taken from Bristol Open Data) that are within their selected zone</li><li>Program displays libraries in a table</li></ol>|
| **Variations** | <ul><li>Library user wants to view a library out of the BS area - Limitation of Open Data Bristol information, it will only show libraries within Bristol</li></ul> |
| **Issues** | There may be no libraries within their area, application is designed for Brstol only |

| UC2 | See local Libraries on a map | 
| --- | ------------------------------ |
| **Description** | Display Library User's local libraries on a map of the local area |
| **Actors** | Library User |
| **Assumptions** | <ul><li>The Library User wants to know the best possible routes to their local libraries</li><li>Library user wants to go to a different library than they usually do to browse a different book selection</li> </td></tr>
| **Steps** | <ol><li>Library user selects their postcode area</li><li>Program pulls data from Open Data Bristol and OpenStreetMaps</li><li>Program displays library locations from ODB on the map from OpenStreetMaps</li></ol> |
| **Variations** | <ul><li>Library user wants to view a library out of the BS area - Limitation of Open Data Bristol information, it will only show libraries within Bristol</li></ul> |
| **Issues** | OpenStreetMaps is not interactive, the user cannot zoom in and out showing libraries in more detail/further away. |

| UC3 | See Contact Information of nearest Libraries | 
| --- | -------------------------------------- |
| **Description** | Display Contact Information for a Specified Library |
| **Actors** | Library User |
| **Assumptions** | The Library User knows which library they would like to find information about.</td></tr>
| **Steps** | <ol><li>User selects postcode area.</li><li>Programs pulls data from Open Data Bristol about the Library</li><li>Program displays contact information and address to the Library User</li></ol> |
| **Variations** | Link from map page for same function |
| **Issues** | Only information about libraries within the area is displayed, resubmitting the postcode area will be reuqired to view other libraries. |


![Insert your Use-Case Diagram Here](images/use-case.png)

## Software Requirements Specification
### Functional requirements

* FR1: The system must display postcode areas availble (from UC1)
* FR2: The system must pull data from Open data Bristol (from all use cases)
* FR3: The system shall display libraries within selected area from database (from UC1)
* FR4: The system shall display Library locations on a map (from UC2)
* FR5: The system shall display contact information for libraries (from UC3)


### Non-Functional Requirements
* NFR1: The system must produce accurate results (from UC1)
* NFR2: The system shall return results efficiently (from UC2)
* NFR3: The system shall have a user friendly interface (from all use cases)
