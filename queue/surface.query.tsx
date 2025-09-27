import * as ActFce from '../110.shade/02.surface.unit/surface.action'

import { useQuery } from "@tanstack/react-query"

export function useWriteSurface(idx) {
    return useQuery({
        queryFn: async () => {
          let bit;

          if ( idx != null ){
            bit =  await window['SHADE']( ActFce.WRITE_SURFACE, { idx })
          }else{
            bit =  await window['SHADE']( ActFce.LIST_SURFACE, {})
            var dex = bit.fceBit.lst.length
            var idx = 'fce' + dex;
            console.log("fce: " + idx )
            bit =  await window['SHADE']( ActFce.WRITE_SURFACE, { idx })
            console.log("fce: " + JSON.stringify(bit) )
            
          }


            return bit

        },

        queryKey: ['writeSurface']
    })
}


export function useListSurface() {
  return useQuery({
      queryFn: async () => {
        let bit =  await window['SHADE']( ActFce.LIST_SURFACE, {})
        return bit

      },
      queryKey: ['listSurface']
  })
}
