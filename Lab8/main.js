// Base Employee class
class Employee {
  constructor(firstName, lastName, salary, experience) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.experience = experience;
  }
}
  
// Developer class
class Developer extends Employee {
  constructor(firstName, lastName, salary, experience) {
    super(firstName, lastName, salary, experience);
  }
}
  
// Designer class
class Designer extends Employee {
  constructor(firstName, lastName, salary, experience, efficiencyCoefficient) {
    super(firstName, lastName, salary, experience);
    this.efficiencyCoefficient = efficiencyCoefficient;
  }
}
  
// Manager class
class Manager extends Employee {
  constructor(firstName, lastName, salary, experience, employees) {
    super(firstName, lastName, salary, experience);
    this.employees = employees;
  }

  // Method to add an employee to the manager's team
  addEmployee(employee) {
    this.employees.push(employee);
  }
}
  
// Usage example:
const dev1 = new Developer('John', 'Doe', 60000, 3);
const designer1 = new Designer('Jane', 'Doe', 55000, 2, 0.9);
const manager1 = new Manager('Barry', 'Allen', 70000, 5, [dev1, designer1]);

class Department {
  constructor() {
    this.managers = [];
  }
  
  // Add a manager to the department
  addManager(manager) {
    this.managers.push(manager);
  }
  
  // Give salary to all employees in the department
  giveSalary() {
    for (const manager of this.managers) {
      console.log(`${manager.firstName} ${manager.lastName} received ${manager.salary} shekels`);
      for (const employee of manager.employees) {
        console.log(`${employee.firstName} ${employee.lastName} received ${employee.salary} shekels`);
      }
    }
  }
}
  
// Usage example:
const department = new Department();
  
const manager2 = new Manager('Oliver', 'Queen', 80000, 6, []);
const dev2 = new Developer('Sara', 'Lance', 65000, 4);
  
manager2.addEmployee(dev2);
department.addManager(manager1);
department.addManager(manager2);
department.giveSalary();

