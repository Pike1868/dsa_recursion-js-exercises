/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  } else {
    return nums[0] * product(nums.slice(1));
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  } else if (words[0].length > longest(words.slice(1))) {
    return words[0].length;
  } else {
    return longest(words.slice(1));
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) {
    return "";
  } else {
    return str[0] + everyOther(str.slice(2));
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  } else if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    return isPalindrome(str.substring(1, str.length - 1));
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) {
    return -1;
  } else if (arr[0] === val) {
    return 0;
  } else {
    let result = findIndex(arr.slice(1), val);
    if (result === -1) {
      return -1;
    } else {
      return result + 1;
    }
  }
}
/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) {
    return "";
  } else {
    let result = revString(str.slice(1));
    return result + str[0];
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  if (Object.keys(obj).length === 0) {
    return [];
  }

  let result = [];

  Object.values(obj).forEach((value) => {
    if (typeof value === "string") {
      result.push(value);
    } else if (Array.isArray(value)) {
      result = result.concat(gatherStrings(value));
    } else if (typeof value === "object" && value !== null) {
      // adding a null check here
      result = result.concat(gatherStrings(value));
    }
  });

  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let middleIndex = Math.floor(arr.length / 2);
  //base case
  if (arr.length === 0) return -1;
  // compare if middle index value matches the search value
  else if (arr[middleIndex] === val) return middleIndex;
  //recursive cases
  //if value at middle index is less than the search value, search the right half of the array
  else if (arr[middleIndex] < val) {
    //set the recursive function to a variable to track the index, add one to middle index to search everything after the value at the current middle index
    let result = binarySearch(arr.slice(middleIndex + 1), val);
    //if the value is not found return and end execution
    if (result === -1) {
      return result;
    } else {
      return result + middleIndex + 1;
    }
  }
  //else search the left side of the array
  else {
    //set the recursive function to a variable to track the index
    let result = binarySearch(arr.slice(0, middleIndex), val);
    //since the first part of arr is not modified the index returned will match the index of the original array given
    return result;
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
