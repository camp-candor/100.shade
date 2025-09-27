import { Action } from "../99.core/interface/action.interface";
import  SpritesheetBit  from "./fce/spritesheet.bit";

// Spritesheet actions

export const INIT_SPRITESHEET = "[Spritesheet action] Init Spritesheet";
export class InitSpritesheet implements Action {
 readonly type = INIT_SPRITESHEET;
 constructor(public bale: SpritesheetBit) {}
}

export const UPDATE_SPRITESHEET = "[Spritesheet action] Update Spritesheet";
export class UpdateSpritesheet implements Action {
 readonly type = UPDATE_SPRITESHEET;
 constructor(public bale: SpritesheetBit) {}
}

export const READ_SPRITESHEET = "[Read action] Read Spritesheet";
 export class ReadSpritesheet implements Action {
 readonly type = READ_SPRITESHEET;
 constructor(public bale: SpritesheetBit) {}
 }
 
export const WRITE_SPRITESHEET = "[Write action] Write Spritesheet";
 export class WriteSpritesheet implements Action {
 readonly type = WRITE_SPRITESHEET;
 constructor(public bale: SpritesheetBit) {}
 }
 
export const REMOVE_SPRITESHEET = "[Remove action] Remove Spritesheet";
 export class RemoveSpritesheet implements Action {
 readonly type = REMOVE_SPRITESHEET;
 constructor(public bale: SpritesheetBit) {}
 }
 
export const DELETE_SPRITESHEET = "[Delete action] Delete Spritesheet";
 export class DeleteSpritesheet implements Action {
 readonly type = DELETE_SPRITESHEET;
 constructor(public bale: SpritesheetBit) {}
 }
 
export const CREATE_SPRITESHEET = "[Create action] Create Spritesheet";
 export class CreateSpritesheet implements Action {
 readonly type = CREATE_SPRITESHEET;
 constructor(public bale: SpritesheetBit) {}
 }
 
export type Actions = | InitSpritesheet | UpdateSpritesheet 
| ReadSpritesheet
| WriteSpritesheet
| RemoveSpritesheet
| DeleteSpritesheet
| CreateSpritesheet