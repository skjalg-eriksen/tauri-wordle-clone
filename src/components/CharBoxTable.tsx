import React, { useState } from 'react';
import { CharBoxRow } from './CharBoxRow';

const charBoxList: Charbox [][]  = [];

interface props {
    charBoxList: Charbox[][];
}


export const CharBoxTable: React.FC<props> = ({charBoxList}) => {
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
