/**
 * Write a binary chop method that takes an integer search target,
 * and a sorted array of integers. 
 * It should return the integer index of the target in the array, 
 * or -1 if the target is not in the array. 
 * 
 * The signature will logically be:
 * chop(int, array_of_int)  -> int
 */

function binary(target, array) {
    return array.indexOf(target);
}

module.exports = binary;