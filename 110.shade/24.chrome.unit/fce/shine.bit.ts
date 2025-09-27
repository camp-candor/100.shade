import * as PIXI from 'pixi.js';;

export default interface ShineBit {
    idx:string;
    src?:string;
    typ?:string;
    x:number;
    y:number

    val?:number;
    dat?:any;
    bit?:PIXI.Graphics;
}
