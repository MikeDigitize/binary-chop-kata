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

// start with basic search for item in array
function binary(target, array) {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      result = i;
    }
  }

  return result;
}

/**
 * create function to chop an array in 2 with the behaviour of -
 * if it's an odd number of items
 * the first half is one smaller than the second
 * if it's an array of length 1 the second array is empty
 */
function chop(array) {
  let length = array.length;
  let isEven = length % 2 === 0;
  let chopAtIndex = length === 1 ? 1 : isEven ? length / 2 : Math.floor(length / 2);
  let chunk1 = array.slice(0, chopAtIndex);
  let chunk2 = array.slice(chopAtIndex, array.length);
  return [chunk1, chunk2];
}

// now search through the first half of an array only
function searchHalf(target, array) {
  let halved = chop(array);
  let result = -1;
  for (let i = 0; i < halved[0].length; i++) {
    if (halved[0][i] === target) {
      result = i;
    }
  }
  return result;
}

/**
 * same as above, but if the target isn't found, halve the array, and search again
 * it will return the index relative to the current array
 * not the original
 */
function searchHalfAgain(target, array) {
  let halved = chop(array);
  let result = binary(target, halved[0]);
  if (result === -1 && halved[1].length > 0) {
    return searchHalfAgain(target, halved[1]);
  }
  return result;
}

/**
 * same as above, but remember the length of the arrays searched and add it to the result
 * so if you have an array of 0-9
 * and search for 9
 * it will chop in half 0-4, 5-9
 * search the first half, won't find it
 * add the length to the result (+5)
 * take the second half and chop in half 5-6, 7-9
 * search the first half won't find it (+2)
 * take the second half and chop in half 7, 8-9
 * search the first half won't find it (+1)
 * take the second half and chop in half 8, 9
 * search the first half won't find it (+1)
 * take the second half and chop in half 9, []
 * so when it gets to 9 it has an index of 0 because it's the only item left
 * but it adds the running total of 9
 * and so the index is correct
 */
function binaryChop(target, array) {
  let result = -1;
  let numberOfItemsChecked = 0;
  function searchArray(_array) {
    let halved = chop(_array);
    result = binary(target, halved[0]);
    if (result === -1 && halved[1].length > 0) {
      numberOfItemsChecked += halved[0].length;
      return searchArray(halved[1]);
    }
    if (result === -1) {
      numberOfItemsChecked = 0;
    }
    return result;
  }
  return searchArray(array) + numberOfItemsChecked;
} 

function binaryChopSortedList(target, array) {
  let result = -1;
  let numberOfItemsChecked = 0;
  let sortedArray = array.sort((a,b) => a - b);
  function searchArray(_array) {
    let halved = chop(_array);
    /**
     * if the last item of halved[0] < target
     * search again with halved[1]
     */
    console.log(halved[0], target);
    if(halved[0][halved[0].length - 1] < target) {
      console.log('search again');
      numberOfItemsChecked += halved[0].length;
      return searchArray(halved[1]);
    }
    console.log('searched');
    result = binary(target, halved[0]);
    if (result === -1 && halved[1].length > 0) {
      numberOfItemsChecked += halved[0].length;
      return searchArray(halved[1]);
    }
    if (result === -1) {
      numberOfItemsChecked = 0;
    }
    return result;
  }
  return searchArray(sortedArray) + numberOfItemsChecked;
}

module.exports = {
  binary,
  chop,
  searchHalf,
  searchHalfAgain,
  binaryChop,
  binaryChopSortedList,
};
