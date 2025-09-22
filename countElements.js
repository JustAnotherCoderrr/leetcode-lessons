/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let elementArray = [0];
    let maxFrequency = 0;
    let fullFrequency = 0;
    for ( let i = 0; i < nums.length; i++) {
        if (!elementArray[nums[i]]) {
            elementArray[nums[i]] = 1;
        }
        else {
            elementArray[nums[i]] += 1;
        }
    }

    for ( let i = 0; i < elementArray.length; i++) {
        if (elementArray[i] > maxFrequency) {
            maxFrequency = elementArray[i];
        }
    }

    for ( let i = 0; i < elementArray.length; i++) {
        if (elementArray[i] === maxFrequency) {
            fullFrequency += maxFrequency;
        }
    }
    console.log(fullFrequency);

    return fullFrequency;
};