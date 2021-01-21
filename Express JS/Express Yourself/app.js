// Import the express library here
const express = require('express');
// Instantiate the app here
const app = express(); 

// In this example, our app.listen() call will start a server listening on port 4001, 
// and once the server is started it will log 'Server is listening on port 4001'.
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});