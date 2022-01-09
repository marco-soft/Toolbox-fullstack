const { isPalindrome } = require("../helpers");

module.exports = (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).send({ error: "no text" });
  const palindrome = isPalindrome(text);
  return res.send({ text, palindrome });
};
