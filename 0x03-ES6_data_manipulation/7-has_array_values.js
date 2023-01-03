export default function hasValuesFromArray(set, array) {
  const mapping = false;
  if (Array.isArray(array) && set instanceof Set) {
    return array.every((element) => set.has(element));
  }
  return mapping;
}
