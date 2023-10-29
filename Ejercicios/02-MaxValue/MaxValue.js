function MaxValue (shares) {
  // Your code here:
  const minNumber = Math.min(...shares)
  const minNumberIndex = shares.indexOf(minNumber)  
  const newArrayAfterMinNumber = shares.slice(minNumberIndex)
  const maxNumber = Math.max(...newArrayAfterMinNumber)
  
  return maxNumber - minNumber
}

/* Refactorized
function MaxValue(shares) {
  const minNumberIndex = shares.indexOf(Math.min(...shares));
  return Math.max(...shares.slice(minNumberIndex)) - Math.min(...shares);
}
*/

//console.log(MaxValue([4, 3, 2, 5, 11]));

module.exports = MaxValue
