// https://www.codementor.io/davidtang/unit-testing-and-tdd-in-node-js-part-1-8t714s877
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var CartSummary = require('./../../../app/models/cart-summary');
var sinon = require('sinon');
var tax = require('./../../../app/models/tax');
describe('CartSummary', function () {
    it('getSubtotal() should return 0 if no items are passed in', function () {
        var cartSummary = new CartSummary([]);
        expect(cartSummary.getSubtotal()).to.equal(0);
    });
    it('getSubtotal() should return the sum of the price * quantity for all items', function () {
        var cartSummary = new CartSummary([{
            id: 1,
            quantity: 4,
            price: 50
        }, {
            id: 2,
            quantity: 2,
            price: 30
        }, {
            id: 3,
            quantity: 1,
            price: 40
        }]);

        expect(cartSummary.getSubtotal()).to.equal(300);
    });
});
describe(`node --v8-options | grep "in progress"`, () => {
    it(`The values() method returns a new Array Iterator object that contains the values for each index in the array.`, () => {
        var a = ['w', 'y', 'k', 'o', 'p'];
        if (a.values) {

            var iterator = a.values();

            expect(iterator.next().value).to.be();
            expect(iterator.next().value); // y 
            expect(iterator.next().value); // k 
            expect(iterator.next().value); // o 
            expect(iterator.next().value); // p
        }
    })
    // --harmony_function_sent(enable "harmony function.sent"(in progress))
    // --harmony_sharedarraybuffer(enable "harmony sharedarraybuffer"(in progress))
    // --harmony_do_expressions(enable "harmony do-expressions"(in progress))
    // --harmony_class_fields(enable "harmony public fields in class literals"(in progress))
    // --harmony_async_iteration(enable "harmony async iteration"(in progress))
    // --harmony_promise_finally(enable "harmony Promise.prototype.finally"(in progress))
    // --harmony_number_format_to_parts(enable "Intl.NumberFormat.prototype." "formatToParts"(in progress))
})