function move(arr, index, shift) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (index > shift) {
      if (i == shift) newArr.push(arr[index]);
      if (i != index) newArr.push(arr[i]);
    } else {
      if (i != index) newArr.push(arr[i]);
      if (i == shift) newArr.push(arr[index]);
    }
  }
  return newArr;
}

console.log(move([10, 20, 30, 40, 50], 3, 2));
// [10, 30, 20, 40, 50];


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
      this.id = `${this.department.slice(0, 2)}${(
        Math.random() * 10000
      ).toFixed(0)}`;
      return this.id;
    };
  }

  let orkhan = new Human("Orkhan", "Karimov", 21);
  Object.setPrototypeOf(orkhan, new Employee("IT", 6, 1000));
  let murad = new Human("Murad", "Huseynli", 22);
  Object.setPrototypeOf(murad, new Employee("IT", 2, 500));
  let elvin = new Human("Elvin", "Meherremli", 20);
  Object.setPrototypeOf(elvin, new Employee("IT", 3, 800));
  let fidan = new Human("Fidan", "Nazirova", 18);
  Object.setPrototypeOf(fidan, new Employee("IT", 1, 300));
  let cavid = new Human("Cavid", "Xanaxmedov", 21);
  Object.setPrototypeOf(cavid, new Employee("IT", 4, 900));

  let employees = [orkhan, cavid, elvin, murad, fidan];

  console.log(orkhan.getFullName());
  orkhan.generateID();
  console.log(orkhan.id);

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
