// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tables data
// =============================================================
var tables = [
    {
        id: "afhaque89",
        name: "ron",
        email: "ron@example.com",
        phone: "000-000-0000"
    },
];

var waitlist = [
    {
        id: "afhaque89",
        name: "ron2",
        email: "ron2@example.com",
        phone: "000-000-0000"
    },
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view-tables", function (req, res) {
    res.sendFile(path.join(__dirname, "view-tables.html"));
});

app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

// Displays all tables, or returns false
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

// / Displays the waitlist, or returns false
app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


