// Create web server
// Create a new web server using Express
const express = require('express');
const app = express();

// Create a new route for the comments
app.get('/comments', (req, res) => {
  // Send the response
  res.send('This is the comments page');
});

// Start the server
app.listen(4001, () => {
  console.log('Server is running on http://localhost:4001/comments');
});