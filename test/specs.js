const assert = require('assert');

describe('My suite test', () => {
    describe('Just a test', () => {
        it('Should return true', () => {
            assert.strictEqual(5, 5);
        })
    })
})
