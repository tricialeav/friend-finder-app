
const path = require('path');

module.exports = function(app) {

    app.get("/survey2", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey2.html"));
    });
    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}