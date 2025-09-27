import * as clone from "clone-deep";
import * as Act from "./kwierdo.action";
import { KwierdoModel } from "./kwierdo.model";
import * as Buzz from "./kwierdo.buzzer";
import State from "../99.core/state";

export function reducer(model: KwierdoModel = new KwierdoModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_KWIERDO:
 return Buzz.updateKwierdo(clone(model), act.bale, state);

 case Act.INIT_KWIERDO:
 return Buzz.initKwierdo(clone(model), act.bale, state);

 default:
 return model;
 }
}
