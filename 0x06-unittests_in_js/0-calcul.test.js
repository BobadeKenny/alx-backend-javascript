var assert = require('assert');
var calculateNumber = require("./0-calcul.js")

describe('calculateNumber', function() {
    it("should return 4", function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
});

describe('calculateNumber', function() {
    it("should return 5", function() {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
})

describe('calculateNumber', function() {
    it("should return 5", function() {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
})

describe('calculateNumber', function() {
    it("should return 6", function() {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
})

describe('calculateNumber', function() {
    it("should return 5", function() {
        assert.strictEqual(calculateNumber(1.4, 3.7), 5);
    });
})

describe('calculateNumber', function() {
    it("should return 5", function() {
        assert.strictEqual(calculateNumber(1.4, 3.2), 4);
    });
}
)