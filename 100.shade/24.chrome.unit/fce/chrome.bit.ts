import * as PIXI from 'pixi.js';

export default interface ChromeBit {
    idx:string;
    src?:string;
    typ?:string;
    x:number;
    y:number
    slv?:any;
    val?:number;
    dat?:any;
    bit?:PIXI.Graphics;
}
