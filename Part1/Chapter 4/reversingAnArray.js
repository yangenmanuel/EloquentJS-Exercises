/**
 *  Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
 */

let arr1 = [1,2,3]
function reverseArray (arr) {
  let reversed = []
  
  for(let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i])
  }
  return reversed
}
 
console.log(reverseArray(arr1)) // [3, 2, 1]
console.log(arr1) // [1, 2, 3] El array original no fue modificado

let arr2 = [1,2,3]
function reverseArrayInPlace(arr2) {
	for (var i = 0; i < Math.floor(arr2.length / 2); i++) {
		  var old = arr2[i];
    	arr2[i] = arr2[arr2.length - 1 - i];
    	arr2[arr2.length - 1 - i] = old;
	}
	return arr2;
}

console.log(reverseArrayInPlace(arr2))
console.log(arr2)

