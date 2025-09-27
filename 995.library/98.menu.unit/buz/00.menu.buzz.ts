import * as ActMnu from "../menu.action";

import * as ActLib from "../../00.library.unit/library.action";
import * as ActUnt from "../../01.unit.unit/unit.action";
import * as ActAct from "../../02.action.unit/action.action";

import * as ActSde from "../../act/shade.action";

import * as ActClc from "../../97.collect.unit/collect.action";

import * as ActPut from "../../84.input.unit/input.action";
import * as ActTrm from "../../80.terminal.unit/terminal.action";
import * as ActChc from "../../85.choice.unit/choice.action";

import * as ActGrd from "../../81.grid.unit/grid.action";
//import * as ActCvs from "../../82.canvas.unit/canvas.action";
import * as ActCns from "../../83.console.unit/console.action";

import * as ActDif from "../../act/diffusion.action"
import * as ActCtl from "../../act/control.action";

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";

import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";

var bit, lst, dex, idx, dat, src, val;

var FS = require('fs-extra')
var S = require('string')
const path = require('path');
var exec = require('child_process').exec;

var SHADE

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null }

  bit = await ste.hunt(ActTrm.INIT_TERMINAL, {});

  bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 1, ySpan: 12 })
  //bit = await ste.hunt(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 8, ySpan: 12 })
  bit = await ste.hunt(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } })

  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Shade PIVOT V0" })
  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })

  if (global.SHADE == null) await new Promise<void>((resolve, reject) => exec('tsc -b 110.shade', err => err ? reject(err) : resolve()));
  if (global.SHADE == null) bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "compiled shade" });
  if (global.SHADE == null) global.SHADE = SHADE = require(path.resolve('./dist/110.shade/hunt'));

  updateMenu(cpy, bal, ste);

  return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  lst = [
    ActSde.BUILD_SHADE,
    ActLib.COUNT_LIBRARY,
    ActLib.COUNT_LIBRARY,
    ActUnt.UPDATE_UNIT,
    ActAct.UPDATE_ACTION,
    ActUnt.CREATE_UNIT,
    ActLib.UPDATE_LIBRARY,
    ActLib.LIST_LIBRARY,
    ActLib.COUNT_LIBRARY,

  ]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActSde.BUILD_SHADE:

      //var bit = await ste.hunt(ActSde.BUILD_SHADE, {})

      exec("tsc -b 110.shade", async (err, stdout, stderr) => {

        if (err) {
          console.error(`exec error: ${err}`);
        }

        bal.src = '110.shade'
        var template = 'node ./data/hand/000.eveiefy -t ' + bal.src;
        exec(template, async (err, stdout, stderr) => {
          if (err) {
            console.error(`exec error: ${err}`);
          }

        

          //var item = FS.readFileSync("./work/002.space.js").toString()

          //var replace = '_globals = (function(){ return this || (0,eval)("this"); }());'
          //item = S(item).replaceAll(replace, '').s

          bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "--SHADE BUILT" })
        });

      });


      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;


    case ActMnu.DIFFUSION_MENU:
      var bit = await ste.hunt(ActMnu.DIFFUSION_MENU, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;


    case ActAct.UPDATE_ACTION:

      bit = await ste.hunt(ActLib.LIST_LIBRARY, {})
      lst = bit.libBit.lst

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;

      bit = await ste.hunt(ActUnt.LIST_UNIT, { src })
      lst = bit.untBit.lst

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      idx = bit.chcBit.src;

      var updateBit = await ste.hunt(ActAct.UPDATE_ACTION, { idx, src })
      break;

    case ActUnt.CREATE_UNIT:

      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 6 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input verb', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      var updateBit = await ste.hunt(ActUnt.CREATE_UNIT, { idx })

      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

      bit = await ste.hunt(ActMnu.PRINT_MENU, updateBit)
      break;

    case ActUnt.UPDATE_UNIT:

      bit = await ste.hunt(ActLib.LIST_LIBRARY, {})
      lst = bit.libBit.lst

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;

      bit = await ste.hunt(ActUnt.LIST_UNIT, { src })
      lst = bit.untBit.lst

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      idx = bit.chcBit.src;

      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 6 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input verb', net: bit.grdBit.dat })
      dat = bit.putBit.src;

      var updateBit = await ste.hunt(ActUnt.UPDATE_UNIT, { idx, src, dat })
      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, updateBit)
      break;

    case ActUnt.CREATE_UNIT:

      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 6 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input verb', net: bit.grdBit.dat })
      idx = bit.putBit.src;

      var updateBit = await ste.hunt(ActUnt.CREATE_UNIT, { idx })

      bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

      bit = await ste.hunt(ActMnu.PRINT_MENU, updateBit)
      break;

    case ActLib.LIST_LIBRARY:
      var bit = await ste.hunt(ActLib.LIST_LIBRARY, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActLib.DEV_LIBRARY:
      var bit = await ste.hunt(ActLib.DEV_LIBRARY, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActLib.COUNT_LIBRARY:
      var bit = await ste.hunt(ActLib.COUNT_LIBRARY, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActLib.UPDATE_LIBRARY:
      var bit = await ste.hunt(ActLib.LIST_LIBRARY, {})
      lst = bit.libBit.lst

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

      src = bit.chcBit.src;

      var bit = await ste.hunt(ActLib.UPDATE_LIBRARY, { src })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;


    default:
      bit = await ste.hunt(ActTrm.CLOSE_TERMINAL, {})
      break;
  }

  setTimeout(() => {

    updateMenu(cpy, bal, ste);

  }, 1111)



  return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  await ste.hunt(ActTrm.CLOSE_TERMINAL, {})

  return cpy;
};

export const createMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
  debugger
  return cpy;
};


export const printMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  dat = bal;
  if (dat == null) return bal.slv({ mnuBit: { idx: "print-menu", dat } });

  var itm = JSON.stringify(dat);

  lst = itm.split(",");
  lst.forEach((a) => ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a }));
  ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "------------" });

  bal.slv({ mnuBit: { idx: "print-menu", dat: itm } });
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });


