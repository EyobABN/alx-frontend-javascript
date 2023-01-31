export default function getStudentsByLocation(students) {
  if (!(students instanceof Array)) return [];
  return students.filter((student) => student.location === 'San Francisco');
}
