import NetBit from "../../81.grid.unit/fce/net.bit";

export default interface CanvasBit {
    idx:string;
    src?:string;
    lst?: any[];
    val?:number;
    dat?:any;
    slv?:Function;
    net?:NetBit
}
