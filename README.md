# String Transformation

A JavaScript module for performing various string transformation tasks.
To install this module run command `npm i string-transformation`

## Import Module
```javascript
const stringUtil = require('string-transformation');
stringUtil.stringLength(str);
```

OR

```javascript
const { stringLength } = require('string-transformation');
```

## Functions

### `stringLength(str)`

Calculates the length of the given string.

**Input:**
```javascript
stringLength('Hello, World!');
```

**Output:**
```javascript
13
```

### `convertToUpperCase(str)`

Convert string to UpperCase.

**Input:**
```javascript
convertToUpperCase('hello');
```

**Output:**
```javascript
HELLO
```

### `convertToLowerCase(str)`

Convert string to LowerCase.

**Input:**
```javascript
convertToLowerCase('WORLD');
```

**Output:**
```javascript
world
```

### `capitalizeFirstLetter(str)`

Capitalize first character of string.

**Input:**
```javascript
capitalizeFirstLetter('hello world!');
```

**Output:**
```javascript
Hello world!
```

### `convertToTitleCase(str)`

Capitalize first character of every word in the string.

**Input:**
```javascript
convertToTitleCase('this is a test sentence');
```

**Output:**
```javascript
This Is A Test Sentence
```

### `getSubstring(str, start, end)`

Get a substring from the string.

**Input:**
```javascript
getSubstring('abcdef', 1, 4);
```

**Output:**
```javascript
bcd
```

### `trimWhitespace(str)`

Trim white space from both end of the string.

**Input:**
```javascript
trimWhitespace('   Hello, World!   ');
```

**Output:**
```javascript
Hello, World!
```

### `trimLeft(str)`

Trim leading white space from string.

**Input:**
```javascript
trimLeft('   Leading whitespace');
```

**Output:**
```javascript
Leading whitespace
```

### `trimRight(str)`

Trim trailing white space from string.

**Input:**
```javascript
trimRight('Trailing whitespace   ');
```

**Output:**
```javascript
Trailing whitespace
```

### `replaceCharacter(str, oldChar, newChar)`

Replace a character in the string.

**Input:**
```javascript
replaceCharacter('banana', 'a', 'o');
```

**Output:**
```javascript
bonono
```

### `removeCharacter(str, charToRemove)`

Remove a character from the string.

**Input:**
```javascript
removeCharacter('banana', 'a');
```

**Output:**
```javascript
bnn
```

### `splitString(str, delimiter)`

Split string and gives an array.

**Input:**
```javascript
splitString('apple,orange,banana', ',');
```

**Output:**
```javascript
[ 'apple', 'orange', 'banana' ]
```

### `joinStrings(array, delimiter)`

Joins an array of string and provides a string.

**Input:**
```javascript
joinStrings(['apple', 'orange', 'banana'], ', ');
```

**Output:**
```javascript
apple, orange, banana
```

### `firstOccurrence(str, substring)`

Get the first occorrence of a substring in a string.

**Input:**
```javascript
firstOccurrence('programming', 'g');
```

**Output:**
```javascript
3
```

### `findAllOccurrences(str, substring)`

Get all the occorrence of a substring in a string as a array.

**Input:**
```javascript
findAllOccurrences('banana', 'a');
```

**Output:**
```javascript
[1, 3, 5]
```

### `replaceSubstring(str, oldSubstring, newSubstring)`

Replace a substring from the string with a new string.

**Input:**
```javascript
replaceSubstring('hello world', 'world', 'there');
```

**Output:**
```javascript
hello there
```

### `replaceWhitespaceWith(str, newCharacter)`

Remove white space from string and replace it with new character.

**Input:**
```javascript
replaceWhitespaceWith('Hello    World!', '-');
```

**Output:**
```javascript
Hello----World!
```

### `padLeft(str, padChar, totalLength)`

Make the string longer by adding padding character to the left of the string if the string is shorter than the total required length of the string.

**Input:**
```javascript
padLeft('42', '0', 5);
```

**Output:**
```javascript
00042
```

### `padRight(str, padChar, totalLength)`

Make the string longer by adding padding character to the right of the string if the string is shorter than the total required length of the string.

**Input:**
```javascript
padRight('42', '0', 5);
```

**Output:**
```javascript
42000
```

### `reverseString(str)`

Reverse the string.

**Input:**
```javascript
reverseString('world');
```

**Output:**
```javascript
dlrow
```

### `isPalindrome(str)`

Check if the provided string is a palindrome.

**Input:**
```javascript
isPalindrome('racecar');
```

**Output:**
```javascript
true
```

### `isNumeric(str)`

Check if the provided string contains only numeric values (numbers).

**Input:**
```javascript
isNumeric('42.5');
```

**Output:**
```javascript
true
```

### `encodeBase64(str)`

