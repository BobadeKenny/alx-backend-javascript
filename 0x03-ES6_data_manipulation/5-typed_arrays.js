export default function createInt8TypedArray(length, position, value) {
  const mapping = new Int8Array(length);
  if (position < length) {
    mapping[position] = value;
  } else {
    throw Error('Position outside range');
  }
  return mapping;
}
