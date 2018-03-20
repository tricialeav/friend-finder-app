//Your `htmlRoutes.js` file should include two routes:
// A GET Route to `/survey` which should display the survey page.
// A default, catch-all route that leads to `home.html` which displays the home page.

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