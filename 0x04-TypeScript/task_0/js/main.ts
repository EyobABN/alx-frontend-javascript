interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let Eyob: Student = {
  firstName: "Eyob",
  lastName: "Belay",
  age: 26,
  location: "Bahir Dar"
};

let Bereket: Student = {
  firstName: "Bereket",
  lastName: "Minychl",
  age: 18,
  location: "Bahir Dar"
};

let studentsList: Student[] = [Eyob, Bereket];

const table = document.createElement('table');
table.style.border = '1px solid black';

const headerRow = table.insertRow();
const nameHeaderCell = headerRow.insertCell();
nameHeaderCell.innerHTML = 'First Name';
const locationHeaderCell = headerRow.insertCell();
locationHeaderCell.innerHTML = 'Location';

for (let i = 0; i < studentsList.length; i++) {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  nameCell.innerHTML = studentsList[i].firstName;
  nameCell.style.border = '1px solid gray';
  const locationCell = row.insertCell();
  locationCell.innerHTML = studentsList[i].location;
  locationCell.style.border = '1px solid gray';
}

document.body.appendChild(table);
