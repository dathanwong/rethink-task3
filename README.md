# Rethink Task 2
## How To Use
1. Make sure to npm install from the client folder and the top level folder
2. Navigate to the server folder and run node server.js to start the server
3. Navigate to the client folder and run npm start to start the frontend
## Backend Limitations
Currently the backend only supports data with a name property but this can be easily scaled out to include more data or different kinds of data. To add data to the database, send a POST request to localhost:8000/api/data with a body that has a "name" key. Forgetting to add data with the name key will break the frontend.
