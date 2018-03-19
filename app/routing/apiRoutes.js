// Your `apiRoutes.js` file should contain two routes:
    // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

const friendData = require("../data/friends");

module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });
  
    app.post("/api/friends", function(req, res) {
      // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
      // It will do this by sending out the value "true" have a table
      // req.body is available since we're using the body-parser middleware
      if (friendData.length < 5) {
        friendData.push(req.body);
        res.json(true);
      }
    });
  
    app.post("/api/clear", function() {
      friendData = [];
  
      console.log(friendData);
    });
  };
  