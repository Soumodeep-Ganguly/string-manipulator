# String Manipulator

A JavaScript module for performing various string manipulation tasks.
To install this module run command `npm i string-manipulator`

## Import Module
```javascript
const stringUtil = require('string-manipulator');
stringUtil.stringLength(str);
```

OR

```javascript
const { stringLength } = require('string-manipulator');
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