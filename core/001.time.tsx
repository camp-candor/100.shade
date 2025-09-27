'use server'

//import { time } from '@time/001.time.pvt';
import * as ActTme from "@act/time.action"
import * as ActClk from "@act/clock.action"

var dex = 0;
var now = 0;

var bit0, bit1, bit2
export const testTimeBus = async ( bus ) => {

  if ( bus == null){ return { idx: 'init-time-error',  src:'no-bus' }}
  var bit = await bus(ActTme.TEST_TIME, {});
  return { idx: 'test-time-bus',  dat:bit }
}


//old way 
export const initClock = async (val) => {
  //this would go out on a bus
 // bit0 = await time(ActTme.INIT_TIME, {})
 // return bit0
}



