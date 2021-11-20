const { Board, Led } = require("johnny-five");
const cors = require("cors");
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const board = new Board({
  port: "COM3",
});

let beeper;

board.on("ready", () => {
  console.log("Ready!");

  beeper = new Led(13);
});

app.get("/api/startBeeper", (_req, res) => {
  console.log("on");

  beeper.on();
  res.send({
    message: "on",
  });
});

app.get("/api/stopBeeper", (_req, res) => {
  console.log("off");

  beeper.off();
  res.send({
    message: "off",
  });
});

const server = app.listen(PORT, () => {
  console.log(`endpoints running on port ${PORT}`);
});

module.exports = server;
