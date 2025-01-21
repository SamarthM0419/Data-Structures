// Array of Prefix and Suffix Sums

/*
function prefixAndSuffixSum(arr) {
  const n = arr.length;
  const prefix = Array(n).fill(0);
  const suffix = Array(n).fill(0);

  prefix[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefix[i] = arr[i] + prefix[i - 1];
  }

  suffix[n - 1] = arr[arr.length - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + arr[i];
  }

  return { prefix, suffix };
}
console.log(prefixAndSuffixSum([1, 2, 3, 4]));
*/

// Sum of Array Except Self
/*
function sumArrayExceptSelf(arr) {
  const n = arr.length;
  const result = Array(n).fill(0);

  let totolSum = 0;

  for (let num of arr) {
    totolSum += num;
  }

  for (let i = 0; i < arr.length; i++) {
    result[i] = totolSum - arr[i];
  }
  return result;
}
console.log(sumArrayExceptSelf([1,2,3,4]))
*/

// Product of array except self

/*
function productArrayExceptSelf(arr) {
  const n = arr.length;
  const result = Array(n).fill(0);
  let totolProduct = 1;

  for (let num of arr) {
    totolProduct *= num;
  }

  for (let i = 0; i < arr.length; i++) {
    result[i] = totolProduct / arr[i];
  }
  return result;
}
console.log(productArrayExceptSelf([1, 2, 3, 4]));
*/

/*
function productArrayExceptSelf(arr) {
  let result = Array(arr.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = prefix;
    prefix *= arr[i];
  }

  let suffix = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= arr[i];
  }
  return result;
}
console.log(productArrayExceptSelf([1, 2, 3, 4]));
*/

// Maximum Product Subarray

/*
function maxProduct(nums) {
  let maxProduct = nums[0];
  let currMax = nums[0],
    currMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [currMax, currMin] = [currMin, currMax];
    }
    currMax = Math.max(nums[i], nums[i] * currMax);
    currMin = Math.min(nums[i], nums[i] * currMin);

    maxProduct = Math.max(maxProduct, currMax);
  }
  return maxProduct;
}
console.log(maxProduct([2, 3, -2, 4]));
*/

// Replace Each element with greatest element on the right

function replaceWithGreatestElementOnRight(arr) {
  const n = arr.length;
  let maxRight = -1;

  for (let i = n - 1; i >= 0; i--) {
    const current = arr[i];
    arr[i] = maxRight;
    maxRight = Math.max(maxRight, current);
  }
  return arr;
}
console.log(replaceWithGreatestElementOnRight([17, 18, 5, 4, 6, 1]));
