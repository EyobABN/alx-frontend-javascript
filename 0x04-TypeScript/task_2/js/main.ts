interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  return typeof salary == 'number'  && salary < 500 ? new Teacher() : new Director();
}

function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director ? true : false;
}

function executeWork(employee: Director | Teacher): void {
  console.log(isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks());
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  return todayClass == 'Math' ? 'Teaching Math' : 'Teaching History';
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
