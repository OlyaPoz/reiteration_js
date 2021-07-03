'use strict'

function Accumulator(startingValue) {

  this.read = function(){
    this.value = +prompt("Value?") + startingValue;
  }
}

let accumulator = new Accumulator(3); 

accumulator.read();

alert(accumulator.value);


