'use strict'

var chai = require('jasmine'); 

var myApp = require('../getprimes/getprimes.js');

describe("Generation of Prime Number tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return 'Invalid Integer' for 'c'", function() {
      expect(myApp.getPrimes("c")).toEqual('Invalid Integer');
    });

    it("should return 'Invalid Integer' for '[1,2]'", function() {
      expect(myApp.getPrimes([1,2])).toEqual('Invalid Integer');
    });

    it("should return 'Invalid Integer' for '-1'", function() {
      expect(myApp.getPrimes(-1)).toEqual('Invalid Integer');
    });

  });

  describe("Case for array output type", function() {

    it("should return Array for `3`", function() {
      expect(myApp.getPrimes(3)).toEqual(jasmine.any(Array));
    });

    it("should return Array for `15`", function() {
      expect(myApp.getPrimes(15)).toEqual(jasmine.any(Array))
    });

    it("should return Array for `0`", function() {
      expect(myApp.getPrimes(0)).toEqual(jasmine.any(Array))
    });
  });

  

  describe("Case for correct result", function() {

    it("should return `[]` for `1`", function() {
      expect(myApp.getPrimes(1)).toEqual([]);
    });

    it("should return `[2, 3, 5]` for `5`", function() {
      expect(myApp.getPrimes(5)).toEqual([2, 3, 5]);
    });

    it("should return `[2, 3, 5, 7]` for `10`", function() {
      expect(myApp.getPrimes(10)).toEqual([2, 3, 5, 7]);
    });

    it("should return `[2]` for `2`", function() {
      expect(myApp.getPrimes(2)).toEqual([2]);
    });
  });
});