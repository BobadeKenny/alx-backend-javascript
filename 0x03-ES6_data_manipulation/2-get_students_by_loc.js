export default function getStudentsByLocation(listStudents, city) {
    const mapping = [];
    if (Array.isArray(listStudents)){
        return listStudents.filter((student) => student.location === city);
    }
    return mapping;
}