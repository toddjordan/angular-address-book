Programming Exercise: Address Book
---

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

## URL Endpoints
**Mockup:**
http://localhost:8080/mockup/

**People Data:**
http://localhost:8080/api/people

## Goals
- Create a simple address book web application and use the given static
  HTML mockup (`mockup/index.html`) as a starting point or as inspiration.
- Your web application should fetch people data from http://localhost:8080/api/people
- Renders the names of all people from the people data in the left panel
  in alphabetical order.
- When a person's name is clicked in the left panel, render the full profile in the right panel.
- Update the `README.md` with any instructions for running the web application.

### Bonus Points
- Add image URLs to the people data and render these photos in the profile
- Make it possible to change sort order of people shown in directory panel

### Additional Notes
- Feel free to use any framework or library (or use vanilla JavaScript)
- Feel free to modify `data/people.json` with any changes that you see fit.
- Feel free to add additional routes to the express app by modifying `server.js`
- Your address book does not need to use the exact same CSS or HTML as provided
  by the mockup.