Encode the provided string to base64.

**Input:**
```javascript
encodeBase64('Hello, World!');
```

**Output:**
```javascript
SGVsbG8sIFdvcmxkIQ==
```

### `decodeBase64(str)`

Decode base64 code to string.

**Input:**
```javascript
decodeBase64('SGVsbG8sIFdvcmxkIQ==');
```

**Output:**
```javascript
Hello, World!
```

### `matchRegex(str, regex)`

Returns an array of all occurrences of a given regular expression pattern in a string.

**Input:**
```javascript
matchRegex('abc123def456', /\d+/g);
```

**Output:**
```javascript
["123", "456"]
```

### `replaceRegex(str, regex, replacement)`

Replaces occurrences of a given regular expression pattern with a specified replacement in a string.

**Input:**
```javascript
replaceRegex('abc123def456', /\d+/g, 'X');
```

**Output:**
```javascript
abcXdefX
```

### `encodeURIComponent(str)`

Encodes a string for safe use in a URL.

**Input:**
```javascript
encodeURIComponent('Hello, World!');
```

**Output:**
```javascript
Hello%2C%20World!
```

### `decodeURIComponent(str)`

Decodes a URL-encoded string back to its original form.

**Input:**
```javascript
decodeURIComponent('Hello%2C%20World%21');
```

**Output:**
```javascript
Hello, World!
```

### `getPathFromURL(url)`

Extracts the path portion from a given URL.

**Input:**
```javascript
getPathFromURL('https://example.com/path/file.html');
```

**Output:**
```javascript
/path/file.html
```

### `compareStrings(str1, str2)`

Compares two strings lexicographically and returns a comparison result.

**Input:**
```javascript
compareStrings('apple', 'banana');
```

**Output:**
```javascript
-1
```

### `equalsIgnoreCase(str1, str2)`

Checks if two strings are equal, ignoring their case.

**Input:**
```javascript
equalsIgnoreCase('hello', 'Hello');
```

**Output:**
```javascript
true
```

### `formatString(format, ...values)`

Formats a string using placeholders and corresponding values.

**Input:**
```javascript
formatString('Hello, {0}!', 'World');
```

**Output:**
```javascript
Hello, World!
```

**Input:**
```javascript
formatString('Hello {0}, Hello {1}!', 'there', 'World');
```

**Output:**
```javascript
Hello there, Hello World!
```

### `getUnicodeCodePointAt(str, index)`

Retrieves the Unicode code point at a specific position in a string.

**Input:**
```javascript
getUnicodeCodePointAt('A', 0);
```

**Output:**
```javascript
65
```

### `convertToUnicode(str)`

Converts a string to a sequence of Unicode code points.

**Input:**
```javascript
convertToUnicode('Hello');
```

**Output:**
```javascript
U+48 U+65 U+6c U+6c U+6f
```

### `truncateText(str, maxLength, ellipsis)`

Truncates a string to a specified length with an optional ellipsis.

**Input:**
```javascript
truncateText('Lorem ipsum dolor sit amet', 15);
```

**Output:**
```javascript
Lorem ipsum dol...
```

### `normalizeWhitespace(str)`

Replaces consecutive whitespace characters with a single space.

**Input:**
```javascript
normalizeWhitespace('  Hello    World!   ');
```

**Output:**
```javascript
 Hello World! 
```

### `collapseWhitespace(str)`

Removes all whitespace characters from a string.

**Input:**
```javascript
collapseWhitespace('Hello   World!');
```

**Output:**
```javascript
HelloWorld! 
```

### `getCharacterType(char)`

Determines the type of a character (uppercase, lowercase, digit, etc.).

**Input:**
```javascript
getCharacterType('A');
```

**Output:**
```javascript
uppercase 
```

### `getCharacterCode(char)`

Retrieves the Unicode code point of a character.

**Input:**
```javascript
getCharacterCode('A');
```

**Output:**
```javascript
65 
```

### `padWithContent(str, padContent, totalLength)`

Pads a string with a specified content to achieve a desired length.

**Input:**
```javascript
padWithContent('Hello', '*', 10);
```

**Output:**
```javascript
**Hello***
```

### `convertToCamelCase(str)`

Converts a string to camel case format.

**Input:**
```javascript
convertToCamelCase('hello-world');
```

**Output:**
```javascript
helloWorld
```

### `convertToSnakeCase(str)`

Converts a string to snake case format.

**Input:**
```javascript
convertToSnakeCase('helloWorld');
```

**Output:**
```javascript
hello_world
```

### `wrapText(text, maxWidth)`

Wraps a long text string into multiple lines with a specified maximum width.

**Input:**
```javascript
wrapText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 20);
```

**Output:**
```javascript
Lorem ipsum dolor sit
amet, consectetur
adipiscing elit.
```