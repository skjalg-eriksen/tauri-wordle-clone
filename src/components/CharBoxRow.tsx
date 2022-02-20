import React from 'react';
import { CharBoxItem } from './CharBoxItem';

interface props {
    charBoxList: Charbox[];
}


export const CharBoxRow: React.FC<props> = ({charBoxList}) => {
    return (
        <div className='charboxrow'>
            {charBoxList.map( (charboxitem) => (
                <CharBoxItem charbox={{character: charboxitem.character, state: charboxitem.state}}/>    
            ))}
        </div>
    );
}