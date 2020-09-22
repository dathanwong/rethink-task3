# Rethink Task 3
## How To Use
1. Make sure to npm install from the client folder and the top level folder
2. Navigate to the server folder and run node server.js to start the server
3. Navigate to the client folder and run npm start to start the frontend
## Backend Limitations
Given an infinite number of urls stored in the database the URLs will no longer be too short but for a reasonable value of one billion URLs the shortened urls will still only have 8 characters at the end. To get these URLs to actually work we would need to set the server up to respond with an HTTP redirect when the short URL is hit. This feature has not been implemented.
## Notes
The backend uses the mongoose-auto-increment library https://www.npmjs.com/package/mongoose-auto-increment to generate an auto-incrementing ID for each document in the database. This id is converted to a hex string and appended to the end of the short url generator domain name that can be changed by the developer in the url.controller.js. 
