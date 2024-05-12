function filterArray(numbers, value) {
    const NEW_array = [];
    for (const newnumber of numbers) {
        if (value < newnumber) {
            NEW_array.push(newnumber);     
        }
    } 
    return NEW_array;
  } 

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]