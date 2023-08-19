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