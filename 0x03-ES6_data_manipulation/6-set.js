export default function setFromArray(array) {
  const mapping = new Set();
  if (Array.isArray(array)) {
    array.forEach((element) => mapping.add(element));
  }
  return mapping;
}
