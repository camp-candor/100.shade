import { Action } from "../99.core/interface/action.interface";
import  LibraryBit  from "./fce/library.bit";

// Library actions

export const INIT_LIBRARY = "[Library action] Init Library";
export class InitLibrary implements Action {
 readonly type = INIT_LIBRARY;
 constructor(public bale: LibraryBit) {}
}

export const UPDATE_LIBRARY = "[Library action] Update Library";
export class UpdateLibrary implements Action {
 readonly type = UPDATE_LIBRARY;
 constructor(public bale: LibraryBit) {}
}

export const TEST_LIBRARY = "[Library action] Test Library";
export class TestLibrary implements Action {
 readonly type = TEST_LIBRARY;
 constructor(public bale: LibraryBit) {}
}

export const COUNT_LIBRARY = "[Count action] Count Library";
 export class CountLibrary implements Action {
 readonly type = COUNT_LIBRARY;
 constructor(public bale: LibraryBit) {}
 }
 
export const LIST_LIBRARY = "[List action] List Library";
 export class ListLibrary implements Action {
 readonly type = LIST_LIBRARY;
 constructor(public bale: LibraryBit) {}
 }
 
export const DEV_LIBRARY = "[Dev action] Dev Library";
 export class DevLibrary implements Action {
 readonly type = DEV_LIBRARY;
 constructor(public bale: LibraryBit) {}
 }

 export const SETUP_SPECTRUM = "[Library action] Setup Spectrum";
 export class SetupSpectrum implements Action {
 readonly type = SETUP_SPECTRUM;
 constructor(public bale: LibraryBit) {}
 }
 
export const ASTRO_LIBRARY = "[Astro action] Astro Library";
 export class AstroLibrary implements Action {
 readonly type = ASTRO_LIBRARY;
 constructor(public bale: LibraryBit) {}
 }
 
export const QUEST_LIBRARY = "[Quest action] Quest Library";
 export class QuestLibrary implements Action {
 readonly type = QUEST_LIBRARY;
 constructor(public bale: LibraryBit) {}
 }
 
export type Actions = | InitLibrary | UpdateLibrary | TestLibrary 
| CountLibrary
| ListLibrary
| DevLibrary
| SetupSpectrum
| AstroLibrary
| QuestLibrary