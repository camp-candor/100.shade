'use client'

import React from 'react'
import Title from './title/Title'
import { useState, useEffect } from 'react';


export default function Component() {
    //const { classes, cx } = useStyles();
    const [activeOption, setActiveOption] = useState('GAME');
    const [flickerOpacity, setFlickerOpacity] = useState(1);

    var actionOne = () => {
        document.location.href = '/camera'


    }

    var actionTwo = () => {

        document.location.href = '/pixi'


    }

    var actionThree = () => {

        document.location.href = '/camera'


    }



    // Film flicker effect
    useEffect(() => {
        const flickerInterval = setInterval(() => {
            const randomOpacity = Math.random() * 0.1 + 0.9; // Between 0.9 and 1.0
            setFlickerOpacity(randomOpacity);
        }, 100);

        return () => clearInterval(flickerInterval);
    }, []);

    return (

        <div>
            <Title />
        </div>

    );
}