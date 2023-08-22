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

module.exports.uuid = () => {
  const randomHex = () => Math.floor(Math.random() * 16).toString(16); // Helper function to generate a random hexadecimal digit

  const segments = [8, 4, 6, 4, 10]; // An array defining the number of hexadecimal digits in each UUID segment
  
  // Using 'map' to create an array of UUID parts
  const uuidParts = segments.map(segment => { 
      let part = '';
      for (let i = 0; i < segment; i++) {
          part += randomHex();
      }
      return part; // Adding the generated part to the UUID parts array
  });

  // Joining the UUID parts with dashes to create the final UUID
  return `${uuidParts[0]}-${uuidParts[1]}-${uuidParts[2]}-${uuidParts[3]}-${uuidParts[4]}`;
}

module.exports.uuidNumber = () => {
  // Get current timestamp as milliseconds since Unix epoch
  const timestamp = new Date().getTime();

  // Generate a random component
  const randomComponent = Math.floor(Math.random() * 0x1000000000000);

  // Construct the UUID in the "8-4-4-4-12" format
  const uuid = `${(timestamp & 0xffffffff) >>> 0}-${((timestamp >> 32) & 0xffff) >>> 0}-1${((timestamp >> 48) & 0xfff) >>> 0}-${(randomComponent & 0xffff) >>> 0}-${(randomComponent >> 32) >>> 0}`;

  return uuid;
}

module.exports.uuidDateTime = () => {
  // Get current timestamp in 100-nanosecond intervals since October 15, 1582
  const timestamp = (new Date().getTime() * 10000) + 122192928000000000;

  // Generate a random 12-digit timestamp-based identifier
  const timestampIdentifier = Math.floor(Math.random() * 0x10000000000);

  // Format timestamp and timestamp identifier into UUID format
  const uuid = `${timestamp.toString(16)}-${timestampIdentifier.toString(16)}-1${timestamp.toString(16).substr(1, 3)}-9234-0123456789ab`;

  return uuid;
}