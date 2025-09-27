import { useState } from 'react';

import PixiBlock from "@ui/pixi/block"


let dex = 0

let bit;

export default function EarthlyDecorativeFrame() {

    
    let sim;
    let bus

    const setBus = (obj) => {
        if (dex > 0) return
        dex += 1
        sim = obj;  
    };


    bus = (idx, bal) => sim.hunt(idx, bal)

   

        return (<div>
            
            <PixiBlock bus={setBus}/>
            

        </div>)
    }

    


