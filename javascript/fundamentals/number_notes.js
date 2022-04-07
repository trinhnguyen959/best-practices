const isNumberEqual = 23 === 23.0; // true
isNumberEqual;

const binaryNumber = 0.1 + 0.2;
binaryNumber;

// Conversion
const logNumber = Number('23');
logNumber;
const conversionNumber = + '23';
conversionNumber;

/** Parsing
 * Parse với những string có phần đầu là số thì được, còn lại thì không
 * Với trường hợp có số 0 ở đầu thì vẫn bt và bỏ qua số 0
 * parseNumberWithTrigger => ép kiểu truyền thống không thành công
 */
const parseNumberFromPx = parseInt('300px');
const parseNumberFromOtherwise = parseInt('e10x');
const parseNumberWithTrigger = +'300px';
parseNumberFromPx;
parseNumberFromOtherwise;
parseNumberWithTrigger;

// max
Math.max();
