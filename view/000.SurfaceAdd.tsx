import * as ActFce from '../110.shade/02.surface.unit/surface.action'

var bit
export default async function  SurfaceAdd  (idx, src) {

    console.log('surface add')

    bit =  await window['SHADE']( ActFce.WRITE_SURFACE, { idx, dat:{ src }  })
        
}



