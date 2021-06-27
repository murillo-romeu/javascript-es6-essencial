// Objetos e Arrays são imutáveis
const students = [
  {
    name: 'John',
    grade: 10
  },
  {
    name: 'Apolo',
    grade: 3
  },
  {
    name: 'Mark',
    grade: 8
  }
];

function getApprovedStudents(studentsList) {
  return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));