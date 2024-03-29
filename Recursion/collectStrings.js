const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
};

function collectStrings(obj) {
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') result.push(obj[key]);
    else {
      result = result.concat(collectStrings(obj[key]));
    }
  }
  return result;
}

collectStrings(obj); // ["foo", "bar", "baz"])
