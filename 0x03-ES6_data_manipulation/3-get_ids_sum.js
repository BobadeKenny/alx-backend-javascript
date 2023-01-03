export default function getStudentIdsSum(listStudents) {
  const mapping = [];
  if (Array.isArray(listStudents)) {
    return listStudents.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  }
  return mapping;
}
