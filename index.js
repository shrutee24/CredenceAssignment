const express = require('express');
const mongoose = require('mongoose');
const movies = require('./models/moviedata.model.js');
const movieRoutes=require('./routes/movies.route.js');


const app = express();
const port = 3000;

// Middleware for parsing JSON data
app.use(express.json());


// Middleware for parsing URL-encoded data
app.use(express.urlencoded({extended: false}));

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use("/api/movies",movieRoutes)



// Connect to MongoDB
mongoose.connect('mongodb+srv://shruteemalode:btqpmFEVKPTWBA19@backendmongodb.jmm2n51.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendMongoDB')
  .then(() => {
    console.log('Connected!');
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Connection failed!", error);  // Log error
  });
