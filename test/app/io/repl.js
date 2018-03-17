const repl = require('repl'), assert = require('assert');

describe(`The repl module provides a Read-Eval-Print-Loop (REPL) implementation that is available both as a standalone program or includible in other applications. `, () => {
    it(`Global and Local Scope`, () => {
        const msg = 'message';

        assert.equal(repl.start('> ').context.m, undefined);
    });
})