// var {functionName,other functions} = require('path of the function ../index')
// run or log the function to make sure it works
// run npm test in the terminal
// var chai = require('chai)
// var assert = chai.assert
// var expect = chai.expect
// var should = chai.should()

import { capitalize, createArray } from "../index.js";
import {assert} from 'chai'
import {expect} from 'chai'
import {should} from 'chai'

describe('test capitalize' , function(){
    it('take and return string', function(){
        expect(capitalize('rania')).to.be.a('string')
    })
    it('return capitalized string', function(){
        assert.equal(capitalize('rania'),'RANIA')
    })
    it('return error when number sent', ()=>{
        expect(function(){
            capitalize(10)
        }).to.throw()
    })
})



describe('test createArray',function(){
    it('test return array', function(){
        expect(createArray(3)).to.be.an('array')
    })
    it('result include spesific value' , function(){
        expect(createArray(3)).to.be.include(1)
    })
    it('result equal length' , function(){
        expect(createArray(3)).to.have.lengthOf(3)
    })
    
})


// suit

//sum:
// describe('here i test sum',function(){
//testcase
// it('test if pass 2,4 , result is 5',functin(){
//     expect(sum(2,3)).to.be.equal(5)
//     assert.equal(sum(2,3),5)
//     sum(2,3).should.equal(5)
//   })    
//})


//febonaci:
// describe()


