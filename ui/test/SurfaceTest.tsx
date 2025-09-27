
import React from 'react'

import SurfaceAdd from '../../view/000.SurfaceAdd'
import SurfaceRemove from '../../view/001.SurfaceRemove'

var open = false

const Test = (bus) => {

  if ( open == true ){

    setTimeout( ()=>{

      console.log("rolll")

      //setTimeout( ()=> SurfaceAdd('fce00', 'surface'), 1111)
      //setTimeout( ()=> SurfaceRemove('fce00'), 2111)
  
  
    }, 222 )

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


