# JFive Web Components

This repository contains experimental web components meant to be used with Raspberry Pi devices to control hardware.

## Quick Example

```
  <rasp-gpio pin="5" input="true"></rasp-gpio>

  <rasp-led pin="17" interval="500" brightness="50"></rasp-led>
  
  <rasp-button pin="21" pushed=""></rasp-button>
  
  <rasp-motor></rasp-motor>
  
  <rasp-servo></rasp-servo>
```

## Installation

```
bower install --save raspberry-web-components
npm install --save johnny-five raspi-io
```

## Use

Use the following pin layout. I'll describe in more detail the pin layouts in the future:
http://blog.mcmelectronics.com/post/Raspberry-Pi-3-GPIO-Pin-Layout#.WIN1XvErL0o

To understand how to use the L293D integrated circuit, which is a 3-pin h-bridge:
http://www.rakeshmondal.info/L293D-Motor-Driver
https://business.tutsplus.com/tutorials/controlling-dc-motors-using-python-with-a-raspberry-pi--cms-20051
http://www.instructables.com/id/How-to-use-the-L293D-Motor-Driver-Arduino-Tutorial/step2/The-Circuit/
http://arduinoguides.blogspot.com/2012/06/using-l239-motor-driver.html

You must be the root user while using these components:
```
sudo su
```
Then you can call your Node.js program.

* Install scram-engine
* Create `index.html` file
* Import and use components

## Acknowledgements

Raspberry Pi is a trademark of the Raspberry Pi Foundation

Node.js is a trademark of Joyent, Inc. and is used with its permission. We are not endorsed by or
affiliated with Joyent.
