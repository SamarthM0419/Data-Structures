// Maximum subArray
/*
function maxSubArray(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
*/

// Subarray sum equal to k
/*
function subArraySum(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
}
console.log(subArraySum([1, 1, 1], 2));
*/

//optimized solution
/*
const subArray = (arr, k) => {
  let count = 0;
  let sum = 0;
  const map = new Map([[0, 1]]);

  for (let num of arr) {
    sum += num;

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};
console.log(subArray([1, 1, 1], 2));
*/

//Maximum Product subArray
/*
const maxProduct = (arr) => {
  let maxProduct = arr[0];
  let minProduct = arr[0];
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }
    maxProduct = Math.max(arr[i], maxProduct * arr[i]);
    minProduct = Math.min(arr[i], minProduct * arr[i]);
    result = Math.max(maxProduct, result);
  }
  return result;
};
console.log(maxProduct([2, 3, -2, 4]));
*/

