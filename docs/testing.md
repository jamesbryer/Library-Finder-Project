# Testing

## Test Plan
UC1: created a test file and used mocha to test the selection of a postcode region to display results.

UC2: Manually ran tests for functional requirements FR4 (displaying libraries on the map) and FR2 (data has been stored in a local database).

UC3:
Using testcafe, I created a test script to ensure dropdown menu worked and displayed results

## Test Runs
UC1: I tested this three times, it worked every time.

| Use-Case ID | Requirement ID | Test Case | Status |
| ----------- | -------------- | --------- | ------ |
| UC1 | 1 | the request handler should take postcode area selection and query data, returning libraries and displaying in table | pass |
| UC3 | FR5 | the reuqest handler should take library selection and query data and return the chosen library's information | pass |

UC2:
This was all tested twice, both times it succeeded. 

| Use-Case ID | Requirement ID | Test Case | Status |
| ----------- | -------------- | --------- | ------ |
| UC2 | FR4 | the system will place the markers for the appropriate libraries onto an embed of OpenStreetMaps | pass |
| UC2 | FR2 | the system successfully connects to the local database storing the data from Open Data Bristol | pass |


