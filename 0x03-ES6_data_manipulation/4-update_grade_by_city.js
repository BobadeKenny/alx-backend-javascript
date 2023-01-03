export default function updateStudentGradeByCity(listStudents, city, newGrades) {
    const mapping = [];
    if (Array.isArray(listStudents)){
        listStudents.filter((student) => student.location === city).map((student) => {
            const grade = newGrades.filter((grade) => grade.studentId === student.id);
            if (grade.length === 0){
                student.grade = 'N/A';
            }
            else {
                student.grade = grade[0].grade;
            }
            mapping.push(student);
        });
    }
    return mapping;
}