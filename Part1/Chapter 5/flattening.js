/*
  Flattening
Use the reduce method in combination with the concat method to “flatten” an array
of arrays into a single array that has all the elements of the original arrays.
*/

function flatter (arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(curr)
  }, [])
}

console.log(flatter([[1, 2, 3], [4, 5], [6]]))
// => [1,2,3,4,5,6]
