
const friendData = require("../data/friends");
const compareFuncs = require('../data/match')
module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });
  
    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
        let match = compareFuncs.compare(friendData);
        res.json(match);
      }
    );
  
    app.post("/api/clear", function() {
      friendData = [];
    });
  };
  