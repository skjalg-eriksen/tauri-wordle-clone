import React from 'react'
import { CharBoxItem } from './components/CharBoxItem'
import { CharBoxRow } from './components/CharBoxRow'
import { CharBoxState } from './common'


function App() {

  const charBoxList: Charbox []  = [];
  charBoxList.length = 5;
  charBoxList.fill({character: '', state: CharBoxState.initial});

  return (
    <div className="App">
      
      <CharBoxRow charBoxList={charBoxList} />
      
    </div>
  )
}

export default App
