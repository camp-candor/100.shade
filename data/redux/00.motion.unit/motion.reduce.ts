import * as clone from "clone-deep";
import * as Act from "./motion.action";
import { MotionModel } from "./motion.model";
import * as Buzz from "./motion.buzzer";
import State from "../99.core/state";

export function reducer(model: MotionModel = new MotionModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_MOTION:
 return Buzz.updateMotion(clone(model), act.bale, state);

 case Act.INIT_MOTION:
 return Buzz.initMotion(clone(model), act.bale, state);

 default:
 return model;
 }
}
