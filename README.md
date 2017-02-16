# JFive Web Components

Web components for controlling hardware with the [Johnny-Five](http://johnny-five.io/) JavaScript Robotics & IoT platform. Build robots declaratively with custom elements!

## Preview

Not all elements are implemented yet, but you can expect something like the following in the future:
```
  <jfive-gpio pin="GPIO3" input="true"></jfive-gpio>

  <jfive-led pin="GPIO21" interval="500" brightness="50"></jfive-led>
  
  <jfive-button pin="GPIO23" on-push="buttonPush"></jfive-button>
  
  <jfive-motor></jfive-motor>
  
  <jfive-servo></jfive-servo>
```

## Installation

```
bower install --save jfive-web-components
npm install --save johnny-five raspi-io
```

## Use

Use the following pin layout. I'll describe in more detail the pin layouts in the future:
http://blog.mcmelectronics.com/post/Raspberry-Pi-3-GPIO-Pin-Layout#.WIN1XvErL0o

You must be the root user while using these components:
```
sudo su
```

## Components

`<jfive-motor></jfive-motor>`

To understand how to use the L293D integrated circuit, which is a 3-pin h-bridge:
http://www.rakeshmondal.info/L293D-Motor-Driver
https://business.tutsplus.com/tutorials/controlling-dc-motors-using-python-with-a-raspberry-pi--cms-20051
http://www.instructables.com/id/How-to-use-the-L293D-Motor-Driver-Arduino-Tutorial/step2/The-Circuit/
http://arduinoguides.blogspot.com/2012/06/using-l239-motor-driver.html

## Acknowledgements

Raspberry Pi is a trademark of the Raspberry Pi Foundation

Node.js is a trademark of Joyent, Inc. and is used with its permission. We are not endorsed by or
affiliated with Joyent.
