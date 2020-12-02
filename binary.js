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

/**
 * if the length is greater than 1
 * chop in half and search the first half
 * if the search target is found the index can be returned
 * if not found the length of the first half is stored (-1) to add to the index when found
 * and the process goes round again
 * if the target is found the index is added to the accumulated length
 */

function binary(target, array) {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      result = i;
    }
  }

  return result;
}

function chop(array) {
  let length = array.length;
  let isEven = length % 2 === 0;
  let chopAtIndex = isEven ? length / 2 : Math.floor(length / 2);
  let chunk1 = array.slice(0, chopAtIndex);
  let chunk2 = array.slice(chopAtIndex, array.length);
  return [chunk1, chunk2];
}

module.exports = { binary, chop };
