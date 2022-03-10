const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// built in middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//custom middleware that calls the api router which splits end points into 4 different files
app.use(routes);
app.listen(PORT, () => { console.log(`listening on port ${PORT}`) })