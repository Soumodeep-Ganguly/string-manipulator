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

module.exports.matchRegex = (str, regex) => str.match(regex);

module.exports.replaceRegex = (str, regex, replacement) => str.replace(regex, replacement);

module.exports.encodeURIComponent = (str) => encodeURIComponent(str);

module.exports.decodeURIComponent = (encodedStr) => decodeURIComponent(encodedStr);

module.exports.getPathFromURL = (url) => new URL(url).pathname;

module.exports.compareStrings = (str1, str2) => str1.localeCompare(str2);

module.exports.equalsIgnoreCase = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

module.exports.formatString = (format, ...values) => format.replace(/\{(\d+)\}/g, (_, index) => values[index]);

module.exports.getUnicodeCodePointAt = (str, index) => str.codePointAt(index);

module.exports.convertToUnicode = (str) => [...str].map((char) => `U+${char.codePointAt(0).toString(16)}`).join(' ');

module.exports.truncateText = (str, maxLength, ellipsis = '...') => str.length > maxLength ? str.slice(0, maxLength) + ellipsis : str;

module.exports.normalizeWhitespace = (str) => str.replace(/\s+/g, ' ');

module.exports.collapseWhitespace = (str) => str.replace(/\s/g, '');

module.exports.getCharacterType = (char) => {
    if (/[A-Z]/.test(char)) return 'uppercase';
    if (/[a-z]/.test(char)) return 'lowercase';
    if (/\d/.test(char)) return 'digit';
    return 'other';
}

module.exports.getCharacterCode = (char) => char.codePointAt(0);

module.exports.padWithContent = (str, padContent, totalLength) => str.padStart((totalLength + str.length) / 2, padContent).padEnd(totalLength, padContent);

module.exports.convertToCamelCase = (str) => str.replace(/[-_]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''));

module.exports.convertToSnakeCase = (str) => str.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/[-\s]/g, '_').toLowerCase();

module.exports.wrapText = (text, maxWidth) => {
    const words = text.split(' ');
    let line = '';
    const lines = [];

    words.forEach((word) => {
      if (line.length + word.length <= maxWidth) {
        line += (line === '' ? '' : ' ') + word;
      } else {
        lines.push(line);
        line = word;
      }
    });

    if (line !== '') {
      lines.push(line);
    }

    return lines.join('\n');
}