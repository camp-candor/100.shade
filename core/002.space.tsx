'use server'
import { space } from '@space/002.space.pvt';
import * as ActSpc from "@space/00.space.unit/space.action"
//import * as ActMap from "@act/hexmap.action"
import * as ActFoc from "@space/01.focus.unit/focus.action"

var dex = 0;
var now = 0;

var dat, idx;

var bit0, bit1, bit2

export const testSpaceBus = async (bus) => {

  //if ( bus == null){ return { idx: 'test-time-error',  src:'no-bus' }}
  //var bit = await bus(ActSpc.TEST_SPACE, {});
  //return { idx: 'test-space-bus',  dat:bit }
}


export const initSpace = async (val) => {
   bit0 = await space(ActSpc.INIT_SPACE, {})
   return bit0
}

export const forwardFocus = async (idx) => {
  // var bit = await space(ActFoc.FORWARD_FOCUS, { idx })

  // dat = bit['focBit'].dat  
  // return { idx: 'forward-focus', dat: JSON.stringify(dat) }
}

export const backwardFocus = async (idx) => {

  // var bit = await space(ActFoc.BACKWARD_FOCUS, { idx })

  // dat = bit['focBit'].dat

  // return { idx: 'backward-focus', dat: JSON.stringify(dat) }
}

export const spinLeftFocus = async (idx) => {

  //var bit = await space(ActFoc.SPIN_LEFT_FOCUS, { idx })

  //dat = bit['focBit'].dat

  //return { idx: 'spin-left-focus', dat: JSON.stringify(dat) }
}

export const spinRightFocus = async (idx) => {

  //var bit = await space(ActFoc.SPIN_RIGHT_FOCUS, { idx })
  //dat = bit['focBit'].dat

  //return { idx: 'spin-right-focus', dat: JSON.stringify(dat) }
}

export const writeFocus = async (idx) => {

  var bit = await space(ActFoc.WRITE_FOCUS, {idx})
  dat = bit['focBit'].dat


  dex += 1;

  return { idx: 'write-focus', dat: JSON.stringify(dat) }
}

export const atlasHexmap = async (dat) => {

  //var name = dat.name;
  //var scale = Number(dat.scale.split(":")[0]);
  //var data = JSON.parse(dat.geojson);
  //var bale = { idx: name, val: scale, dat: data }
  //var bit = await space(ActMap.ATLAS_HEXMAP, bale)
  //bit = bit['mapBit']
  //var idx = bit['dat'].name
  //dat = bit['dat']

  //bit = await space(ActMap.WRITE_HEXMAP, { idx, dat })

  dex += 1;

  return { idx: 'atlas-hexmap', dat: { src: idx, bit: JSON.stringify(dat.grid) } }
}






export const indexHexmap = async (dat) => {

  // var bit = await space(ActMap.INDEX_HEXMAP, { dat })
  // var idx = bit['mapBit'].idx
  // var lst = bit['mapBit'].lst

  // dex += 1;

  // return { idx: 'index-hexmap', dat: { idx, lst } }

}


export const saveHexmap = async (dat) => {

  // var bit = await space(ActMap.SAVE_HEXMAP, { dat })
  // var idx = bit['mapBit'].idx

  // dex += 1;

  return { idx: 'save-hexmap', dat: { idx } }
}


export const loadHexmap = async (idx) => {

  //  var bit = await space(ActMap.LOAD_HEXMAP, { idx })
  //  var idx = bit['mapBit'].dat.idx
  //  var dat = bit['mapBit'].dat


  //  var bit = await space(ActMap.WRITE_HEXMAP, { idx, dat: { bit: { grid: dat } } })



  //  var grid = bit['mapBit'].dat.bit.grid

  //  dex += 1;

  //  return { idx: 'load-hexmap', src: idx, dat: grid }
}


export const writeHexmap = async (dat) => {

  // var bit = await space(ActMap.WRITE_HEXMAP, dat)
  // var idx = bit['mapBit'].idx

  // dex += 1;

  // return { idx: 'write-hexmap', dat: { idx } }
}


export const listHexmap = async (dat) => {

  // var bit = await space(ActMap.LIST_HEXMAP, dat)
  // var lst = bit['mapBit'].lst


  // dex += 1;

  // return { idx: 'write-hexmap', lst }
}