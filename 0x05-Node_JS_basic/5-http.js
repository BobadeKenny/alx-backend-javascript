const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students');
    // Attempt to read the file asynchronously
    console.log(process.argv)
    // const filename = process.argv[1];
    const file = fs.readFile("database.csv", 'utf-8');

    // Split the file by new line characters and filter out any empty lines
    const lines = file.split('\n').filter((line) => line.trim() !== '');

    // Get the number of students by counting the number of non-empty lines
    const numberOfStudents = lines.length - 1;

    // Log the total number of students
    res.write(`Number of students: ${numberOfStudents}`);

    // Create an object to keep track of the number of students in each field
    const studentsByField = {};

    // Loop through each line of the file and extract the field and name of each student
    for (let i = 1; i < lines.length; i += 1) {
      const name = lines[i].split(',')[0];
      const field = lines[i].split(',')[3];
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(name);
    }

    // Loop through each field and log the number of students in that field, along with their names
    for (const [field, students] of Object.entries(studentsByField)) {
      res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
