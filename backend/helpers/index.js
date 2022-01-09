/**
 *
 * @param {*} str string that will be validated
 * @returns if the word is palindrome
 */

const isPalindrome = (str) => {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
};

module.exports = {
  isPalindrome,
};
