import React, { useState, useEffect } from 'react';
import { CharBoxState } from './common';
import { CharBoxTable } from './components/CharBoxTable';
import { isWordInList, checkWord } from './gamelogic';

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

              charBoxList[rowCounter][charCounter].character = event.key;
              charCounter++;
              setCharbox([...charBoxList]);
              
              console.log('character', event.key, charCounter);
              break;
  
          case 'Enter':
              //check if row is filled
              if (charCounter < 5){break;}

              //check if word is in the word list
              if (!isWordInList(charBoxList[rowCounter])){
                alert('word not in list');
                break;
              }

              const result: CharBoxState [] = checkWord(charBoxList[rowCounter]);

              for(let i = 0; i < result.length; i++){
                charBoxList[rowCounter][i].state = result[i];
              }

              setCharbox([...charBoxList]);
              rowCounter++;
              charCounter = 0;
              console.log('enter')
              break;
  
          case 'Backspace':
              if (charCounter <= 0){break;}

              charBoxList[rowCounter][charCounter-1].character = '';
              charCounter--;
              setCharbox([...charBoxList]);
              break;
          case 'Space':
            window.location.reload();
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
