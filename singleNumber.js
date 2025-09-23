/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var singleNumber = function(nums) {

    return nums.reduce((accumulator, currentValue) => accumulator ^ currentValue);
}