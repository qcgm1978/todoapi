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
    it(`Tests for deep equality between the actual and expected parameters`, () => {

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
    it('assert.deepStrictEqual(actual, expected[, message])', () => {

        assert.deepEqual({ a: 1 }, { a: '1' });
        // OK, because 1 == '1'

        assert.notDeepStrictEqual({ a: 1 }, { a: '1' });
        // AssertionError: { a: 1 } deepStrictEqual { a: '1' }
        // because 1 !== '1' using strict equality

        // The following objects don't have own properties
        const date = new Date();
        const object = {};
        const fakeDate = {};

    });
    it('assert.doesNotThrow(block[, error][, message])', () => {
        assert.throws(
            () => {
                throw new TypeError('Wrong value');
            },
            TypeError
        );
        assert.throws(
            () => {
                throw new TypeError('Wrong value');
            },
            TypeError
        );
        assert.throws(
            () => {
                throw new TypeError('Wrong value');
            },
            TypeError,
            'Whoops'
        );

    });
    it(`Tests shallow, coercive equality between the actual and expected parameters using the Abstract Equality Comparison ( == ).`, () => {

        assert.equal(1, 1);
        // OK, 1 == 1
        assert.equal(1, '1');
        // OK, 1 == '1'

        assert.notEqual(1, 2);
        // AssertionError: 1 == 2
        assert.notEqual({ a: { b: 1 } }, { a: { b: 1 } });
        //AssertionError: { a: { b: 1 } } == { a: { b: 1 } }
        assert.deepEqual({ a: { b: 1 } }, { a: { b: 1 } });

    });
    it(`assert.fail(actual, expected[, message[, operator[, stackStartFunction]]])`, () => {

        assert.throws(() => { assert.fail(1, 2, undefined, '<') });
        // AssertionError [ERR_ASSERTION]: 1 > 2

        assert.throws(() => assert.fail(1, 2, 'fail'))
        // AssertionError [ERR_ASSERTION]: fail

        assert.throws(() => assert.fail(1, 2, 'whoops', '>'));
        // AssertionError [ERR_ASSERTION]: whoops

        assert.throws(() => assert.fail(1, 2, new TypeError('need array')));
        assert.throws(() => assert.fail());
        // AssertionError [ERR_ASSERTION]: Failed

        assert.throws(() => assert.fail('boom'));
        // AssertionError [ERR_ASSERTION]: boom

        assert.throws(() => assert.fail('a', 'b'));
        assert.throws(() => assert.fail());
        // AssertionError [ERR_ASSERTION]: Failed

        assert.throws(() => assert.fail('boom'));
        // AssertionError [ERR_ASSERTION]: boom

        assert.throws(() => assert.fail('a', 'b'));
        // AssertionError [ERR_ASSERTION]: 'a' != 'b'
        function suppressFrame() {
            assert.fail('a', 'b', undefined, '!==', suppressFrame);
        }
        assert.throws(suppressFrame);
        // AssertionError [ERR_ASSERTION]: 'a' !== 'b'
        //     at repl:1:1
        //     at ContextifyScript.Script.runInThisContext (vm.js:44:33)
        //     ...
    });
    it(`assert.ifError(value)`, () => {

        assert.ifError(null);
        // OK
        assert.ifError(0);
        // OK
        assert.throws(() => assert.ifError(1));
        // Throws 1
        assert.throws(() => assert.ifError('error'));
        // Throws 'error'
        assert.throws(() => assert.ifError(new Error()));
        // Throws Error
    });
    it(`assert.notDeepEqual(actual, expected[, message])`, () => {

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
        // AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }

        assert.notDeepEqual(obj1, obj2);
        // OK: obj1 and obj2 are not deeply equal

        assert.deepEqual(obj1, obj3);
        // AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }

        assert.notDeepEqual(obj1, obj4);
        // OK: obj1 and obj4 are not deeply equal
    });
    it(`assert.notDeepStrictEqual(actual, expected[, message])`, () => {

        assert.deepEqual({ a: 1 }, { a: '1' });
        // AssertionError: { a: 1 } notDeepEqual { a: '1' }

        assert.notDeepStrictEqual({ a: 1 }, { a: '1' });
        // OK
    });
    it(`assert.notEqual(actual, expected[, message])`, () => {

        assert.notEqual(1, 2);
        // OK

        assert.equal(1, 1);
        // AssertionError: 1 != 1

        assert.equal(1, '1');
        // AssertionError: 1 != '1'
    });
    it(`assert.notStrictEqual(actual, expected[, message])`, () => {

        assert.notStrictEqual(1, 2);
        // OK

        assert.strictEqual(1, 1);
        // AssertionError: 1 !== 1

        assert.notStrictEqual(1, '1');
        // OK
    });
    it(`assert.ok(value[, message])`, () => {
        assert.ok(true);
        // OK
        assert.ok(1);
        // OK
        assert.throws(() => assert.ok(false));
        // throws "AssertionError: false == true"
        assert.throws(() => assert.ok(0));
        // throws "AssertionError: 0 == true"
        assert.throws(() => assert.ok(false, 'it\'s false'));
        // throws "AssertionError: it's false"
    });
    it(`assert.strictEqual(actual, expected[, message])`, () => {

        assert.strictEqual(1, 2);
        // AssertionError: 1 === 2

        assert.strictEqual(1, 1);
        // OK

        assert.strictEqual(1, '1');
        // AssertionError: 1 === '1'
    });
})