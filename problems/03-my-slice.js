/*
    mySlice()
    Write a function that takes an array and two numbers. The function should behave like
    Javascript's built-in Array#slice method and return a new array with only elements between
    the indices of the two numbers passed in. The first number is inclusive and the second is exclusive.
    If the first number is less than 0 the function should return a slice of the array from the beginning
    and if the second number is greater than the length of the array it should return a slice up to the end
    of the array

    If no end index is passed as the third argument, the function should slice up to the end of the array.

    See examples below:

    console.log(mySlice([1, 2, 3], 0, 2)) // prints [1, 2]
    console.log(mySlice([1, 2, 3], 0, 4)) // prints [1, 2, 3]
    console.log(mySlice([1, 2, 3], -1, 2)) // prints [1, 2]
    console.log(mySlice([1, 2, 3], 1, 0)) // prints []
    console.log(mySlice([1, 2, 3], 0)) // prints [1, 2, 3]
    console.log(mySlice([1, 2, 3], 1)) // prints [2, 3];
*/

function mySlice(arr, start, end = arr.length) {
    // Your code here
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = mySlice;
} catch (e) {
    module.exports = null;
}