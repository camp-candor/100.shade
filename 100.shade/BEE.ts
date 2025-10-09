import Model from "./99.core/interface/model.interface";

import ShadeUnit from "./00.shade.unit/shade.unit";
import SurfaceUnit from "./02.surface.unit/surface.unit";
import ContainerUnit from "./03.container.unit/container.unit";
import GraphicUnit from "./04.graphic.unit/graphic.unit";
import TextUnit from "./05.text.unit/text.unit";
import SpriteUnit from "./06.sprite.unit/sprite.unit";
import HexagonUnit from "./07.hexagon.unit/hexagon.unit";
import FocigonUnit from "./08.focigon.unit/focigon.unit";
import LoopUnit from "./09.loop.unit/loop.unit";
import ToonUnit from "./10.toon.unit/toon.unit";
import VideoUnit from "./11.video.unit/video.unit";
import FrameUnit from "./12.frame.unit/frame.unit";
import CameraUnit from "./13.camera.unit/camera.unit";
import SpritesheetUnit from "./15.spritesheet.unit/spritesheet.unit";
import VisageUnit from "./21.visage.unit/visage.unit";
import ChromeUnit from "./24.chrome.unit/chrome.unit";
import TerminalUnit from "./80.terminal.unit/terminal.unit";
import GridUnit from "./81.grid.unit/grid.unit";
import CanvasUnit from "./82.canvas.unit/canvas.unit";
import ConsoleUnit from "./83.console.unit/console.unit";
import InputUnit from "./84.input.unit/input.unit";
import ChoiceUnit from "./85.choice.unit/choice.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Shade from "./00.shade.unit/fce/shade.interface";
import { ShadeModel } from "./00.shade.unit/shade.model";
import Surface from "./02.surface.unit/fce/surface.interface";
import { SurfaceModel } from "./02.surface.unit/surface.model";
import Container from "./03.container.unit/fce/container.interface";
import { ContainerModel } from "./03.container.unit/container.model";
import Graphic from "./04.graphic.unit/fce/graphic.interface";
import { GraphicModel } from "./04.graphic.unit/graphic.model";
import Text from "./05.text.unit/fce/text.interface";
import { TextModel } from "./05.text.unit/text.model";
import Sprite from "./06.sprite.unit/fce/sprite.interface";
import { SpriteModel } from "./06.sprite.unit/sprite.model";
import Hexagon from "./07.hexagon.unit/fce/hexagon.interface";
import { HexagonModel } from "./07.hexagon.unit/hexagon.model";
import Focigon from "./08.focigon.unit/fce/focigon.interface";
import { FocigonModel } from "./08.focigon.unit/focigon.model";
import Loop from "./09.loop.unit/fce/loop.interface";
import { LoopModel } from "./09.loop.unit/loop.model";
import Toon from "./10.toon.unit/fce/toon.interface";
import { ToonModel } from "./10.toon.unit/toon.model";
import Video from "./11.video.unit/fce/video.interface";
import { VideoModel } from "./11.video.unit/video.model";
import Frame from "./12.frame.unit/fce/frame.interface";
import { FrameModel } from "./12.frame.unit/frame.model";
import Camera from "./13.camera.unit/fce/camera.interface";
import { CameraModel } from "./13.camera.unit/camera.model";
import Spritesheet from "./15.spritesheet.unit/fce/spritesheet.interface";
import { SpritesheetModel } from "./15.spritesheet.unit/spritesheet.model";
import Visage from "./21.visage.unit/fce/visage.interface";
import { VisageModel } from "./21.visage.unit/visage.model";
import Chrome from "./24.chrome.unit/fce/chrome.interface";
import { ChromeModel } from "./24.chrome.unit/chrome.model";
import Terminal from "./80.terminal.unit/fce/terminal.interface";
import { TerminalModel } from "./80.terminal.unit/terminal.model";
import Grid from "./81.grid.unit/fce/grid.interface";
import { GridModel } from "./81.grid.unit/grid.model";
import Canvas from "./82.canvas.unit/fce/canvas.interface";
import { CanvasModel } from "./82.canvas.unit/canvas.model";
import Console from "./83.console.unit/fce/console.interface";
import { ConsoleModel } from "./83.console.unit/console.model";
import Input from "./84.input.unit/fce/input.interface";
import { InputModel } from "./84.input.unit/input.model";
import Choice from "./85.choice.unit/fce/choice.interface";
import { ChoiceModel } from "./85.choice.unit/choice.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [ShadeUnit,SurfaceUnit,ContainerUnit,GraphicUnit,TextUnit,SpriteUnit,HexagonUnit,FocigonUnit,LoopUnit,ToonUnit,VideoUnit,FrameUnit,CameraUnit,SpritesheetUnit,VisageUnit,ChromeUnit,TerminalUnit,GridUnit,CanvasUnit,ConsoleUnit,InputUnit,ChoiceUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromShade from "./00.shade.unit/shade.reduce";
import * as reduceFromSurface from "./02.surface.unit/surface.reduce";
import * as reduceFromContainer from "./03.container.unit/container.reduce";
import * as reduceFromGraphic from "./04.graphic.unit/graphic.reduce";
import * as reduceFromText from "./05.text.unit/text.reduce";
import * as reduceFromSprite from "./06.sprite.unit/sprite.reduce";
import * as reduceFromHexagon from "./07.hexagon.unit/hexagon.reduce";
import * as reduceFromFocigon from "./08.focigon.unit/focigon.reduce";
import * as reduceFromLoop from "./09.loop.unit/loop.reduce";
import * as reduceFromToon from "./10.toon.unit/toon.reduce";
import * as reduceFromVideo from "./11.video.unit/video.reduce";
import * as reduceFromFrame from "./12.frame.unit/frame.reduce";
import * as reduceFromCamera from "./13.camera.unit/camera.reduce";
import * as reduceFromSpritesheet from "./15.spritesheet.unit/spritesheet.reduce";
import * as reduceFromVisage from "./21.visage.unit/visage.reduce";
import * as reduceFromChrome from "./24.chrome.unit/chrome.reduce";
import * as reduceFromTerminal from "./80.terminal.unit/terminal.reduce";
import * as reduceFromGrid from "./81.grid.unit/grid.reduce";
import * as reduceFromCanvas from "./82.canvas.unit/canvas.reduce";
import * as reduceFromConsole from "./83.console.unit/console.reduce";
import * as reduceFromInput from "./84.input.unit/input.reduce";
import * as reduceFromChoice from "./85.choice.unit/choice.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 shade : reduceFromShade.reducer, 
surface : reduceFromSurface.reducer, 
container : reduceFromContainer.reducer, 
graphic : reduceFromGraphic.reducer, 
text : reduceFromText.reducer, 
sprite : reduceFromSprite.reducer, 
hexagon : reduceFromHexagon.reducer, 
focigon : reduceFromFocigon.reducer, 
loop : reduceFromLoop.reducer, 
toon : reduceFromToon.reducer, 
video : reduceFromVideo.reducer, 
frame : reduceFromFrame.reducer, 
camera : reduceFromCamera.reducer, 
spritesheet : reduceFromSpritesheet.reducer, 
visage : reduceFromVisage.reducer, 
chrome : reduceFromChrome.reducer, 
terminal : reduceFromTerminal.reducer, 
grid : reduceFromGrid.reducer, 
canvas : reduceFromCanvas.reducer, 
console : reduceFromConsole.reducer, 
input : reduceFromInput.reducer, 
choice : reduceFromChoice.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 shade : Shade = new ShadeModel();
surface : Surface = new SurfaceModel();
container : Container = new ContainerModel();
graphic : Graphic = new GraphicModel();
text : Text = new TextModel();
sprite : Sprite = new SpriteModel();
hexagon : Hexagon = new HexagonModel();
focigon : Focigon = new FocigonModel();
loop : Loop = new LoopModel();
toon : Toon = new ToonModel();
video : Video = new VideoModel();
frame : Frame = new FrameModel();
camera : Camera = new CameraModel();
spritesheet : Spritesheet = new SpritesheetModel();
visage : Visage = new VisageModel();
chrome : Chrome = new ChromeModel();
terminal : Terminal = new TerminalModel();
grid : Grid = new GridModel();
canvas : Canvas = new CanvasModel();
console : Console = new ConsoleModel();
input : Input = new InputModel();
choice : Choice = new ChoiceModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
