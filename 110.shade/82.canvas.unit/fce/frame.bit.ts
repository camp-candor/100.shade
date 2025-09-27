import NetBit from "../../81.grid.unit/fce/net.bit";

export default interface FrameBit {
    idx: string;
    src?: string;
    typ?: string;
    clr?: string;
    width?: number;
    height?: number;
    dex?: number;
    parent?: any;
    fill?:string;
    canLst?: string[];
    gphLst?: string[];
    txtLst?: string[];
    sprLst?: string[];
    hexLst?: string[];
    bit?: any;
    net?:NetBit;
}
