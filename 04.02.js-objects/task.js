function Human(name, surname, age, isMale = true) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.isMale = isMale;

  this.getFullName = function () {
    return `${this.surname[0].toUpperCase()}.${this.name.toUpperCase()}`;
  };
}

function Employee(department, experienceYear, salary = 0) {
  this.department = department;
  this.experienceYear = experienceYear;
  this.salary = salary;

  this.generateID = function () {
    this.id = `${this.department.slice(0, 2)}${(Math.random() * 10000).toFixed(
      0
    )}`;
    return this.id;
  };
}

let khayal = new Human("Khayal", "Sadigov", 21);
Object.setPrototypeOf(khayal, new Employee("IT", 6, 1000));
let aysel = new Human("Aysel", "Javadzada", 18);
Object.setPrototypeOf(aysel, new Employee("IT", 3, 800));
let lala = new Human("Lala", "Ibadova", 22);
Object.setPrototypeOf(lala, new Employee("IT", 2, 500));
let sabuhi = new Human("Sabuhi", "Nurmammadov", 20);
Object.setPrototypeOf(sabuhi, new Employee("IT", 3, 800));

let employees = [khayal, aysel, lala, sabuhi];

console.log(khayal.getFullName());
khayal.generateID();
console.log(khayal.id);

function searchEmployee(employees) {
  let filteredEmployees = employees.filter((employee) => {
    if (
      employee.age >= 20 &&
      employee.age <= 25 &&
      employee.experienceYear > 5 &&
      (employee.department === "IT" || employee.department === "Design")
    ) {
      return {
        fulllName: employee.getFullName(),
        salary: employee.salary,
        department: employee.department,
        age: employee.age,
        id: employee.generateID(),
      };
    }
  });

  return filteredEmployees;
}

console.log(searchEmployee(employees));
