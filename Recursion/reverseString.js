function reverse(str) {
  let returnStr = str[str.length - 1];

  if (!str.length) return '';

  return (returnStr += reverse(str.slice(0, str.length - 1)));
}
