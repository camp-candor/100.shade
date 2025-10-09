import * as clone from "clone-deep";
import * as Act from "./camera.action";
import { CameraModel } from "./camera.model";
import * as Buzz from "./camera.buzzer";
import State from "../99.core/state";

export function reducer(model: CameraModel = new CameraModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_CAMERA:
 return Buzz.updateCamera(clone(model), act.bale, state);

 case Act.INIT_CAMERA:
 return Buzz.initCamera(clone(model), act.bale, state);

case Act.READ_CAMERA:
 return Buzz.readCamera(clone(model), act.bale, state);
 
case Act.WRITE_CAMERA:
 return Buzz.writeCamera(clone(model), act.bale, state);
 
case Act.REMOVE_CAMERA:
 return Buzz.removeCamera(clone(model), act.bale, state);
 
case Act.DELETE_CAMERA:
 return Buzz.deleteCamera(clone(model), act.bale, state);
 
case Act.CREATE_CAMERA:
 return Buzz.createCamera(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
