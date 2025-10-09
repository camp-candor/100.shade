import React from 'react'
import { redirect } from '@tanstack/react-router'

import PixiBlock from './pixi/block'


function Index() {

  setTimeout( ()=>{
    //document.location.href = './title'
  }, 33)

  var setBus = (bus)=>{

  }

  

  return (
    <div>
      
      FICTIQ
      <PixiBlock bus={setBus}/>


    </div>
  )
}

export default Index
