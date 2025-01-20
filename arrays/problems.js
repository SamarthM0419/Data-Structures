// Given a sorted array, find if there is a pair of numbers that sum to a target.

/*
function hasPairWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}
console.log(hasPairWithSum([1, 2, 3, 4, 6], 8));
*/

// Check if an array reads the same backward as forward.

/*
function isPalindrone(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrone([[1, 2, 3, 2, 1]]));
console.log(isPalindrone([1, 2, 3, 4]));
*/

// Move all zeroes in an array to the end while maintaining the order of non-zero elements.
/*
function moveZeros(arr) {
  let nonZeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
  return arr;
}
console.log(moveZeros([0, 1, 0, 3, 12]));
*/

//  Given a sorted array, return a new array with the squares of each number, also sorted.
/*
function sortedSquares(arr) {
  let left = 0,
    right = arr.length - 1;
  const result = Array(arr.length).fill(0);
  let index = arr.length - 1;

  while (left < right) {
    const leftSquare = arr[left] ** 2;
    const rightSquare = arr[right] ** 2;
    if (leftSquare > rightSquare) {
      result[index--] = leftSquare;
      left++;
    } else {
      result[index--] = rightSquare;
      right--;
    }
  }
  return result;
}
console.log(sortedSquares([-4, -1, 0, 3, 10]));
*/

// Given two sorted arrays, find their intersection.
/*
function findIntersection(arr1, arr2) {
  let i = 0,
    j = 0;
  const result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}
console.log(findIntersection([1, 2, 4, 5, 6], [2, 3, 5, 7]));
*/

// Valid Mountain Array => array has 3 elements , Elements strictly increases and then decreases
/*
function isMountainArray(arr) {
  if (arr.length < 3) return false;

  let i = 0;
  while (i < arr.length - 1 && arr[i] < arr[i + 1]) i++;
  if (i === 0 && i === arr.length - 1) return false;
  while (i < arr.length - 1 && arr[i] > arr[i + 1]) i++;
  return i === arr.length - 1;
}
console.log(isMountainArray([0, 3, 2, 1]));
*/

// find middle of an array
/*
function findMiddle(arr) {
  let fast = 0,
    slow = 0;
  while (fast < arr.length - 1) {
    slow++;
    fast += 2;
  }
  return arr[slow];
}
console.log(findMiddle([1, 2, 3, 4, 5]));
*/

// Container with most water
/*
function maxArea(arr) {
  let left = 0,
    right = arr.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const currentArea = Math.min(arr[left], arr[right]) * width;
    maxWater = Math.max(maxWater, currentArea);

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
*/
