import * as ActFce from '../110.shade/02.surface.unit/surface.action'

var bit
export default async function  SurfaceAdd  (idx) {

    bit =  await window['SHADE']( ActFce.REMOVE_SURFACE, { idx })
         
}

