const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    fs.readFile(process.argv[2], 'utf-8')
      .then((data) => {
        res.write('This is the list of our students\n');
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const numberOfStudents = lines.length - 1;
        res.write(`Number of students: ${numberOfStudents}\n`);
        const studentsByField = {};
        for (let i = 1; i < lines.length; i += 1) {
          const name = lines[i].split(',')[0];
          const field = lines[i].split(',')[3];
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(name);
        }
        for (const [field, students] of Object.entries(studentsByField)) {
          res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
        }
        res.end();
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error.message}`);
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
