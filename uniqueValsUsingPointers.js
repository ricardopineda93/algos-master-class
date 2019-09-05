// Given a sorted array, this function will return the number of unique
// values in the array in O(n) time and O(1) space. Mutates original array
// to catalogue all unique vals found. Only works in O(1) space if sorted.

function countUniqueValues(array) {
  if (!array.length) return 0;
  let l = 0;
  let r = 1;

  while (r < array.length) {
    if (array[l] !== array[r]) {
      l++;
      array[l] = array[r];
    }
    r++;
  }
  return l + 1;
}
