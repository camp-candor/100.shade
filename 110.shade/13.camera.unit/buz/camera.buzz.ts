import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActFce from "../../02.surface.unit/surface.action";
import * as ActCan from "../../03.container.unit/container.action";
import * as ActVsg from "../../21.visage.unit/visage.action";
import * as ActCam from "../../13.camera.unit/camera.action";

var bit, val, idx, dex, lst, dat;

export const initCamera = (cpy: CameraModel, bal: CameraBit, ste: State) => {
  debugger
  return cpy;
};

export const updateCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {

  bit = await ste.hunt(ActCam.READ_CAMERA, { idx: bal.idx })
  var dat: LensBit = bit.camBit.dat;

  var vsgBit = await ste.hunt(ActVsg.READ_VISAGE, { idx: "vsg00" })
  var canvas = vsgBit.vsgBit.dat.bit
  var x = canvas.width *.5 - dat.can.width * .5;
  var y = canvas.height *.5 - dat.can.height * .5;

  x -= bit.x;
  y -= bit.y

  //canvas.width / 2 - player.x)
  //var camBit = bit.camBit.dat;
  //read the surface
  //bit = await ste.hunt(ActCan.READ_CONTAINER, { idx: bal.src })
  //var canBit = bit.canBit.bit;

  //bit = await ste.hunt( ActFce.READ_SURFACE, { idx: bal.src })

  var auto = dat.can.getGlobalPosition()

  dat.twn = gsap.to( dat.bit, { y, x, duration: 1, ease: "linear" });

  if (bal.slv != null) return bal.slv({ camBit: { idx: "update-camera", dat } });

  return cpy;
};

export const createCamera = (cpy: CameraModel, bal: CameraBit, ste: State) => {

  var dat: LensBit = { idx: bal.idx, src: bal.src, typ: 'core', x: 0, y: 0 };

  for (var key in bal.dat) {
    dat[key] = bal.dat[key]
  }

  if (bal.slv != null) return bal.slv({ camBit: { idx: "create-camera", dat } });

  return cpy;
};



export const readCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {

  if (bal.idx == null) bal.idx = 'can00';
  bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActCam.CREATE_CAMERA })
  bal.slv({ camBit: { idx: "read-camera", dat: bit.clcBit.dat } });

  return cpy;
};

export const writeCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {

  bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCam.CREATE_CAMERA })

  ste.hunt(ActCam.UPDATE_CAMERA, { idx: bal.idx })

  if (bal.slv != null) bal.slv({ camBit: { idx: "write-camera", dat: bit.clcBit.dat } });

  return cpy;
};

export const removeCamera = (cpy: CameraModel, bal: CameraBit, ste: State) => {
  debugger
  return cpy;
};

export const deleteCamera = (cpy: CameraModel, bal: CameraBit, ste: State) => {
  debugger
  return cpy;
};


import { CameraModel } from "../camera.model";
import CameraBit from "../fce/camera.bit";
import State from "../../99.core/state";
import gsap from "gsap";
import LensBit from "../fce/lens.bit";

