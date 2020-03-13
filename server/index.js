const Cylon = require('cylon');
 
// define the robot
const robot = Cylon.robot({
  // change the port to the correct one for your Arduino
  connections: {
    arduino: { adaptor: 'firmata', port: 'COM3' }
  },
 // you can use the led driver for very simple devices, like the buzzer
 // you can change the pin to any other number you want
  devices: {
    led: { driver: 'led', pin: 13 }
  },
 
  work: (my) => {
    every((1).second(), my.led.toggle);
  }
});
 
// connect to the Arduino and start working
robot.start();