function intersection (arr1, arr2) {
  // Your code here:
  const repeated = [];

  return arr1.reduce((acc, curr, i) => {
    if (arr2[i] === curr) acc.push(curr); // el elemento de arr2 en la posicion que está recorriendo actualemtne el reducer es igual al elemento del arr1, lo pusheaa repeated. Sabe que acc es repeated porque se lo indiqué como tercer parámetro
    return acc 
  }, repeated);
}


console.log(intersection([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20]));

module.exports = intersection
