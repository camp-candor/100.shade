import { Action } from "../99.core/interface/action.interface";
import MenuBit from "./fce/menu.bit";

export const INIT_MENU = "[Menu action] Init Menu";
export class InitMenu implements Action {
  readonly type = INIT_MENU;
  constructor(public bale: MenuBit) { }
}

export const UPDATE_MENU = "[Menu action] Update Menu";
export class UpdateMenu implements Action {
  readonly type = UPDATE_MENU;
  constructor(public bale: MenuBit) { }
}

export const TEST_MENU = "[Menu action] Test Menu";
export class TestMenu implements Action {
  readonly type = TEST_MENU;
  constructor(public bale: MenuBit) { }
}

export const CLOSE_MENU = "[Menu action] Close Menu";
export class CloseMenu implements Action {
  readonly type = CLOSE_MENU;
  constructor(public bale: MenuBit) { }
}

export const GITHUB_MENU = "[Time action] Github Menu";
export class GithubMenu implements Action {
  readonly type = GITHUB_MENU;
  constructor(public bale: MenuBit) { }
}

export const SPACE_MENU = "[Menu action] Space Menu";
export class SpaceMenu implements Action {
  readonly type = SPACE_MENU;
  constructor(public bale: MenuBit) { }
}

export const CONTROL_MENU = "[Menu action] Control Menu";
export class ControlMenu implements Action {
  readonly type = CONTROL_MENU;
  constructor(public bale: MenuBit) { }
}

export const MARKET_MENU = "[Menu action] Market Menu";
export class MarketMenu implements Action {
  readonly type = MARKET_MENU;
  constructor(public bale: MenuBit) { }
}

export const SOWER_MENU = "[Menu action] Sower Menu";
export class SowerMenu implements Action {
  readonly type = SOWER_MENU;
  constructor(public bale: MenuBit) { }
}

export const EARTH_MENU = "[Menu action] Earth Menu";
export class EarthMenu implements Action {
  readonly type = EARTH_MENU;
  constructor(public bale: MenuBit) { }
}

export const OLLAMA_MENU = "[Menu action] OLLAMA Menu";
export class OllamaMenu implements Action {
  readonly type = OLLAMA_MENU;
  constructor(public bale: MenuBit) { }
}

export const DIFFUSION_MENU = "[Menu action] Diffusion Menu";
export class DiffusionMenu implements Action {
  readonly type = DIFFUSION_MENU;
  constructor(public bale: MenuBit) { }
}

export const TIME_MENU = "[Menu action] Time Menu";
export class TimeMenu implements Action {
  readonly type = TIME_MENU;
  constructor(public bale: MenuBit) { }
}

export const COLOR_MENU = "[Menu action] Color Menu";
export class ColorMenu implements Action {
  readonly type = COLOR_MENU;
  constructor(public bale: MenuBit) { }
}

export const FATE_MENU = "[Menu action] Fate Menu";
export class FateMenu implements Action {
  readonly type = FATE_MENU;
  constructor(public bale: MenuBit) { }
}

export const BEING_MENU = "[Menu action] Being Menu";
export class BeingMenu implements Action {
  readonly type = BEING_MENU;
  constructor(public bale: MenuBit) { }
}


export const UPDATE_FOCUS_PLAY_MENU = "[Focus action] Update Focus Play Menu";
export class UpdateFocusPlayMenu implements Action {
  readonly type = UPDATE_FOCUS_PLAY_MENU;
  constructor(public bale: MenuBit) { }
}

export const CREATE_MENU = "[Create action] Create Menu";
export class CreateMenu implements Action {
  readonly type = CREATE_MENU;
  constructor(public bale: MenuBit) { }
}

export const HEXMAP_MENU = "[Hexmap action] Hexmap Menu";
export class HexmapMenu implements Action {
  readonly type = HEXMAP_MENU;
  constructor(public bale: MenuBit) { }
}

export const CREATE_HEXMAP_MENU = "[Hexmap action] Create Hexmap Menu";
export class CreateHexmapMenu implements Action {
  readonly type = CREATE_HEXMAP_MENU;
  constructor(public bale: MenuBit) { }
}

export const RENDER_MENU = "[Render action] Render Menu";
export class RenderMenu implements Action {
  readonly type = RENDER_MENU;
  constructor(public bale: MenuBit) { }
}

export const YIELD_MENU = "[Render action] Yield Menu";
export class YieldMenu implements Action {
  readonly type = YIELD_MENU;
  constructor(public bale: MenuBit) { }
}


export const PRINT_MENU = "[Render action] Print Menu";
export class PrintMenu implements Action {
  readonly type = PRINT_MENU;
  constructor(public bale: MenuBit) { }
}



export type Actions = InitMenu | UpdateMenu | TestMenu | CloseMenu
  | GithubMenu
  | TimeMenu
  | CreateMenu
  | HexmapMenu
  | RenderMenu
  | CreateHexmapMenu
  | YieldMenu
  | ColorMenu
  | UpdateFocusPlayMenu
  | PrintMenu
  | SpaceMenu
  | ControlMenu
  | EarthMenu
  | SowerMenu
  | MarketMenu
  | FateMenu
  | OllamaMenu
  | DiffusionMenu
  | BeingMenu