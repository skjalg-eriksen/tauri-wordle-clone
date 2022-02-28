import React from 'react';
import { CharBoxItem } from './CharBoxItem';

interface props {
    charBoxList: Charbox[];
  
}


export const CharBoxRow: React.FC<props> = ({charBoxList}) => {
    return (
        <div className='charboxrow'>
            {charBoxList.map( (charboxitem) => (
                <span key={charboxitem.keynum}>
                    <CharBoxItem charbox={{character: charboxitem.character, state: charboxitem.state}}/>    
                </span>
            ))}
        </div>
    );
}