/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (students.constructor !== Array) {
      throw new TypeError('Students must be an array');
    }
    for (const student of students) {
      if (typeof (student) !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // name setter
  set name(newName) {
    if (typeof (newName) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // length setter
  set length(newLength) {
    if (typeof (newLength) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // students setter
  set students(newStudents) {
    if (newStudents.constructor !== Array) {
      throw new TypeError('Students must be an array');
    }
    for (const student of newStudents) {
      if (typeof (student) !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._students = newStudents;
  }
}
