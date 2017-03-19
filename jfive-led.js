class JFiveLED {
  constructor(){
    super();
    this.jFive = require('johnny-five');
    const Raspio = require('raspi-io');

    try {
      const board = new this.jFive.Board({
        io: new Raspio(),
        repl: false
      });
    }
    catch(error){
      console.log(error);
    }

  }

  initLED() {
    try {
      this.LED = new this.JFive.Led(this.pin);
    }
    catch (error) {
      console.log(error);
    }
  }

  set pin(val) {
    this.pin = val;
    initLED();
  }

  set on(val) {
    this._changeStateLED(val);
  }

  set off(val) {
    this._changeStateLED(!val);
  }

  //Public Methods

  toggle(){
    this._changeStateLED(!this.on);
  }

  //Private Methods

  _changeStateLED(val){
    this.on = val;
    this.off = !val;
    if(val) {
      this.LED.on();
    }
    else {
      this.LED.off();
    }
  }
}

window.customElements.define('jfive-led', JFiveLED);
