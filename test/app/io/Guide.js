// https://nodejs.org/en/docs/guides/getting-started-guide/
const server = require('../../../app/models/app'), assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
describe(`see a message 'Hello World'`, () => {
    it('http.createServer', () => {
        expect(typeof server).to.equal('object')
    })
})
describe(`The assert module provides a simple set of assertion tests that can be used to test invariants.`, () => {
    assert.deepEqual(/a/gi, new Date());
    assert.deepEqual(1, true)
    const obj1 = {
        a: {
            b: 1
        }
    };
    const obj2 = {
        a: {
            b: 2
        }
    };
    const obj3 = {
        a: {
            b: 1
        }
    };
    const obj4 = Object.create(obj1);

    assert.deepEqual(obj1, obj1);
    // OK, object is equal to itself

    assert.notDeepEqual(obj1, obj2);
    // AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
    // values of b are different

    assert.deepEqual(obj1, obj3);
    // OK, objects are equal

    assert.notDeepEqual(obj1, obj4);
    // AssertionError: { a: { b: 1 } } deepEqual {}
    // Prototypes are ignored
})