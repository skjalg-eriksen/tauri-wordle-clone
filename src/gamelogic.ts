import { resourceUsage } from "process";
import { CharBoxState } from "./common";
import { wordList } from "./words";

export {
    checkWord,
    isWordInList
};

const hidden_word = randomWord();

function randomWord() {
    return wordList[Math.floor(Math.random()*wordList.length)];
}


function toString(charboxrow: Charbox[]){
    let word = '';
    charboxrow.map((letter) =>{word = word+ letter.character});
    return word;
}

function checkWord(charboxrow: Charbox[]){
    console.log(hidden_word);
    let result: CharBoxState[] = []; 
    result.length = 5; 
    result.fill(CharBoxState.grey);
    
    // check if theres green characters
    let tmp_word = hidden_word;
    for (let i = 0; i < charboxrow.length; i++){
        if (charboxrow[i].character == hidden_word.at(i)){
            result[i] = CharBoxState.green;
        }
    }

    // check if theres yellow characters
    for (let i = 0; i < charboxrow.length; i++){
        if (result[i] == CharBoxState.green){
            continue;
        }

        if (hidden_word.includes(charboxrow[i].character)){
            result[i] = CharBoxState.yellow;
        }
    }


    return result;
}

function isWordInList(charboxrow: Charbox[]){
    return wordList.includes(toString(charboxrow));
}