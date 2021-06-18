type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//this
// interface ElevatedEmployee extends Employee, Admin {} - for using this, Employee and Admin should also be Interfaces
// or
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Jon',
  startDate: new Date('2021-05-10'),
  privileges: ['Admin Access', 'Create Server'],
};

// intersection types
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

console.log('It works!');
