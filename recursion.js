/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  return nums.length === i ? 1 : nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestLength = 0) {
  if (words.length === i) {
    return longestLength;
  } else if (words[i].length > longestLength) {
    longestLength = words[i].length;
  }
  return longest(words, i + 1, longestLength);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr = "") {
  if (i >= str.length) {
    return newStr;
  }
  newStr += str[i];
  return everyOther(str, i + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, j = 1) {
  if (str.length === i) {
    return true;
  } else if (str[i] !== str[str.length - j]) {
    return false;
  }
  return isPalindrome(str, i + 1, j + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr.length === i) {
    return -1;
  } else if (arr[i] === val) {
    return i;
  }
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, newStr = "") {
  if (str.length === i) {
    return newStr;
  } else {
    newStr += str[str.length - 1 - i];
    return revString(str, i + 1, newStr);
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, onlyStrings = []) {
  if (Object.keys(obj).length === 0) {
    return [];
  }
  for (itemKey in obj) {
    if (typeof obj[itemKey] === "string") {
      onlyStrings.push(obj[itemKey]);
    } else if (Array.isArray(obj[itemKey])) {
      gatherStrings(obj[itemKey], onlyStrings);
    } else if (typeof obj[itemKey] === "object") {
      gatherStrings(obj[itemKey], onlyStrings);
    }
  }
  return onlyStrings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// function binarySearch(arr, val) {
//   let middleIndex = Math.floor(arr.length / 2);
//   //base case
//   if (arr.length === 0) return -1;
//   // compare if middle index value matches the search value
//   else if (arr[middleIndex] === val) return middleIndex;
//   //recursive cases
//   //if value at middle index is less than the search value, search the right half of the array
//   else if (arr[middleIndex] < val) {
//     //set the recursive function to a variable to track the index, add one to middle index to search everything after the value at the current middle index
//     let result = binarySearch(arr.slice(middleIndex + 1), val);
//     //if the value is not found return and end execution
//     if (result === -1) {
//       return result;
//     } else {
//       return result + middleIndex + 1;
//     }
//   }
//   //else search the left side of the array
//   else {
//     //set the recursive function to a variable to track the index
//     let result = binarySearch(arr.slice(0, middleIndex), val);
//     //since the first part of arr is not modified the index returned will match the index of the original array given
//     return result;
//   }
// }

function binarySearch(arr, val, start = 0, end = arr.length) {
  let middleIndex = Math.floor((start + end) / 2);
  if (start > end) {
    return -1;
  } else if (arr[middleIndex] === val) {
    return middleIndex;
  } else if (arr[middleIndex] < val) {
    return binarySearch(arr, val, middleIndex + 1, end);
  } else {
    return binarySearch(arr, val, start, middleIndex - 1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
