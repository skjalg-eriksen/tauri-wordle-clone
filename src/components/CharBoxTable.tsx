import React, { useState } from 'react';
import { CharBoxRow } from './CharBoxRow';
import { CharBoxState } from '../common'

const charBoxList: Charbox [][]  = [];

let count = 0;
for(let i = 0; i < 6; i++){
    charBoxList.push([]);
    for (let j = 0; j < 5; j++, count++){
        charBoxList[i].push({character: '', state: CharBoxState.initial, keynum: count});
    }  
} 

document.addEventListener('keypress', (event: KeyboardEvent) => {
    switch(event.code){
        case 'Key'+event.key.toUpperCase():
            console.log('character', event.key);
            break;

        case 'Enter':
            // if a valid word has been entered check correct characters
            //increment the row index counter
            console.log('enter')
            break;

        case 'Backspace':
            // if backspace the list containg the characters
            console.log('backspace')
            break;
            
    }
  });


export const CharBoxTable: React.FC = () => {
    return (
        <div className='charboxtable'>
            <CharBoxRow charBoxList={charBoxList[0]} />
            <CharBoxRow charBoxList={charBoxList[1]} />
            <CharBoxRow charBoxList={charBoxList[2]} />
            <CharBoxRow charBoxList={charBoxList[3]} />
            <CharBoxRow charBoxList={charBoxList[4]} />
            <CharBoxRow charBoxList={charBoxList[5]} />
        </div>
    );
}
