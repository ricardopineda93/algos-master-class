function flatten(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') result.push(array[i]);
    else {
      result = result.concat(flatten(array[i]));
    }
  }
  return result;
}
