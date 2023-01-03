export default function getListStudentIds(listStudents) {
  const mapping = [];
  if (Array.isArray(listStudents)) {
    return listStudents.map((student) => student.id);
  }
  return mapping;
}
