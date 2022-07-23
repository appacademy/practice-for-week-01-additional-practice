const assert = require("assert");
const translationTraining = require("../problems/02-translation-training.js");

describe("translationTraining()", function(){
    it ("should return a string ", function() {
        assert.strictEqual(typeof translationTraining("hello"), "string");
    });

    it ("should remove the first and last vowels appropriately", function() {
        const test1 = "What are you doing";
        const test2 = "This is tedious";
        const test3 = "Programming is fun";
        assert.strictEqual(translationTraining(test1), "Wht ar yu dong");
        assert.strictEqual(translationTraining(test2), "Ths s tdious");
        assert.strictEqual(translationTraining(test3), "Prgramming s fn");
    });

    it ("should not remove characters from words with no vowels", function() {
        const test1 = "my rhythm syncs shyly";
        const test2 = "myths lynx hymns";
        assert.strictEqual(translationTraining(test1), "my rhythm syncs shyly");
        assert.strictEqual(translationTraining(test2), "myths lynx hymns");
    });
});