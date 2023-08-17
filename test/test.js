const assert = require('chai').assert;
const stringUtils = require('./../index');

describe('String Utils', () => {
    it('capitalizeFirstLetter should capitalize the first letter', () => {
        assert.equal(stringUtils.capitalizeFirstLetter('hello'), 'Hello');
    });

    it('reverseString should reverse the string', () => {
        assert.equal(stringUtils.reverseString('world'), 'dlrow');
    });
});