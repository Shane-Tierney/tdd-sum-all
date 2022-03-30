//Describe
const describe = require('mocha').describe

//it
const it = require('mocha').it

//Expect
const expect = require('chai').expect

//sumAll
const sumAll = require('../calculation')


describe('calculation.js test suite', () => {

  describe('sumAll tests', () => {

    it('returns the sum of the numbers in the array provided correctly', () => {
      // Setup Mock Data to be tested
      const mockData = [10,20,30,40]
      const expectedResult = 100

      //use mock data in the actual function, and record the result
      const actualResult = sumAll(mockData)

      //Compare the result and the proposed result in an assert
      expect(actualResult).to.be.equal(expectedResult)
    })
    it('it works with negative numbers', () => {
      const mockData = [5,-5,250]
      const expectedResult = 250

      const actualResult = sumAll(mockData)

      expect(actualResult).to.be.equal(expectedResult)
    })
  })
})