// import prompt-sync
const prompt = require("prompt-sync")();

// A000124 of Sloane’s OEIS function 
function rumusA000124(input) {
    // array result
    let array = [];
  
    // looping until input
    for (let i = 0; i < input; i++) {

        // push the result into array
        array.push(((i * i) + i + 2) / 2);
    }
  
    // return final array with '-' join
    return array.join('-');
}

// get user input
const input = prompt('Input: ');

// print the final array to console
console.log(`Output: ${rumusA000124(input)}`);