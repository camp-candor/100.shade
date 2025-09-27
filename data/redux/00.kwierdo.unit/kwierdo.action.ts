import { Action } from "../99.core/interface/action.interface";
import  KwierdoBit  from "./fce/kwierdo.bit";

// Kwierdo actions

export const INIT_KWIERDO = "[Kwierdo action] Init Kwierdo";
export class InitKwierdo implements Action {
 readonly type = INIT_KWIERDO;
 constructor(public bale: KwierdoBit) {}
}

export const UPDATE_KWIERDO = "[Kwierdo action] Update Kwierdo";
export class UpdateKwierdo implements Action {
 readonly type = UPDATE_KWIERDO;
 constructor(public bale: KwierdoBit) {}
}

export type Actions = | InitKwierdo | UpdateKwierdo ;
