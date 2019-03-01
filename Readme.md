### 👋 Welcome to the simple music API

This project is an express application that serves songs. It has 3 endpoints:

-   `/songs`: get all songs
-   `/songs/:id`: get one song by id
-   `/songs/:id/file`: get the audio file of the song

## Setup the project

-   `npm install`
-   `npm run test` to run the test suite
-   `npm start` to start the project. It runs by default on port 3000, `PORT=3001 npm start` to change it

## Navigating through the codebase

-   `index.js` is the entry point of the project
-   `src/server.js` is the actual express server
-   `src/db/` contains db methods and the json data for our music
-   `assets` contain the song files

## Areas of improvements

-   Add end to end tests to ensure all work good
-   Use a proper database
