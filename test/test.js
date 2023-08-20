const assert = require('chai').assert;
const stringUtils = require('./../index');

describe('String Utils', () => {
    it('stringLength should get length of string', () => {
        assert.equal(stringUtils.stringLength('Hello, World!'), 13);
    });
    
    it('convertToUpperCase should convert string to UpperCase', () => {
        assert.equal(stringUtils.convertToUpperCase('hello'), "HELLO");
    });
    
    it('convertToLowerCase should convert string to LowerCase', () => {
        assert.equal(stringUtils.convertToLowerCase('WORLD'), "world");
    });

    it('capitalizeFirstLetter should capitalize first character of string', () => {
        assert.equal(stringUtils.capitalizeFirstLetter('hello world!'), "Hello world!");
    });

    it('convertToTitleCase should capitalize first character of every word', () => {
        assert.equal(stringUtils.convertToTitleCase('this is a test sentence'), "This Is A Test Sentence");
    });

    it('getSubstring should get a substring from the string', () => {
        assert.equal(stringUtils.getSubstring('abcdef', 1, 4), "bcd");
    });

    it('trimWhitespace should trim white space from both end', () => {
        assert.equal(stringUtils.trimWhitespace('   Hello, World!   '), "Hello, World!");
    });

    it('trimLeft should trim leading white space from string', () => {
        assert.equal(stringUtils.trimLeft('   Leading whitespace'), "Leading whitespace");
    });

    it('trimRight should trim trailing white space from string', () => {
        assert.equal(stringUtils.trimRight('Trailing whitespace   '), "Trailing whitespace");
    });

    it('replaceCharacter should replace a character in the string', () => {
        assert.equal(stringUtils.replaceCharacter('banana', 'a', 'o'), "bonono");
    });

    it('removeCharacter should remove a character from the string', () => {
        assert.equal(stringUtils.removeCharacter('banana', 'a'), "bnn");
    });

    it('splitString should split string and give array', () => {
        assert.deepEqual(stringUtils.splitString('apple,orange,banana', ','), [ 'apple', 'orange', 'banana' ]);
    });

    it('joinStrings join a string array to make it string', () => {
        assert.equal(stringUtils.joinStrings(['apple', 'orange', 'banana'], ', '), "apple, orange, banana");
    });

    it('firstOccurrence should get the first occorrence of a substring', () => {
        assert.equal(stringUtils.firstOccurrence('programming', 'g'), 3);
    });

    it('findAllOccurrences should get all the occorrence of a substring', () => {
        assert.deepEqual(stringUtils.findAllOccurrences('banana', 'a'), [1, 3, 5]);
    });

    it('replaceSubstring should replace a substring with new string', () => {
        assert.equal(stringUtils.replaceSubstring('hello world', 'world', 'there'), "hello there");
    });

    it('replaceWhitespaceWith should remove white space from string', () => {
        assert.equal(stringUtils.replaceWhitespaceWith('Hello    World!', '-'), "Hello----World!");
    });

    it('padLeft should add dummy string to left of string is not that long', () => {
        assert.equal(stringUtils.padLeft('42', '0', 5), "00042");
    });

    it('padRight should add dummy string to right of string is not that long', () => {
        assert.equal(stringUtils.padRight('42', '0', 5), "42000");
    });

    it('reverseString should reverse the string', () => {
        assert.equal(stringUtils.reverseString('world'), 'dlrow');
    });

    it('isPalindrome should check if reverse of the string is equal to actual string', () => {
        assert.equal(stringUtils.isPalindrome('racecar'), true);
    });

    it('isNumeric should check if string contains only number', () => {
        assert.equal(stringUtils.isNumeric('42.5'), true);
    });

    it('encodeBase64 should encode the string in base64', () => {
        assert.equal(stringUtils.encodeBase64('Hello, World!'), "SGVsbG8sIFdvcmxkIQ==");
    });

    it('decodeBase64 should decode the base64 to string', () => {
        assert.equal(stringUtils.decodeBase64('SGVsbG8sIFdvcmxkIQ=='), "Hello, World!");
    });

    it('matchRegex returns an array of all occurrences of a given regular expression pattern in a string', () => {
        assert.deepEqual(stringUtils.matchRegex('abc123def456', /\d+/g), ["123", "456"]);
    });

    it('replaceRegex replaces occurrences of a given regular expression pattern with a specified replacement in a string.', () => {
        assert.equal(stringUtils.replaceRegex('abc123def456', /\d+/g, 'X'), "abcXdefX");
    });

    it('encodeURIComponent encodes a string for safe use in a URL', () => {
        assert.strictEqual(stringUtils.encodeURIComponent('Hello, World!'), "Hello%2C%20World!");
    });

    it('decodeURIComponent decodes a URL-encoded string back to its original form', () => {
        assert.equal(stringUtils.decodeURIComponent('Hello%2C%20World%21'), "Hello, World!");
    });

    it('getPathFromURL extracts the path portion from a given URL', () => {
        assert.equal(stringUtils.getPathFromURL('https://example.com/path/file.html'), "/path/file.html");
    });

    it('compareStrings compares two strings lexicographically and returns a comparison result.', () => {
        assert.equal(stringUtils.compareStrings('apple', 'banana'), -1);
    });

    it('equalsIgnoreCase checks if two strings are equal, ignoring their case', () => {
        assert.equal(stringUtils.equalsIgnoreCase('hello', 'Hello'), true);
    });

    it('formatString formats a string using placeholders and corresponding values.', () => {
        assert.equal(stringUtils.formatString('Hello, {0}!', 'World'), "Hello, World!");
    });

    it('getUnicodeCodePointAt retrieves the Unicode code point at a specific position in a string.', () => {
        assert.equal(stringUtils.getUnicodeCodePointAt('Hello', 1), 101);
    });

    it('convertToUnicode converts a string to a sequence of Unicode code points.', () => {
        assert.equal(stringUtils.convertToUnicode('Hello'), "U+48 U+65 U+6c U+6c U+6f");
    });

    it('truncateText truncates a string to a specified length with an optional ellipsis.', () => {
        assert.strictEqual(stringUtils.truncateText('Lorem ipsum dolor sit amet', 15), "Lorem ipsum dol...");
    });

    it('normalizeWhitespace replaces consecutive whitespace characters with a single space.', () => {
        assert.equal(stringUtils.normalizeWhitespace('  Hello    World!   '), " Hello World! ");
    });

    it('collapseWhitespace removes all whitespace characters from a string.', () => {
        assert.equal(stringUtils.collapseWhitespace('Hello   World!'), "HelloWorld!");
    });

    it('getCharacterType determines the type of a character (uppercase, lowercase, digit, etc.).', () => {
        assert.equal(stringUtils.getCharacterType('A'), "uppercase");
    });

    it('getCharacterCode retrieves the Unicode code point of a character.', () => {
        assert.equal(stringUtils.getCharacterCode('A'), 65);
    });

    it('padWithContent pads a string with a specified content to achieve a desired length.', () => {
        assert.equal(stringUtils.padWithContent('Hello', '*', 10), "**Hello***");
    });

    it('convertToCamelCase converts a string to camel case format.', () => {
        assert.equal(stringUtils.convertToCamelCase('hello-world'), "helloWorld");
    });

    it('convertToSnakeCase converts a string to snake case format.', () => {
        assert.equal(stringUtils.convertToSnakeCase('helloWorld'), "hello_world");
    });

    it('wrapText wraps a long text string into multiple lines with a specified maximum width.', () => {
        assert.strictEqual(
            stringUtils.wrapText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 20),
            `Lorem ipsum dolor sit
amet, consectetur
adipiscing elit.`
        );
    });

});