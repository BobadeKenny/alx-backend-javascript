const fs = require('fs');

function countStudents(path) {
  try {
    // Attempt to read the file synchronously
    const file = fs.readFileSync(path, 'utf-8');

    // Split the file by new line characters and filter out any empty lines
    const lines = file.split('\n').filter((line) => line.trim() !== '');

    // Get the number of students by counting the number of non-empty lines
    const numberOfStudents = lines.length - 1;

    // Log the total number of students
    console.log(`Number of students: ${numberOfStudents}`);

    // Create an object to keep track of the number of students in each field
    const studentsByField = {};

    // Loop through each line of the file and extract the field and name of each student
    for (let i = 1; i < lines.length; i += 1) {
      const firstname = lines[i].split(',')[0];
      const field = lines[i].split(',')[3];
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    }

    // Loop through each field and log the number of students in that field, along with their names
    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
