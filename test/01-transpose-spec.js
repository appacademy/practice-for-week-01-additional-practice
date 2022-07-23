const assert = require("assert");
const transpose = require("../problems/01-transpose.js");

describe("transpose()", function() {
    it ("should transpose a 2D array with the same number of rows and columns", function() {
        const arr = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const transposed = [
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
        ];
        assert.deepEqual(transpose(arr), transposed);
    });
    
    it ("should transpose a 2D array with any dimensions", function() {
        const arr = [
            [1, 2],
            [3, 4],
            [5, 6],
        ];
        const transposed = [
            [1, 3, 5],
            [2, 4, 6]
        ];

        assert.deepEqual(transpose(arr), transposed);
        assert.deepEqual(transpose(transposed), arr);
    });
    
});