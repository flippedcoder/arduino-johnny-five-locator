const { Board, Led } = require("johnny-five");
const cors = require("cors");
const express = require("express");

const app = express();
const server = app.listen(3000, () => {
  console.log("endpoints running on port 3000");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const board = new Board({
  port: "COM4",
});

let beeper;

board.on("ready", () => {
  console.log("Ready!");

  beeper = new Led(13);
});

app.get("/api/startBeeper", (req, res) => {
  console.log("on");

  beeper.on();
  res.send({
    message: "on",
  });
});

app.get("/api/stopBeeper", (req, res) => {
  console.log("off");

  beeper.off();
  res.send({
    message: "off",
  });
});

module.exports = server;
