module.exports.stringLength = (str) => str.length;

module.exports.convertToUpperCase = (str) => str.toUpperCase();

module.exports.convertToLowerCase = (str) => str.toLowerCase();

module.exports.capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

module.exports.convertToTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

module.exports.getSubstring = (str, start, end) => str.substring(start, end);

module.exports.trimWhitespace = (str) => str.trim();

module.exports.trimLeft = (str) => str.replace(/^\s+/, '');

module.exports.trimRight = (str) => str.replace(/\s+$/, '');

module.exports.replaceCharacter = (str, oldChar, newChar) => str.split(oldChar).join(newChar);

module.exports.removeCharacter = (str, charToRemove) => str.split(charToRemove).join('');

module.exports.splitString = (str, delimiter) => str.split(delimiter);

module.exports.joinStrings = (array, delimiter) => array.join(delimiter);

module.exports.firstOccurrence = (str, substring) => str.indexOf(substring);

module.exports.findAllOccurrences = (str, substring) => {
    const indices = [];
    let index = str.indexOf(substring);
    while (index !== -1) {
        indices.push(index);
        index = str.indexOf(substring, index + 1);
    }
    return indices;
}

module.exports.replaceSubstring = (str, oldSubstring, newSubstring) => str.split(oldSubstring).join(newSubstring);

module.exports.replaceWhitespaceWith = (str, newCharacter) => str.replaceAll(/\s/g, newCharacter);

module.exports.padLeft = (str, padChar, totalLength) => str.padStart(totalLength, padChar);

module.exports.padRight = (str, padChar, totalLength) => str.padEnd(totalLength, padChar);

module.exports.reverseString = (str) => str.split('').reverse().join('');

module.exports.isPalindrome = (str) => {
    let reversedStr = str.split('').reverse().join('')
    return str === reversedStr
}

module.exports.isNumeric = (str) => /^[\d.]+$/.test(str);

module.exports.encodeBase64 = (str) => btoa(str);

module.exports.decodeBase64 = (str) => atob(str);

console.log('apple,orange,banana'.split(','))