const assert = require("assert");
const mySlice = require("../problems/03-my-slice.js");

describe("mySlice()", function() {
    it ("should not modify the original array", function() {
        const arr = [1, 2, 3];
        mySlice(arr, 0, 1);
        assert.deepEqual(arr, [1, 2, 3]);
    });

    it ("should return a copy of part of the array between the latter two arguments", function() {
        const arr = [1, 2, 3];
        assert.deepEqual(mySlice(arr, 0, 2), [1, 2]);
        assert.deepEqual(mySlice(arr, 1, 3), [2, 3]);
    });

    it ("should return part of the array from the beginning if the first index given is less than 0", function() {
        const arr = [1, 2, 3];
        assert.deepEqual(mySlice(arr, -1, 2), [1, 2]);
    });

    it ("should return part of the array up to the end if the second index given is greater than the length of the array", function() {
        const arr = [1, 2, 3];
        assert.deepEqual(mySlice(arr, 0, 4), [1, 2, 3]);
    });

    it ("should return an empty array if the first number is greater than or equal to the second number", function() {
        const arr = [1, 2, 3];
        assert.deepEqual(mySlice(arr, 1, 1), []);
        assert.deepEqual(mySlice(arr, 3, 2), []);
    });

    it ("should slice up to the end of the array if no end index specified as the third argument", function() {
        const arr = [1, 2, 3];
        assert.deepEqual(mySlice(arr, 0), [1, 2, 3]);
        assert.deepEqual(mySlice(arr, 1), [2, 3]);
    });
});