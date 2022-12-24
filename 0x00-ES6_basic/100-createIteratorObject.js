export default function createIteratorObject(report) {
  const result = [];
  for (const item in report.allEmployees) {
    report.allEmployees[item].forEach((element) => {
      result.push(element);
    });
  }
  return result;
}
