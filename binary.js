/**
 * Write a binary chop method that takes an integer search target,
 * and a sorted array of integers. 
 * It should return the integer index of the target in the array, 
 * or -1 if the target is not in the array. 
 * 
 * The signature will logically be:
 * chop(int, array_of_int)  -> int
 * 
 * assume an array does not have helper methods
 */

function binary(target, array) {
    let result = -1;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            result = i;
        }
    }
    return result;
}

module.exports = binary;