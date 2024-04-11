# Weather App

# Deployed link : https://weather32.vercel.app/

## Table of Contents

- [Features](#features)
- [Tools and Technologies](#tools-and-technologies)
- [Dependencies](#dependencies)
- [Prerequisites](#prerequisites)
- [Installation and setup](#installation-and-setup)
- [frontend pages](#frontend-pages)
- [npm scripts](#npm-scripts)
- [Useful Links](#useful-links)

## Features

### User-side features

- Page for Cities List
- Weather Details


## Tools and Technologies

- HTML
- CSS
- Javascript
- React

## Dependencies

Following are the major dependencies of the project:

- google-maps-react
- axios
- react
- react-dom
- react-router-dom
- @coreui/react
- @mui/material

## Prerequisites

- Node.js must be installed on the system.
- You should have a code editor (preferred: VS Code)

## Installation and Setup

1. Install all the dependencies in client

   ```sh
   npm install
   ```

2. Create a file named ".env" inside root folder
   ```sh
   REACT_APP_WEATHER_API_KEY=''
   GOOGLE_API_KEY_GOES_HERE=''
   ```
3. Start the application

   ```sh
   npm start
   ```

4. Go to http://localhost:3000


## Frontend pages

<pre>
- /                 Page for Cities List
- /home           Weather Details
</pre>

## npm scripts

Inside frontend folder:

-"start": "react-scripts start"
-"build": "react-scripts build"
-"test": "react-scripts test"
-"eject": "react-scripts eject"

## Useful Links

- This project

  - Github Repo: https://github.com/sachinsingh3232/WeatherApp

- Official Docs

  - Reactjs docs: https://reactjs.org/docs/getting-started.html
  - npmjs docs: https://docs.npmjs.com/
  - Github docs: https://docs.github.com/en/get-started/quickstart/hello-world
