const assert = require("assert");
const sequenceOfNumbers = require("../problems/05-sequence-of-numbers.js");

describe("sequenceOfNumbers()", function() {
    it("should return the correct output for strings with 1 digit", function() {
        assert.strictEqual(sequenceOfNumbers("1"), "11");
        assert.strictEqual(sequenceOfNumbers("5"), "15");
        assert.strictEqual(sequenceOfNumbers("7"), "17");
    });

    it ("should return the correct output for strings with 2 digits", function() {
        assert.strictEqual(sequenceOfNumbers("11"), "21");
        assert.strictEqual(sequenceOfNumbers("55"), "25");
        assert.strictEqual(sequenceOfNumbers("24"), "1214");
        assert.strictEqual(sequenceOfNumbers("72"), "1712");
    });

    it("should return the correct output for strings with any number of digits", function () {
        assert.strictEqual(sequenceOfNumbers("111"), "31");
        assert.strictEqual(sequenceOfNumbers("135"), "111315");
        assert.strictEqual(sequenceOfNumbers("2114"), "122114");
        assert.strictEqual(sequenceOfNumbers("1211"), "111221");
        assert.strictEqual(sequenceOfNumbers("12113"), "11122113");
    });
});