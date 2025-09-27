'use server'

import { okwierdo } from '@okwierdo/000.okwierdo.pvt';
import * as ActOkw from "@okwierdo/00.kwierdo.unit/kwierdo.action"
import * as ActGlv from "@okwierdo/02.glove.unit/glove.action"
import * as ActGnk from "@okwierdo/03.glopink.unit/glopink.action"
import * as ActFun from "@okwierdo/11.funfoot.unit/funfoot.action"


import { testTimeBus } from '@core/001.time'
import { testSpaceBus } from '@core/002.space'

//import { time } from '@time/001.time.pvt';
//import * as ActTme from "@time/00.time.unit/time.action"
//import * as ActClk from "@time/03.clock.unit/clock.action"

//import * as TIME from './001.time';
//import * as SPACE from './002.space';

//import * as ActPix from "@pixel/00.pixel.unit/pixel.action"
//import * as ActSpc from "@space/00.space.unit/space.action"

var dex = 0;
var now = 0;

var init = false;
var open = false;

var bit
var bit0, bit1, bit2
var idx;

const MQTT = require('async-mqtt')
//var host = 'ws://agent-network-8af0ee89ad26.herokuapp.com'
//var host = 'ws://localhost:80';
var host = 'ws://agent-network-8af0ee89ad26.herokuapp.com'

let bus;

export const initOkWierdo = async (val) => {

  const localBit = { idx: 'local', src: host };
  //fictiq(ActFtq.INIT_FICTIQ, { val: 0,  });

  bit = await okwierdo(ActOkw.INIT_KWIERDO, { val: 0, dat: MQTT, src: [localBit] });
  bus = bit.intBit.dat

  //bit = await time(ActTme.TEST_TIME, { idx: "surface00" })
  //bit0 = await TIME.init(0)  
  //bit1 = await pixel(ActPix.INIT_PIXEL, {})
  //bit2 = await SPACE.init(0)

  dex += 1;
  return { idx: 'init-okwierdo', dex, val: bit.intBit.val }
}
export const openOkWierdo = async (val) => {



  ////if (init == false) {
  ////  bit = await initFictiq(0)
  /// init = true;
  // }


  bit = await okwierdo(ActOkw.OPEN_KWIERDO, {});

  const millisecondsSinceEpoch = Date.now();
  const secondsSinceEpoch = Math.floor(millisecondsSinceEpoch / 1000);

  now = secondsSinceEpoch

  dex += 1;
  return { idx: 'open-okwierdo', dat: bit['okwBit'].dat }
}


export const initFunfoot = async (val) => {
  bit = await okwierdo(ActFun.INIT_FUNFOOT, {});
  dex += 1;
  return { idx: 'init-funfoot', dex }
}

export const openFunfoot = async (idx) => {
  var bitOpen = await okwierdo(ActFun.OPEN_FUNFOOT, {idx});
  dex += 1;
  return { idx: 'open-funfoot', dex, dat:bitOpen }
}


export const newFunfoot = async (idx) => {
  bit = await okwierdo(ActFun.NEW_FUNFOOT, {idx});
  dex += 1;
  return { idx: 'new-funfoot', dex, dat: bit }
}

export const readFunfoot = async (idx) => {
  bit = await okwierdo(ActFun.READ_FUNFOOT, { idx });
  dex += 1;
  return { idx: 'read-funfoot', dex, dat: bit }
}

export const writeFunfoot = async (idx) => {
  bit = await okwierdo(ActFun.WRITE_FUNFOOT, { idx });
  dex += 1;
  return { idx: 'write-funfoot', dex, dat: bit }
}


export const initTime = async (val) => {


  //if (bus == null) { return { idx: 'init-time-error', src: 'no-bus' } }
  //bit = await bus(ActTme.TEST_TIME, {});


  return { idx: 'init-Time', dex }

  dex += 1;
  return
}

export const testTime = async (val) => {
  var bit = await testTimeBus(bus)
  return bit;
}

export const testSpace = async (val) => {
  var bit = await testSpaceBus(bus)
  return bit;
}

export const readGlopink = async (dat) => {
  var bit = await okwierdo(ActGnk.READ_GLOPINK, dat);
  return bit;
}

export const writeGlopink = async (dat) => {
  var bit = await okwierdo(ActGnk.WRITE_GLOPINK, dat);
  return bit;
}


export const initGlopink = async (val) => {
  dex += 1;
  return { idx: 'init-glopink', dex }
}


export const testGlopink = async (val) => {

  bit = await okwierdo(ActGnk.TEST_GLOPINK, {});

  dex += 1;
  return { idx: 'init-glopink', dat: bit }
}


var ready = false;
export const readyFictiq = async (val) => {

  var bit = await okwierdo(ActOkw.READY_KWIERDO, {});
  dex += 1;

  return { idx: 'ready-fictiq', val: bit['okwBit'].val }
}


var count = 0;
var now = 0



var now = 0;
var next = 0

var lastList = []

export const updateOkwierdo = async (val) => {


  if (open == false) {
    //var bitOpen = await okwierdo(0)
    open = true;
  }


  now = Date.now();

  if (now < next) {

    // bit = await time(ActClk.WRITE_CLOCK, { idx: 'clk00', dat: { sec: 3 } })
    // var dat = bit['clkBit'].dat.src
    var dat

    return { idx: 'update-okwierdo', lst: [dat] }
  }


  next = now + 6000;

  console.log(" dex: " + dex)

  var bit = await okwierdo(ActOkw.UPDATE_KWIERDO, {});
  dex += 1;


  lastList = bit['okwBit'].lst
  return { idx: 'update-okwierdo', lst: lastList }
}


export const mqtt = async (val) => {


  //var client = MQTT.connect(host);

  //client.on('message', (tpc, msg) => {

  //messageBus(cpy, { idx: tpc, src: msg }, ste) 
  //})

  //client.on('connect', async () => {

  // var bit = await client.publish( '[Library action] Test Library',  JSON.stringify({}))

  //console.log("connected to mqtt " + JSON.stringify( bit ))

  //})


  return { idx: 'update-fictiq', dex }

}


export const loadProse = async () => {

  var FS = require('fs-extra')
  var dat = FS.readFileSync('./base/prose.md').toString()
  return dat

}


export const saveProse = async (dat) => {

  var src = './base/prose.md';

  var FS = require('fs-extra')
  var dat = FS.writeFileSync(src, String(dat))

  return { idx: 'sav-prose', dex }

}


