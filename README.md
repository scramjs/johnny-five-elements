# Raspberry Web Components

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
```

## Use

* Install scram-engine
* Create `index.html` file
* Import and use components

## Acknowledgements

Raspberry Pi is a trademark of the Raspberry Pi Foundation
