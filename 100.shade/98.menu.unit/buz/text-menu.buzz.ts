import * as ActMnu from "../menu.action";
import * as ActShd from "../../00.shade.unit/shade.action";
import * as ActVsg from "../../21.visage.unit/visage.action"
import * as ActCan from "../../03.container.unit/container.action"
import * as ActTxt from "../../05.text.unit/text.action"

import * as ActTrm from "../../act/terminal.action";

var bit, lst, dex,src;

export const textMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: 'local' })

  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Text Menu", bit: 'local' })
  bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

  var lst = [ ActTxt.WRITE_TEXT, ActTxt.READ_TEXT, ActMnu.UPDATE_MENU ]
  bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

  bit = bit.trmBit;
  var idx = lst[bit.val];

  switch (idx) {

    case ActTxt.WRITE_TEXT:

      bit = bit.trmBit;
      src = lst[bit.val];

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Connecting to " + src, bit: 'local' })

      bit = await ste.bus(ActTrm.INPUT_TERMINAL, { lst: ["", "identify..."] });
      idx = bit.trmBit.src

      bit = await ste.bus(ActTxt.WRITE_TEXT, { idx, src })

      bit = await await ste.hunt(ActMnu.VISAGE_MENU, {})
      break;

      case ActTxt.READ_TEXT:

        bit = await ste.bus(ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { height: 720 } }, 'remote')
        bit = await await ste.hunt(ActMnu.VISAGE_MENU, {})
        break;


    default:
      bit = await await ste.hunt(ActMnu.UPDATE_MENU, {})
      break;

  }

  return cpy;
};



var patch = (ste, type, bale) => ste.dispatch({ type, bale });


import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
