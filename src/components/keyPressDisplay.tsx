import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

function KeyPressDisplay(){
    const [keyPressed, setKeyPressed] = useState('');
    
    useEffect(()=> {
        const handleKeyPress = (event)=> {
            setKeyPressed(event.key);
        }
    })
}