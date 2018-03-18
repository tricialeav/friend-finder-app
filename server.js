// Your `server.js` file should require the basic npm packages we've used in class: `express`, `body-parser` and `path`.

const express = require ('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const path = require('path'); 

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });