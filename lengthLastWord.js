/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let lastWordLength = 0;
    let wordLength = 0;
    for ( let i = 0; i < s.length; i++) {
        
        if ( s[i] === " ") {
            if ( wordLength !== 0 ) {
                lastWordLength = wordLength;
            }
            wordLength = 0;
        }
        else {
            lastWordLength = 0;
            wordLength += 1;
        }
    }

    if ( lastWordLength !== 0 ) {
        wordLength = lastWordLength;
    }
    return wordLength;
};