import { Action } from "../99.core/interface/action.interface";
import  MotionBit  from "./fce/motion.bit";

// Motion actions

export const INIT_MOTION = "[Motion action] Init Motion";
export class InitMotion implements Action {
 readonly type = INIT_MOTION;
 constructor(public bale: MotionBit) {}
}

export const UPDATE_MOTION = "[Motion action] Update Motion";
export class UpdateMotion implements Action {
 readonly type = UPDATE_MOTION;
 constructor(public bale: MotionBit) {}
}

export type Actions = | InitMotion | UpdateMotion ;
