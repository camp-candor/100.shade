
import React from 'react'

import SurfaceAdd from '../../view/000.SurfaceAdd'
import SurfaceRemove from '../../view/001.SurfaceRemove'

var open = false

const Test = (bus) => {

  if ( open == true ){

    setTimeout( ()=>{

      console.log('surface add')

     // bit =  await window['SHADE']( ActFce.WRITE_SURFACE, { idx, dat:{ src }  })
          
  //}
  
  
    //}, 222 )

    return (
      <div id='surface'>
        Testing Surface ADD EXIST
        
      </div>
    )
  
  }

  open = true
  



  

  return (
    <div>
      Testing Surface ADD 
    </div>
  )


}

export default Test


