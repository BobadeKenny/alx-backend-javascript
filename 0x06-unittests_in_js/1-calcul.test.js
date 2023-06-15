var assert = require('assert');
var calculateNumber = require("./1-calcul.js")

describe('calculateNumber', function() {
    it("should return 4", function() {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
});

describe('calculateNumber', function() {
    it("should return 5", function() {
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });
})

describe('calculateNumber', function() {
    it("should return 5", function() {
        assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
})

describe('calculateNumber', function() {
    it("should return 6", function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 7, 1.1), 6);
    });
})

describe('calculateNumber', function() {
    it("should return -3", function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.7), -3);
    });
})

describe('calculateNumber', function() {
    it("should return 4", function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 7.4, 3.2), 4);
    });
})

describe('calculateNumber', function() {
    it("should return 2", function() {
        assert.strictEqual(calculateNumber('DIVIDE', 8.4, 4.2), 2);
    });
})

describe('calculateNumber', function() {
    it("should return Error", function() {
        assert.strictEqual(calculateNumber('DIVIDE', 8.4, 0), 'Error');
    });
})
