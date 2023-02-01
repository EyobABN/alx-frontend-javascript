export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) throw new TypeError('first argument must be a Set');
  if (typeof startString !== 'string') throw new TypeError('first argument must be a string');
  if (!startString) return '';
  let str = '';
  let first = 0;
  for (const element of set) {
    if (element.startsWith(startString)) {
      if (!first) {
        first = 1;
      } else {
        str += '-';
      }
      str += element.slice(startString.length);
    }
  }
  return str;
}
