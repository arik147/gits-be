// import prompt-sync
const prompt = require("prompt-sync")();

// Balanced Bracket function
function isBalancedBracket(str) {
    // temp stack bracket from string
    let stack = [];

    // mapping each couple bracket
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    // looping as many string length
    for (let i = 0; i < str.length; i++) {

        // if current char is open bracket
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' )
        {
            // push to stack
            stack.push(str[i]);
        }

        // if current char is close bracket
        else {
            // save the last opened bracket
            let last = stack.pop();

            // if closed bracket is not matched with the last opened bracket
            if (str[i] !== map[last]) 
            {
                // return no
                return 'NO';
            }
        }
    }

    // if there's a open bracket left (stack not empty)
    if (stack.length !== 0)
    {
        // return no
        return 'NO';
    }

    // if stack is empty
    // return yes
    return 'YES';
}

// get user input
const input = prompt('Input: ');

// print the final array to console
console.log(`Output: ${isBalancedBracket(input)}`);