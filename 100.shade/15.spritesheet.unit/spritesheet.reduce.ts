import * as clone from "clone-deep";
import * as Act from "./spritesheet.action";
import { SpritesheetModel } from "./spritesheet.model";
import * as Buzz from "./spritesheet.buzzer";
import State from "../99.core/state";

export function reducer(model: SpritesheetModel = new SpritesheetModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_SPRITESHEET:
 return Buzz.updateSpritesheet(clone(model), act.bale, state);

 case Act.INIT_SPRITESHEET:
 return Buzz.initSpritesheet(clone(model), act.bale, state);

case Act.READ_SPRITESHEET:
 return Buzz.readSpritesheet(clone(model), act.bale, state);
 
case Act.WRITE_SPRITESHEET:
 return Buzz.writeSpritesheet(clone(model), act.bale, state);
 
case Act.REMOVE_SPRITESHEET:
 return Buzz.removeSpritesheet(clone(model), act.bale, state);
 
case Act.DELETE_SPRITESHEET:
 return Buzz.deleteSpritesheet(clone(model), act.bale, state);
 
case Act.CREATE_SPRITESHEET:
 return Buzz.createSpritesheet(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
