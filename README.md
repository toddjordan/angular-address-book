Programming Exercise: Address Book
---
## Screenshot
![alt text](https://github.com/toddjordan/address-book-exercise/blob/master/screenshots/AppScreenShot.png "awesome sauce")
## Setup
1. Install NodeJS
2. Install Dependencies
```bash
npm install
```

## Run Server
```bash
node server.js
```
## Run Server with Nodemon
```bash
gulp start
```

## Run Unit Tests and JSHint
```bash
gulp
```

## Continuously run Unit tests and JSHint as files change
```bash
gulp watch
```

## Run end to end protractor tests
the "gulp e2e" command will fire up nodemon and run the tests.
```bash
webdriver-manager update
webdriver-manager start
gulp e2e
```

## URL Endpoints
**App:**
http://localhost:8080/app

**Mockup:**
http://localhost:8080/mockup/

**People Data:**
http://localhost:8080/api/people

## Unit Test Results
![alt text](https://github.com/toddjordan/address-book-exercise/blob/master/screenshots/UnitTestReport.png "Unit Tests")
![alt text](https://github.com/toddjordan/address-book-exercise/blob/master/screenshots/UnitTestCoverageReport.png "Unit Test Coverage")

## Goals
- ~~Create a simple address book web application and use the given static
  HTML mockup (`mockup/index.html`) as a starting point or as inspiration.~~
- ~~Your web application should fetch people data from http://localhost:8080/api/people~~
- ~~Renders the names of all people from the people data in the left panel
  in alphabetical order.~~
- ~~When a person's name is clicked in the left panel, render the full profile in the right panel.~~
- ~~Update the `README.md` with any instructions for running the web application.~~

### Bonus Points
- ~~Add image URLs to the people data and render these photos in the profile~~
- ~~Make it possible to change sort order of people shown in directory panel~~

### Additional Notes
- Feel free to use any framework or library (or use vanilla JavaScript)
- Feel free to modify `data/people.json` with any changes that you see fit.
- Feel free to add additional routes to the express app by modifying `server.js`
- Your address book does not need to use the exact same CSS or HTML as provided
  by the mockup.
