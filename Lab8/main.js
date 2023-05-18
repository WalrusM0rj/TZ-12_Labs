// Base Employee class
class Employee {
  constructor(firstName, lastName, salary, experience) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.experience = experience;
  }

  // Calculate countedSalary for Employee
  countedSalary() {
    let baseSalary = this.salary;

    if (this.experience > 5) {
      baseSalary = baseSalary * 1.2 + 500;
    } else if (this.experience > 2) {
      baseSalary = baseSalary + 200;
    }

    return baseSalary;
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
  // Calculate countedSalary for Designer
  countedSalary() {
    const baseSalary = super.countedSalary();
    return baseSalary * this.efficiencyCoefficient;
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

  // Calculate countedSalary for Manager
  countedSalary() {
    let baseSalary = super.countedSalary();
    const teamSize = this.employees.length;
    const developerCount = this.employees.filter(
      (employee) => employee instanceof Developer
    ).length;

    if (teamSize > 10) {
      baseSalary += 300;
    } else if (teamSize > 5) {
      baseSalary += 200;
    }

    if (developerCount / teamSize > 0.5) {
      baseSalary *= 1.1;
    }

    return baseSalary;
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
      const managerCountedSalary = manager.countedSalary();
      console.log(`${manager.firstName} ${manager.lastName} received ${managerCountedSalary} shekels`);
      
      for (const employee of manager.employees) {
        const employeeCountedSalary = employee.countedSalary();
        console.log(`${employee.firstName} ${employee.lastName} received ${employeeCountedSalary} shekels`);
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

























class Department {
  // ... constructor, addManager method

  
}