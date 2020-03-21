const { Board, Led } = require("johnny-five");
const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();
const board = new Board();
const server = app.listen(3000, () => {
    console.log("endpoints running on port 3000");
});

app.use(cors());
app.use(express.static(path.join(__dirname, '/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let led;

board.on("ready", () => {
    console.log("Ready!");

    led = new Led(13);
});

app.get('/api/startBeeper', (req, res) => {
    console.log('on');

    led.on();
    res.send({
        message: 'on'
    });
});

app.get('/api/stopBeeper', (req, res) => {
    console.log('off');
    
    led.off();
    res.send({
        message: 'off'
    });
});

module.exports = server;