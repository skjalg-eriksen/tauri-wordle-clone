// enum for a state of the box, 
/** State description
 * initial; no state initial
 * grey;    this character is not in the final word
 * yellow;  this character is in the final word but not correct possition
 * green;   correct character at right place in the final word
*/
enum CharBoxState { initial, grey, yellow, green };

export {
    CharBoxState
}