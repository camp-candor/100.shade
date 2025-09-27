import CaboodleBit from "./fce/caboodle.bit";
import Collect from "./fce/collect.interface";
import CollectBit from "./fce/collect.interface";

export class CollectModel implements Collect {
 idx:string = '23.11.14';
 caboodleBitList: CaboodleBit[] = [];
 caboodleBits: any = {};
}
