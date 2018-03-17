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

        assert.throws(() => assert.strictEqual(1, 2));
        // AssertionError: 1 === 2

        assert.strictEqual(1, 1);
        // OK

        assert.throws(() => assert.strictEqual(1, '1'));
        // AssertionError: 1 === '1'
    });
    it(`assert.throws(block[, error][, message])`, () => {
        assert.throws(
            () => {
                throw new Error('Wrong value');
            },
            Error
        );
        assert.throws(
            () => {
                throw new Error('Wrong value');
            },
            /value/
        );
        assert.throws(
            () => {
                throw new Error('Wrong value');
            },
            function (err) {
                if ((err instanceof Error) && /value/.test(err)) {
                    return true;
                }
            },
            'unexpected error'
        );
        const myFunction = () => { throw new Error('custom missing foo') }
        // THIS IS A MISTAKE! DO NOT DO THIS!
        assert.throws(myFunction, function (err) {
            if ((err instanceof Error) && /custom/.test(err)) {
                return true;
            }
        }, 'did not throw with expected message');

        // Do this instead.
        assert.throws(myFunction, /missing foo/, 'did not throw with expected message');
    });
    it(` using ES2015 Object.is(), which uses the SameValueZero comparison.`, () => {
        assert.equal(Object.is('foo', 'foo'), true);     // true
        assert.equal(Object.is(this, this), 1);   // true

        assert.equal(Object.is('foo', 'bar'), false);     // false
        assert.equal(Object.is([], []), false);           // false

        var test = { a: 1 };
        assert.equal(Object.is(test, test), true);       // true

        assert.equal(Object.is(null, null), true);       // true

        // Special Cases
        assert.equal(Object.is(0, -0), false);            // false
        assert.equal(Object.is(-0, -0), true);           // true
        assert.equal(Object.is(NaN, 0 / 0), true);
        const a = 0;
        const b = -a;
        assert.throws(() => assert.notStrictEqual(a, b));
        // AssertionError: 0 !== -0
        // Strict Equality Comparison doesn't distinguish between -0 and +0...
        assert(!Object.is(a, b));
        // but Object.is() does!

        const str1 = 'foo';
        const str2 = 'foo';
        assert.throws(() => assert.strictEqual(str1 / 1, str2 / 1));
        // AssertionError: NaN === NaN
        // Strict Equality Comparison can't be used to check NaN...
        assert(Object.is(str1 / 1, str2 / 1));
        // but Object.is() can!
    });
})