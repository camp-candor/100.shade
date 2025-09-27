
import * as ActFce from "@shade/02.surface.unit/surface.action";
import * as ActTxt from "@shade/05.text.unit/text.action";
import * as ActCan from "@shade/03.container.unit/container.action";
import * as ActHex from "@shade/07.hexagon.unit/hexagon.action";

import React from 'react'

let hunt;
const Test = (bus) => {

  hunt = bus;
  var bit;

  var sim = hunt.sim

  bit = sim(ActTxt.WRITE_TEXT, { idx: "txt02", dat: { txt: 'hexagon----' } })

  let init = async () => {
    bit = await sim(ActTxt.WRITE_TEXT, { idx: "txt02", dat: { txt: 'hexagon test' } })
  }


  return (
    <div>
      Testing hexagon...
    </div>
  )


}

export default Test


