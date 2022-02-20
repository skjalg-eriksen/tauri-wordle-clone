import React from 'react'
import '../style/CharBox.css'
import { CharBoxState } from '../common';

interface props {
    charbox: Charbox
}

function getClass(state: CharBoxState){
    switch (state){
        case CharBoxState.initial:  return 'charbox charbox_init';
        case CharBoxState.grey:     return 'charbox charbox_grey';
        case CharBoxState.yellow:   return 'charbox charbox_yellow';
        case CharBoxState.green:    return 'charbox charbox_green';
    }
}
 

export const CharBoxItem: React.FC<props> = ({charbox}) => {
    return (
        <div 
            className={getClass(charbox.state)} 
        >
            <h1> {charbox.character} </h1>
        </div>
    );
};