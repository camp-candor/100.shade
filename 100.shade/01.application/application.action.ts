import { Action } from "../99.core/interface/action.interface";
import  ApplicationBit  from "./fce/application.bit";

// Application actions

export const INIT_APPLICATION = "[Application action] Init Application";
export class InitApplication implements Action {
 readonly type = INIT_APPLICATION;
 constructor(public bale: ApplicationBit) {}
}

export const UPDATE_APPLICATION = "[Application action] Update Application";
export class UpdateApplication implements Action {
 readonly type = UPDATE_APPLICATION;
 constructor(public bale: ApplicationBit) {}
}

export const READ_APPLICATION = "[Read action] Read Application";
 export class ReadApplication implements Action {
 readonly type = READ_APPLICATION;
 constructor(public bale: ApplicationBit) {}
 }

export const WRITE_APPLICATION = "[Write action] Write Application";
 export class WriteApplication implements Action {
 readonly type = WRITE_APPLICATION;
 constructor(public bale: ApplicationBit) {}
 }

 export const REMOVE_APPLICATION = "[Write action] Remove Application";
 export class RemoveApplication implements Action {
 readonly type = REMOVE_APPLICATION;
 constructor(public bale: ApplicationBit) {}
 }

export const CREATE_APPLICATION = "[Create action] Create Application";
 export class CreateApplication implements Action {
 readonly type = CREATE_APPLICATION;
 constructor(public bale: ApplicationBit) {}
 }

export const DIMENSION_APPLICATION = "[Dimension action] Dimension Application";
 export class DimensionApplication implements Action {
 readonly type = DIMENSION_APPLICATION;
 constructor(public bale: ApplicationBit) {}
 }

export const DELETE_APPLICATION = "[Delete action] Delete Application";
 export class DeleteApplication implements Action {
 readonly type = DELETE_APPLICATION;
 constructor(public bale: ApplicationBit) {}
 }

export const EXTRACT_APPLICATION = "[Extract action] Extract Application";
 export class ExtractApplication implements Action {
 readonly type = EXTRACT_APPLICATION;
 constructor(public bale: ApplicationBit) {}
 }

export const LIST_APPLICATION = "[List action] List Application";
 export class ListApplication implements Action {
 readonly type = LIST_APPLICATION;
 constructor(public bale: ApplicationBit) {}
 }

export type Actions = | InitApplication | UpdateApplication
| ReadApplication
| WriteApplication
| CreateApplication
| DimensionApplication
| DeleteApplication
| RemoveApplication
| ExtractApplication
| ListApplication