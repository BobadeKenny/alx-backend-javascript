const chai = require('chai');
const expect = chai.expect;

const calculateNumber = require("./2-calcul_chai.js")

describe('calculateNumber', function() {
    it("should return 4", function() {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
});

describe('calculateNumber', function() {
    it("should return 5", function() {
        expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
});

describe('calculateNumber', function() {
    it("should return 5", function() {
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
});

describe('calculateNumber', function() {
    it("should return 6", function() {
        expect(calculateNumber('SUBTRACT', 7, 1.1)).to.equal(6);
    });
});

describe('calculateNumber', function() {
    it("should return -3", function() {
        expect(calculateNumber('SUBTRACT', 1.4, 3.7)).to.equal(-3);
    });
})

describe('calculateNumber', function() {
    it("should return 4", function() {
        expect(calculateNumber('SUBTRACT', 7.4, 3.2)).to.equal(4);
    });
});

describe('calculateNumber', function() {
    it("should return 2", function() {
        expect(calculateNumber('DIVIDE', 8.4, 4.2)).to.equal(2);
    });
});

describe('calculateNumber', function() {
    it("should return Error", function() {
        expect(calculateNumber('DIVIDE', 8.4, 0)).to.equal('Error');
    });
});
