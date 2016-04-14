var expect = require('chai').expect
var checker = require("../checker.js")

describe('should check if string contains alphabit orders', function () {

    it('should return true', function (done) {
        expect(checker.check('abcdef')).to.equal(true);
        done();
    });

    it('should return false', function (done) {
        expect(checker.check('abcdd')).to.equal(false);
        done();
    });

    it('should return false', function (done) {
        expect(checker.check('abccdd')).to.equal(false);
        done();
    });

    it('should return false', function (done) {
        expect(checker.check('@ggff')).to.equal(false);
        done();
    });

});
