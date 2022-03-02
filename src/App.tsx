import React, { useState, useEffect } from 'react';
import { CharBoxState } from './common';
import { CharBoxTable } from './components/CharBoxTable';

const charBoxList_initial: Charbox [][]  = [];

let count = 0;
for(let i = 0; i < 6; i++){
  charBoxList_initial.push([]);
    for (let j = 0; j < 5; j++, count++){
      charBoxList_initial[i].push({character: '', state: CharBoxState.initial, keynum: count});
    }  
} 




function App() {
  const  [charBoxList, setCharbox] = useState(charBoxList_initial);
  let rowCounter = 0
  let charCounter = 0;

  useEffect(() =>{
    // event listener when a key is pressed
    window.addEventListener('keypress', (event: KeyboardEvent) => {
      switch(event.code){
          case 'Key'+event.key.toUpperCase():
              if (charCounter >= charBoxList[rowCounter].length){
                break;
              }
           /*    const newRow: Charbox [][] = [];
              for (let i = 0; i < charBoxList.length; i++){
                if (rowCounter === i){
                  // add a new list to construct the row
                  newRow.push([]);
                  for (let j = 0; j < charBoxList[rowCounter].length;  j++){
                    if (j === charCounter){
                      newRow[i].push({character:  event.key, 
                                          state:  charBoxList[i][j].state, 
                                          keynum: charBoxList[i][j].keynum});
                    }else{
                      newRow[i].push({character:  charBoxList[i][j].character, 
                                          state:  charBoxList[i][j].state, 
                                          keynum: charBoxList[i][j].keynum});
                    }
                    
                  }
                }else{
                  // use the old row
                  newRow.push(charBoxList[i]);
                }
              }
   */
              charBoxList[rowCounter][charCounter].character = event.key;
              charCounter++;
              setCharbox([...charBoxList]);
              
              console.log('character', event.key, charCounter);
              break;
  
          case 'Enter':
              // if a valid word has been entered check correct characters
              //increment the row index counter
              
              //check if row is filled
              if (charCounter < 5){
                break;
              }

              rowCounter++;
              charCounter = 0;
              console.log('enter')
              break;
  
          case 'Backspace':
              // if backspace the list containg the characters
     /*          const newRow_: Charbox [][] = [];
              for (let i = 0; i < charBoxList.length; i++){ newRow_.push(charBoxList[i]);}
              newRow_[rowCounter][charCounter-1].character=""; */

              if (charCounter <= 0){break;}

              charBoxList[rowCounter][charCounter-1].character = '';
              charCounter--;
              setCharbox([...charBoxList]);
              break;
              
      }
    }); 
  }, []);


  return (
    <div className="App">
      <CharBoxTable charBoxList={charBoxList}/>
    </div>
  )
}

export default App
