import React from 'react'
import { redirect } from '@tanstack/react-router'


function Index() {

  setTimeout( ()=>{
    document.location.href = './title'
  }, 33)

  

  return (
    <div>
      
      FICTIQ

    </div>
  )
}

export default Index
