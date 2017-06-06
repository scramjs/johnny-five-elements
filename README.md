[![CircleCI](https://circleci.com/gh/scramjs/jfive-web-components.svg?style=shield)](https://circleci.com/gh/scramjs/jfive-web-components) [![npm version](https://img.shields.io/npm/v/jfive-web-components.svg?style=flat)](https://www.npmjs.com/package/jfive-web-components) [![dependency Status](https://david-dm.org/scramjs/jfive-web-components/status.svg)](https://david-dm.org/scramjs/jfive-web-components) [![devDependency Status](https://david-dm.org/scramjs/jfive-web-components/dev-status.svg)](https://david-dm.org/scramjs/jfive-web-components?type=dev)

# JFive Web Components

Web components for controlling hardware with the [Johnny-Five JavaScript Robotics & IoT platform](http://johnny-five.io/). Build hardware declaratively with custom elements!

# Introduction

Here is the concept:
```HTML
<jfive-board>
  <jfive-pin pin="GPIO3" input="true"></jfive-pin>
  <jfive-led pin="GPIO21" interval="500" brightness="50"></jfive-led>
  <jfive-button pin="GPIO23" on-push="buttonPush"></jfive-button>
  <jfive-motor on="[[motorOn]]" speed="128" pwm-pin="GPIO18" dir-pin="GPIO21" cdir-pin="GPIO22" reverse></jfive-motor>
</jfive-board>
```

We are currently working to support the entire Johnny-Five API. See which components have been implemented in the [Components section](#components). We could also use your help. To see what needs working on go to the [What's Next? section](#whats-next).

For more background information, see the following resources:
* [Universal Web Components article](https://scotch.io/bar-talk/universal-web-components)
* [Universal Web Components video presentation](https://www.youtube.com/watch?v=2eJkKJMSDCU&t=452s)
* [Server-side Web Components article](https://scotch.io/tutorials/server-side-web-components-how-and-why)
* [React Hardware article](http://iamdustan.com/2015/12/16/react-hardware/)

# Installation

```bash
npm install --save jfive-web-components
```

# Use

These components can be run on a variety of devices using [Scram.js](https://github.com/scramjs/scram-engine). Helpful instructions for specific devices are detailed below. Instructions for more devices may come in the future.

## Raspberry Pi

You'll need to install the Raspberry Pi IO plugin:

```bash
npm install --save raspi-io
```

Indicate your use of the Raspberry Pi IO plugin from your top-level `jfive-board` component:

```HTML
<jfive-board io-plugin="raspi-io">
</jfive-board>
```

You must be the root user while using these components:
```bash
sudo su
```

To understand which pins are available for use on the Raspberry Pi 3, use the following pin layout:
http://blog.mcmelectronics.com/post/Raspberry-Pi-3-GPIO-Pin-Layout#.WIN1XvErL0o
Documentation for more devices and pin layouts may come later.

# Components

All of the components listed below have been implemented with the properties, events, and methods described.

* [Board](#jfive-board)
* [Button](#jfive-button)
* [Led](#jfive-led)
* [Motor](#jfive-motor)
* [Pin](#jfive-pin)
* [Switch](#jfive-switch)

# jfive-board

#### Properties

# jfive-button

#### Properties

# jfive-led

#### Properties

`on: boolean`

Turns the LED on or off.

`pin: string`

The GPIO pin that the positive end of the LED is connected to.

# jfive-motor

#### Properties

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

# jfive-pin

#### Properties

# jfive-switch

#### Properties

# Examples

Here are some example applications written with JFive Web Components:

* https://github.com/scramjs/web-copter

# What's Next?

Here are the things we are working towards. An item is being worked on if there is a check next to `Active development by`. If you would like to contribute, open an issue with the name of an item that is not being worked on and we'll have it assigned to you:

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
- [ ] Button component
  - [x] Active development by: [bdemann](https://github.com/bdemann)
  * Discussion under: [#17](https://github.com/scramjs/jfive-web-components/issues/17)
- [ ] Compass component
  - [ ] Active development by:
  * Discussion under:
- [ ] ESC component
  - [ ] Active development by:
  * Discussion under:
- [ ] Expander component
  - [ ] Active development by:
  * Discussion under:
- [ ] GPS component
  - [ ] Active development by:
  * Discussion under:
- [ ] Gyro component
  - [ ] Active development by:
  * Discussion under:
- [ ] Hygrometer component
  - [ ] Active development by:
  * Discussion under:
- [ ] IMU component
  - [ ] Active development by:
  * Discussion under:
- [ ] Joystick component
  - [ ] Active development by:
  * Discussion under:
- [ ] Keypad component
  - [ ] Active development by:
  * Discussion under:
- [ ] LCD component
  - [ ] Active development by:
  * Discussion under:
- [ ] Led component
  - [x] Active development by: [bdemann](https://github.com/bdemann)
  * Discussion under: [#1](https://github.com/scramjs/jfive-web-components/issues/1)
- [ ] Led-Digits component
  - [ ] Active development by:
  * Discussion under:
- [ ] Led-Matrix component
  - [ ] Active development by:
  * Discussion under:
- [ ] Led-RGB component
  - [ ] Active development by:
  * Discussion under:
- [ ] Light component
  - [ ] Active development by:
  * Discussion under:
- [ ] Motion component
  - [ ] Active development by:
  * Discussion under:
- [ ] Motor component
  - [ ] Active development by:
  * Discussion under:
- [ ] Multi component
  - [ ] Active development by:
  * Discussion under:
- [ ] Piezo component
  - [ ] Active development by:
  * Discussion under:
- [ ] Pin component
  - [x] Active development by: [lastmjs](https://github.com/lastmjs)
  * Discussion under: [#15](https://github.com/scramjs/jfive-web-components/issues/15)
- [ ] Proximity component
  - [ ] Active development by:
  * Discussion under:
- [ ] Relay component
  - [ ] Active development by:
  * Discussion under:
- [ ] Sensor component
  - [ ] Active development by:
  * Discussion under:
- [ ] Servo component
  - [ ] Active development by:
  * Discussion under:
- [ ] ShiftRegister component
  - [ ] Active development by:
  * Discussion under:
- [ ] Stepper component
  - [ ] Active development by:
  * Discussion under:
- [ ] Switch component
  - [x] Active development by: [bdemann](https://github.com/bdemann)
  * Discussion under: [#19](https://github.com/scramjs/jfive-web-components/issues/19)
- [ ] Thermometer component
  - [ ] Active development by:
  * Discussion under:
- [x] Property-based testing structure
  - [x] Active development by: [lastmjs](https://github.com/lastmjs)
  * Discussion under: [#18](https://github.com/scramjs/jfive-web-components/issues/18)

## Acknowledgements

Raspberry Pi is a trademark of the Raspberry Pi Foundation

Node.js is a trademark of Joyent, Inc. and is used with its permission. We are not endorsed by or
affiliated with Joyent.
