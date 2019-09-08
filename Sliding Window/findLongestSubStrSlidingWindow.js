// Using sliding window approach to find longest substring in an array
// in O(n) time. Kind of ugly... probably refactorable.

function findLongestSubstring(str) {
  if (str.length === 0) return 0;
  let maxSubLen = 1;
  let temp;
  let freq = {};
  let left = 0;
  let right = 0;

  while (right < str.length) {
    if (left === right) {
      temp = 1;
      freq[str[right]] = 1;
      right++;
    } else if (freq[str[right]]) {
      delete freq[str[left]];
      left++;
      temp--;
    } else {
      freq[str[right]] = 1;
      temp++;
      maxSubLen = Math.max(maxSubLen, temp);
      right++;
    }
  }
  return maxSubLen;
}
