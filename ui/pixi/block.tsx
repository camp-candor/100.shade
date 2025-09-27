'use client'


import State from "@shade/99.core/state";
import * as Import from "@shade/BEE";

import * as ActFce from "@shade/02.surface.unit/surface.action";
import * as ActTxt from "@shade/05.text.unit/text.action";
import * as ActCan from "@shade/03.container.unit/container.action";
import * as ActHex from "@shade/07.hexagon.unit/hexagon.action";



var once = false

function PixiCanvas({bus}) {


   let sim = {
        hunt: (a, b) => { },
        state: null
    };

    bus(sim)

    sim.hunt = (typ, obj) => { return host(obj, typ) }

    var host = (obj, typ) => {

        init();

        var slv;
        const promo = new Promise((rslv, rjct) => (slv = rslv));

        if (obj == null) obj = {};
        if (obj.slv == null) obj.slv = (val0) => slv(val0);

        sim.state.dispatch({ type: typ, bale: obj });
        return promo;
    };

    var init = () => {
        if (sim.state != null) return;
        sim.state = new State();
        sim.state.pivot = sim;
        sim.state.hunt = sim.hunt
        for (var k in Import.list) new Import.list[k](sim.state);
    };

    var bit;

    setTimeout(async () => {
        if (typeof window === 'undefined') {
            return
        }

        if (once == false) {
            once = true
            bit = await sim.hunt(ActFce.WRITE_SURFACE, { idx: "surface00" })
            bit = await sim.hunt(ActCan.READ_CONTAINER, { idx: "can-00" })

            var container = bit.canBit.dat.bit;

            bit = await sim.hunt(ActTxt.WRITE_TEXT, { idx: "txt00", dat: { txt: 'hi', can: 'can-00' } })
            var text = bit.txtBit.dat.bit
            container.addChild(text)

            bit = await sim.hunt(ActTxt.WRITE_TEXT, { idx: "txt01", dat: { y:10, txt: 'hi', can: 'can-00' } })
            var text = bit.txtBit.dat.bit
            container.addChild(text)

            bit = await sim.hunt(ActTxt.WRITE_TEXT, { idx: "txt02", dat: { y:30, txt: 'hi', can: 'can-00' } })
            var text = bit.txtBit.dat.bit
            container.addChild(text)

            return
        }

    }, 3)


    return (

        <div>
            <div id='indexCanvas'></div>
        </div>

    )
}

export default PixiCanvas
