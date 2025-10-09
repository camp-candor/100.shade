import { Action } from "../99.core/interface/action.interface";
import  CameraBit  from "./fce/camera.bit";

// Camera actions

export const INIT_CAMERA = "[Camera action] Init Camera";
export class InitCamera implements Action {
 readonly type = INIT_CAMERA;
 constructor(public bale: CameraBit) {}
}

export const UPDATE_CAMERA = "[Camera action] Update Camera";
export class UpdateCamera implements Action {
 readonly type = UPDATE_CAMERA;
 constructor(public bale: CameraBit) {}
}

export const READ_CAMERA = "[Read action] Read Camera";
 export class ReadCamera implements Action {
 readonly type = READ_CAMERA;
 constructor(public bale: CameraBit) {}
 }
 
export const WRITE_CAMERA = "[Write action] Write Camera";
 export class WriteCamera implements Action {
 readonly type = WRITE_CAMERA;
 constructor(public bale: CameraBit) {}
 }
 
export const REMOVE_CAMERA = "[Remove action] Remove Camera";
 export class RemoveCamera implements Action {
 readonly type = REMOVE_CAMERA;
 constructor(public bale: CameraBit) {}
 }
 
export const DELETE_CAMERA = "[Delete action] Delete Camera";
 export class DeleteCamera implements Action {
 readonly type = DELETE_CAMERA;
 constructor(public bale: CameraBit) {}
 }
 
export const CREATE_CAMERA = "[Create action] Create Camera";
 export class CreateCamera implements Action {
 readonly type = CREATE_CAMERA;
 constructor(public bale: CameraBit) {}
 }
 
export type Actions = | InitCamera | UpdateCamera 
| ReadCamera
| WriteCamera
| RemoveCamera
| DeleteCamera
| CreateCamera