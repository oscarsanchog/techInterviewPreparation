function FindNeedle (haystack, needle) {
  // Your code here:
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let match = true
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false
        break
      }
    }
    if (match) return i
  }
  return -1
}

/* 
Con index of 
function FindNeedle(haystack, needle) {
  const index = haystack.indexOf(needle);

  if (index !== -1) return index;
  else return -1
}
*/

//console.log(FindNeedle('react-redux', 'redux'));
FindNeedle('react-redux', 'redux')
/* - **needle**: redux
- **haystack**: react-redux
- **output**: 6 */

module.exports = FindNeedle
