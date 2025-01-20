// Two sum
/*
function twoSum(arr, target) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
      const sum = target - arr[i];
      if (map.has(sum)) {
        return [map.get(sum), i];
      }
      map.set(arr[i], i);
    }
    return [];
  }
  
  console.log(twoSum([2, 7, 11, 15], 9));
  */

// Two Sum sorted arrays
/*
function twoSum(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
*/

// SubArray sum equals to k
function subArraySum(arr, k) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0,
    count = 0;
  for (let num of arr) {
    sum += num;

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}
console.log(subArraySum([1, 2, 3], 3));
