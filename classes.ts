abstract class Department {
  // private id: string;
  // private name: string;
  static fiscalYear = 2021; // static props doesn't require instantiating (new) to be used
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    console.log(Department.fiscalYear); // static items cannot be accessed with this keyword
  }

  static createEmployee(name: string) {
    // static functions doesn't require instantiating (new) to be used
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = 'sdsds';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport!: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('D2', []);
    return this.instance;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      console.log('Here');
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  describe(this: Department): void {
    throw new Error('Method not implemented.');
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee = Department.createEmployee('Dave');

console.log(employee, Department.fiscalYear);

const it = new ITDepartment('D21', ['Max']);

it.addEmployee('Dev');
it.addEmployee('John');

// it.name = 'New name';

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('D2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2); // they are the same, singleton pattern...

accounting.mostRecentReport = 'Year ending report';
accounting.addReport('Something went wrong');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printReports();
accounting.printEmployeeInformation();
