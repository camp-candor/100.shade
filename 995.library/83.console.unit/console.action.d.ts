import { Action } from "../99.core/interface/action.interface";
import ConsoleBit from "./fce/console.bit";
export declare const INIT_CONSOLE = "[Console action] Init Console";
export declare class InitConsole implements Action {
    bale: ConsoleBit;
    readonly type = "[Console action] Init Console";
    constructor(bale: ConsoleBit);
}
export declare const UPDATE_CONSOLE = "[Console action] Update Console";
export declare class UpdateConsole implements Action {
    bale: ConsoleBit;
    readonly type = "[Console action] Update Console";
    constructor(bale: ConsoleBit);
}
export declare const READ_CONSOLE = "[Read action] Read Console";
export declare class ReadConsole implements Action {
    bale: ConsoleBit;
    readonly type = "[Read action] Read Console";
    constructor(bale: ConsoleBit);
}
export declare const WRITE_CONSOLE = "[Write action] Write Console";
export declare class WriteConsole implements Action {
    bale: ConsoleBit;
    readonly type = "[Write action] Write Console";
    constructor(bale: ConsoleBit);
}
export declare const REMOVE_CONSOLE = "[Remove action] Remove Console";
export declare class RemoveConsole implements Action {
    bale: ConsoleBit;
    readonly type = "[Remove action] Remove Console";
    constructor(bale: ConsoleBit);
}
export declare const DELETE_CONSOLE = "[Delete action] Delete Console";
export declare class DeleteConsole implements Action {
    bale: ConsoleBit;
    readonly type = "[Delete action] Delete Console";
    constructor(bale: ConsoleBit);
}
export declare const CREATE_CONSOLE = "[Create action] Create Console";
export declare class CreateConsole implements Action {
    bale: ConsoleBit;
    readonly type = "[Create action] Create Console";
    constructor(bale: ConsoleBit);
}
export type Actions = InitConsole | UpdateConsole | ReadConsole | WriteConsole | RemoveConsole | DeleteConsole | CreateConsole;
