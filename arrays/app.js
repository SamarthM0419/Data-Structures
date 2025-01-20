// Reverse an array
/*
function reverse(arr) {
  let f = 0;
  let l = arr.length - 1;

  while (f < l) {
    let temp = arr[f];
    arr[f] = arr[l];
    arr[l] = temp;
    f++;
    l--;
  }
  return arr;
}
const array = reverse([1, 2, 3, 4, 5]);
console.log(array);
*/

//Maximum and minimum element
/*
function findMaxAndMin(arr) {
  let max = arr[0],
    min = arr[0];
  for (let i of arr) {
    if (i > max) {
      max = i;
    }
    if (i < min) {
      min = i;
    }
  }
  return { max, min };
}
console.log(findMaxAndMin([3, 5, 1, 8, -2, 7]));
*/

//Merge 2 array into zizzag order
/*
function merge(arr1, arr2) {
  let arr3 = new Array(arr1.length + arr2.length);
  let i = 0,
    k = 0;
  while (i < arr1.length && i < arr2.length) {
    arr3[k] = arr1[i];
    k++;
    arr3[k] = arr2[i];
    k++;
    i++;
  }
  while (i < arr1.length) {
    arr3[k] = arr1[i];
    k++;
    i++;
  }
  while (i < arr2.length) {
    arr3[k] = arr2[i];
    k++;
    i++;
  }
  return arr3;
}
console.log(merge([1, 3, 5], [2, 4, 6]));
*/

//Merge 2 sorted array into sorted array
/*
function merge(arr1, arr2) {
  let merge = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merge[k] = arr1[i++];
      k++;
    } else merge[k++] = arr2[j++];
  }
  while (i < arr1.length) {
    merge[k++] = arr1[i++];
  }
  while (j < arr2.length) {
    merge[k++] = arr2[j++];
  }
  return merge;
}
console.log(merge([1, 8,9], [2, 4, 6]));
*/

//Check if array is sorted
/*
function checkArray(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<arr[i-1]){
            return false;
        }
    }
    return true;
}
console.log(checkArray([1,2,3,4,5,1]))
*/

// Duplicates in array
/*
function duplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();
  for (let num of arr) {
    if (seen.has(num)) duplicates.add(num);
    seen.add(num);
  }
  return { unique: [...seen], duplicates: [...duplicates] };
}
console.log(duplicates([1, 2, 3, 2, 4, 5, 1]));
*/

//nth biggest in array
/*
function nthBiggest(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          count++;
        }
      }
      if (count === n - 1) { 
        return arr[i];
      }
    }
  }
  
  console.log(nthBiggest([20, 10, 30, 15, 25], 2)); 
  */

// Frequency of array elements
/*
function findFrequency(arr) {
  let obj = {};

  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }
  return obj;
}
console.log(findFrequency([1, 2, 2, 3, 3, 3, 4]));
*/

// Finding element with maximum frequency
/*
function findMaxFrequency(arr) {
  const freq = new Map();
  let maxElement = 0;
  let maxFreq = [];

  for (let num of arr) {
    let count = (freq.get[num] || 0) + 1;
    freq.set(num, count);

    if (count > maxElement) {
      maxElement = count;
      maxFreq = [num];
    } else if (maxElement === count) {
      maxFreq.push(num);
    }
  }
  return { maxElement, maxFreq };
}
console.log(findMaxFrequency([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
*/

// FInding max value in an object
// const obj = { a: 10, b: 20, c: 5, d: 50 };
// const maxValue = Math.max(...Object.values(obj));
// console.log(maxValue);

// Finding the key with associated value
/*
const obj = { a: 10, b: 20, c: 5, d: 50 };

let maxKey = null;
let maxValue = -Infinity;

for (let num in obj) {
  if (obj[num] > maxValue) {
    maxValue = obj[num];
    maxKey = num;
  }
}

console.log(maxKey);
console.log(maxValue);
*/
