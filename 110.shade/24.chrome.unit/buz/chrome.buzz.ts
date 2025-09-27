import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActFce from "../../02.surface.unit/surface.action";
import * as ActCan from "../../03.container.unit/container.action";

import * as ActChr from "../../24.chrome.unit/chrome.action";

import * as ActVsg from "../../21.visage.unit/visage.action";

var bit, val, idx, dex, lst, dat;

export const initChrome = (cpy: ChromeModel, bal: ChromeBit, ste: State) => {
  debugger
  return cpy;
};

export const updateChrome = (cpy: ChromeModel, bal: ChromeBit, ste: State) => {
  return cpy;
};


export const readChrome = async (cpy: ChromeModel, bal: ChromeBit, ste: State) => {

  var slv = bal.slv;
  if (bal.idx == null) bal.idx = 'ert00';
  bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActChr.CREATE_CHROME })
  if (slv != null) slv({ ambBit: { idx: "read-ambit", dat: bit.clcBit.dat } });
  return cpy;

};
export const writeChrome = async (cpy: ChromeModel, bal: ChromeBit, ste: State) => {

  var dat;

  if (bal.src == null) {
    bit = await ste.hunt(ActChr.UPDATE_CHROME, bal)
  } else {
    dat = bal.dat
  }

  bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat, bit: ActChr.CREATE_CHROME })

  //var clkBit = bit.clcBit.dat.clkBit

  if (bal.slv != null) bal.slv({ ambBit: { idx: "write-ambit", dat: bit.clcBit.dat } });


  return cpy;


  return cpy;
};
export const removeChrome = (cpy: ChromeModel, bal: ChromeBit, ste: State) => {
  debugger
  return cpy;
};
export const deleteChrome = (cpy: ChromeModel, bal: ChromeBit, ste: State) => {
  debugger
  return cpy;
};
export const createChrome = async (cpy: ChromeModel, bal: ChromeBit, ste: State) => {

  if (bal.idx == null) bal.idx = 'chr00';
  idx = bal.idx

  var shi: ShineBit = bal.dat
  //if (sim == null) sim = { idx }
  if (shi.idx == null) shi.idx = bal.idx;
  if (shi.src == null) shi.src = "chrome-bit";
  //if (sim.lst == null) sim.lst = [];
  //if (sim.now == null) sim.now = 0;
  //if (sim.cde == null) sim.cde = 'time-code';

  shi.bit = bit

  //timecode should go here
  //sim.clkBit = clkBit;
  //sim.lvl = COSMOS.BLESSED.idx;
  //bit = await ste.hunt(ActClr.FETCH_COLOR, { idx: sim.lvl })
  //sim.pow = bit.clrBit.dat
  //bit = await ste.hunt(ActClr.FETCH_COLOR, { idx: sim.lvl })
  //sim.fte = bit.clrBit.dat

  if (bal.slv != null) bal.slv({ chrBit: { idx: "create-chrome", dat: shi } });
  return cpy;
};
import { ChromeModel } from "../chrome.model";
import ChromeBit from "../fce/chrome.bit";
import State from "../../99.core/state";
import ShineBit from "../fce/shine.bit";

