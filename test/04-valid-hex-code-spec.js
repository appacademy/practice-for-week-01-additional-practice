const assert = require("assert");
const validHexCode = require("../problems/04-valid-hex-code.js");

describe("validHexCode()", function(){
    it ("should return true for valid hex codes", function() {
        assert.strictEqual(validHexCode("#ABCDEF"), true);
        assert.strictEqual(validHexCode("#88ef29"), true);
    });

    it ("should return false if the string does not start with '#'", function() {
        assert.strictEqual(validHexCode("943234"), false);
    });

    it ("should return false if the string is not the right length", function() {
        assert.strictEqual(validHexCode("#ABCDE"), false);
        assert.strictEqual(validHexCode("#ABCDEFA"), false);
    });

    it ("should return false if the string includes invalid letters or symbols", function() {
        assert.strictEqual(validHexCode("#222!E4"), false);
        assert.strictEqual(validHexCode("#94FG11"), false);
        assert.strictEqual(validHexCode("#94ez11"), false);
    });
});