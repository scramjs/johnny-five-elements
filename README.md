# JFive Web Components

Web components for controlling hardware with the [Johnny-Five](http://johnny-five.io/) JavaScript Robotics & IoT platform. Build robots declaratively with custom elements!

## Preview

Here is the concept:
```
<jfive-gpio pin="GPIO3" input="true"></jfive-gpio>

<jfive-led pin="GPIO21" interval="500" brightness="50"></jfive-led>
  
<jfive-button pin="GPIO23" on-push="buttonPush"></jfive-button>
  
<jfive-motor on="true" speed="128" reverse pwm-pin="GPIO18" dir-pin="GPIO21" cdir-pin="GPIO22"></jfive-motor>
  
<jfive-servo></jfive-servo>
```
Not all elements are implemented yet, but you can expect something like the above in the future. See what has been implemented in the `Components` section below.

## Installation

```
bower install --save jfive-web-components
npm install --save johnny-five raspi-io
```

## Use

These components can be run on a variety of devices using [Scram.js](https://github.com/scramjs/scram-engine).

You must be the root user while using these components:
```
sudo su
```

To understand which pins are available for use on the Raspberry Pi 3, use the following pin layout:
http://blog.mcmelectronics.com/post/Raspberry-Pi-3-GPIO-Pin-Layout#.WIN1XvErL0o 
Documentation for more devices and pin layouts may come later.

### Components

All of the components listed below have been implemented with the properties and events described.

## `<jfive-led></jfive-led>`

##### Properties

`on: boolean`

Turns the LED on or off.

`pin: string`

The GPIO pin that the positive end of the LED is connected to.

## `<jfive-motor></jfive-motor>`

`pwmPin: string`

The GPIO pin used to enable, disable, and control the speed of the motor with a 3-pin h-bridge.

`dirPin: string`

One of the GPIO pins used to control the direction of the motor with a 3-pin h-bridge.

`cdirPin: string`

One of the GPIO pins used to control the direction of the motor with a 3-pin h-bridge.

`on: boolean`

Turns the motor on or off.

`speed: number`

Controls the speed of the motor. Must be a number between 0 and 255.

`reverse: boolean`

Controls the direction of the motor, either clockwise or counterclockwise. The direction will be relative to the direction of the current.

You will most likely need a motor driver if you wish to control the direction of your motors. I highly recommend the L293D integrated circuit, which is a 3-pin h-bridge. To understand how to use the L293D:
http://www.rakeshmondal.info/L293D-Motor-Driver
https://business.tutsplus.com/tutorials/controlling-dc-motors-using-python-with-a-raspberry-pi--cms-20051
http://www.instructables.com/id/How-to-use-the-L293D-Motor-Driver-Arduino-Tutorial/step2/The-Circuit/
http://arduinoguides.blogspot.com/2012/06/using-l239-motor-driver.html

## Examples

Here are some example applications written with JFive Web Components:

* https://github.com/scramjs/web-copter

## What's Next?

Here are the things we are working towards. If you would like to contribute, open up an issue with the name of an item that is not being worked on and we'll have it assigned to you:

- [ ] Accelerometer component
  - [ ] Active development by: 
  * Discussion under: 
- [ ] Altimeter component
  - [ ] Active development by: 
  * Discussion under: 
- [ ] Animation component
  - [ ] Active development by:
  * Discussion under:
- [ ] Barometer component
  - [ ] Active development by:
  * Discussion under:
- [ ] Board component
  - [x] Active development by: [lastmjs](https://github.com/lastmjs)
  * Discussion under: [#16](https://github.com/scramjs/jfive-web-components/issues/16)

## Acknowledgements

Raspberry Pi is a trademark of the Raspberry Pi Foundation

Node.js is a trademark of Joyent, Inc. and is used with its permission. We are not endorsed by or
affiliated with Joyent.
