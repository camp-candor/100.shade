
import { SpritesheetModel } from "../spritesheet.model";
import SpritesheetBit from "../fce/spritesheet.bit";
import State from "../../99.core/state";

import { Container, AnimatedSprite, Texture, Spritesheet, Assets, Sprite } from 'pixi.js';

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActSsh from "../spritesheet.action";
import SheetBit from "../fce/sheet.bit";

var bit, dat;

export const initSpritesheet = (cpy: SpritesheetModel, bal: SpritesheetBit, ste: State) => {
    debugger
    return cpy;
};

export const updateSpritesheet = async (cpy: SpritesheetModel, bal: SpritesheetBit, ste: State) => {

    bit = await ste.hunt(ActSsh.READ_SPRITESHEET, { idx: bal.idx })
    dat = bit.sshBit.dat

    //dat.bit.position = new BABYLON.Vector3(dat.position.x, dat.position.y, dat.position.z);

    bal.slv({ sshBit: { idx: "update-spritesheet" } });
    return cpy;
};


export const readSpritesheet = async (cpy: SpritesheetModel, bal: SpritesheetBit, ste: State) => {


    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActSsh.CREATE_SPRITESHEET })
    //if (slv != null) slv({ canBit: { idx: "read-container", dat: bit.clcBit.dat } });
    //return cpy;

    bal.slv({ sshBit: { idx: "read-spritesheet", dat: bit.clcBit.dat } });
    return cpy;
};



export const writeSpritesheet = async (cpy: SpritesheetModel, bal: SpritesheetBit, ste: State) => {


    if (typeof window != "object") return bal.slv({ canBit: { idx: "error-write-miku", dat: {} } });

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActSsh.CREATE_SPRITESHEET })

    if (bit.clcBit.val != 0) ste.hunt(ActSsh.UPDATE_SPRITESHEET, { idx: bal.idx })

    //if (bal.slv != null) bal.slv({ canBit: { idx: "write-container", dat: bit.clcBit.dat } });

    bal.slv({ sshBit: { idx: "write-spritesheet", dat: bit.clcBit.dat } });
    return cpy;
};


export const removeSpritesheet = async (cpy: SpritesheetModel, bal: SpritesheetBit, ste: State) => {

    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActSsh.DELETE_SPRITESHEET })
    if (bal.slv != null) bal.slv({ vsgBit: { idx: "remove-container", dat: bit.clcBit } });

    bal.slv({ sshBit: { idx: "remove-spritesheet" } });
    return cpy;
};

export const deleteSpritesheet = (cpy: SpritesheetModel, bal: SpritesheetBit, ste: State) => {
    debugger
    return cpy;
};

export const createSpritesheet = async (cpy: SpritesheetModel, bal: SpritesheetBit, ste: State) => {


    var dat: SheetBit = { idx: bal.idx, src: bal.src, bit:null  }

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }


    //const app = new PIXI.Application();

    // Initialize the application
    //await app.init({ background: '#00ff00', resizeTo: window });

    //const texture = await Assets.load('http://localhost:3000/img/000.png');

    // Create a bunny Sprite
    //const bunny = new Sprite(texture);

    // Center the sprite's anchor point
    //bunny.anchor.set(0.5);

    // Move the sprite to the center of the screen
    //bunny.x = 0;
    //bunny.y = 0;

    //app.stage.addChild(bunny);

    //await Assets.load([
    //    "http://localhost:3000/sprite/001/000.json"
    //]);

    // const texture2 = await Assets.load('http://localhost:3000/sprite/001/000.png');


    // const atlasData = Assets.cache.get('http://localhost:3000/sprite/001/000.json');

    // var image = atlasData.data.meta.image;

    // const spritesheet = new Spritesheet(
    //     Texture.from('http://localhost:3000/sprite/001/000.png'),
    //     atlasData.data
    // );

    // var sheet = await spritesheet.parse();
    // var lst = []
    // for ( var key in sheet){
    //     lst.push( sheet[key] )
    // }

    // const anim = new AnimatedSprite(lst);

    // app.stage.addChild(anim);


    // set the animation speed
    // anim.animationSpeed = 0.01666;
    // play the animation on a loop
    // anim.play();

    bal.slv({ mkuBit: { idx: "create-spritesheet", dat } });
   

    return cpy;
};


