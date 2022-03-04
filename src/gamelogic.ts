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
    charboxrow.map((letter) =>{word = word + letter.character});
    return word;
}

function checkWord(charboxrow: Charbox[]){
    //console.log(hidden_word);
    const result: CharBoxState[] = []; 
    result.length = charboxrow.length; 
    result.fill(CharBoxState.grey);
    
    // check if theres green characters
    const unmatched = []
    for (let i = 0; i < charboxrow.length; i++){
        if (charboxrow[i].character == hidden_word.at(i)){
            result[i] = CharBoxState.green;
        }else{
            // if the character is incorrect add it to the unmatched list
            unmatched.push(hidden_word.at(i))
        }
    }

    // check if theres yellow characters
    for (let i = 0; i < charboxrow.length; i++){
        // if its already been set to green skip
         if (result[i] == CharBoxState.green){
            continue;
        }
        // check if theres a unmatched character that matches
        if (unmatched.includes(charboxrow[i].character)){
            result[i] = CharBoxState.yellow;
            // remove the matched character from the unmatched list
            unmatched.splice(unmatched.indexOf(charboxrow[i].character), 1);
        }
    }

    return result;
}

function isWordInList(charboxrow: Charbox[]){
    return wordList.includes(toString(charboxrow));
}