function binarySearch(array, target) {
  let left = 0;
  let middle = Math.floor(array.length / 2);
  let right = array.length - 1;

  while (array[middle] !== target && left <= right) {
    if (array[middle] < target) left = middle + 1;
    if (array[middle] > target) right = middle - 1;
    middle = Math.floor((right + left) / 2);
  }
  return array[middle] === target ? middle : -1;
}
