/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
    
    let isDigitDone = false;
    let currentNumber = 1;

    function confirmPlus() {
        let currentDigit = digits.length - currentNumber;
        if (currentDigit < 0) {
            currentDigit = 0;
        }

        if ( digits[currentDigit] < 9 ) {
            digits[currentDigit] += 1;
        } 
        else {
            if (currentDigit > 0) {
                digits[currentDigit] = 0;
                currentNumber += 1;
                confirmPlus();
            }
            if (currentDigit == 0 ) {
                let NewDigits = [1];

                for ( let i = 1; i < digits.length+1; i++ ) {
                    NewDigits[i] = 0;
                }

                //console.log(NewDigits);
                digits = NewDigits;   
            }
        }
    }
    
    confirmPlus();
    return digits;
};