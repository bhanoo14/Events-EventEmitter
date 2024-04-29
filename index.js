const EventEmitter = require("events");
const express = require("express");

const app = express();
const event = new EventEmitter();

app.get('/', (req, res) => {
    // Send HTML containing a button to the client
    res.send("<button>clickMe</button>");
});

// Setup event listener
event.on("Hello", () => {
    console.log("button clicked");
});

app.listen(3000, () => {
    console.log("App is listening at 3000");
});
