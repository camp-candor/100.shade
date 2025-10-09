import { Action } from "../99.core/interface/action.interface";
import  ChromeBit  from "./fce/chrome.bit";

// Chrome actions

export const INIT_CHROME = "[Chrome action] Init Chrome";
export class InitChrome implements Action {
 readonly type = INIT_CHROME;
 constructor(public bale: ChromeBit) {}
}

export const UPDATE_CHROME = "[Chrome action] Update Chrome";
export class UpdateChrome implements Action {
 readonly type = UPDATE_CHROME;
 constructor(public bale: ChromeBit) {}
}

export const READ_CHROME = "[Read action] Read Chrome";
 export class ReadChrome implements Action {
 readonly type = READ_CHROME;
 constructor(public bale: ChromeBit) {}
 }
 
export const WRITE_CHROME = "[Write action] Write Chrome";
 export class WriteChrome implements Action {
 readonly type = WRITE_CHROME;
 constructor(public bale: ChromeBit) {}
 }
 
export const REMOVE_CHROME = "[Remove action] Remove Chrome";
 export class RemoveChrome implements Action {
 readonly type = REMOVE_CHROME;
 constructor(public bale: ChromeBit) {}
 }
 
export const DELETE_CHROME = "[Delete action] Delete Chrome";
 export class DeleteChrome implements Action {
 readonly type = DELETE_CHROME;
 constructor(public bale: ChromeBit) {}
 }
 
export const CREATE_CHROME = "[Create action] Create Chrome";
 export class CreateChrome implements Action {
 readonly type = CREATE_CHROME;
 constructor(public bale: ChromeBit) {}
 }
 
export type Actions = | InitChrome | UpdateChrome 
| ReadChrome
| WriteChrome
| RemoveChrome
| DeleteChrome
| CreateChrome