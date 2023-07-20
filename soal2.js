// import prompt-sync
const prompt = require("prompt-sync")();

// denseRanking function 
function denseRanking(scores, gitsScores) {

    // Sort the array to descending
    scores.sort((a, b) => b - a);

    // Remove duplicates by filtering unique values
    let uniqueScores = [...new Set(scores)];

    let rank1 = [];

    // Rank scores
    for (let i = 0; i < uniqueScores.length; i++) {
        rank1[i] = i + 1;
    }

    // array result gits ranking 
    let rank2 = [];

    // looping as many gitsScores length
    for(let i = 0; i < gitsScores.length; i++){

        // if scores has same value with GITS scores value
        if(uniqueScores.includes(gitsScores[i]))
        {
            // push to array result by the index of value
            rank2.push(rank1[uniqueScores.indexOf(gitsScores[i])]);
        }

        // if GITS scores has different value
        else {

            // init iterator
            let j = 0;

            // looping while length of scores and current gits scores smaller than scores
            while (j < uniqueScores.length && gitsScores[i] < uniqueScores[j]) 
            {
                // J increment
                j++;
            }

            // if gitsScores < all elements in scores
            if (j == uniqueScores.length) 
            {
                // push to array
                rank2.push(rank1[rank1.length - 1] + 1);
            }
            
            // if gitsScores in between scores value
            else {
                
                // push to array
                rank2.push(rank1[j]);
            }
        }
    }

    // return result 
    return rank2;
}

// input n player
const scoresPlayer = prompt('');
// input array of scores
const scoresInput = prompt('');
// mapping from string input to array
const scores = scoresInput.split(' ').map(Number);

// input n gitsPlayer
const gitsScoresPlayer = prompt('');
// input array of GITSscores
const gitsScoresInput = prompt('');
// mapping from string input to array
const gitsScores = gitsScoresInput.split(' ').map(Number);

// get result from function
// set scores to ascending
// set gitsScores to descending
const result = denseRanking(scores.sort((a, b) => b - a), gitsScores.sort((a, b) => a - b));

// print result
console.log(result);
  