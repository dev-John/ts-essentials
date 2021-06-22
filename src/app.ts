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

// function overloads
function addd(a: number, b: number): number;
function addd(a: string, b: string): string;
function addd(a: string, b: number): string;
function addd(a: number, b: string): string;
function addd(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const addedValue = addd('Max', 'Schwarz');
addedValue.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);

const input = null;

// const storedData = input || 'DEFAULT';
const storedData = input ?? 'DEFAULT'; // ?? means only null or undefined, not ''

console.log('storedData', storedData);

type UnknownEmployee = Employee | Admin;

function printeEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date ' + emp.startDate);
  }
}

printeEmployeeInformation(e1);

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a Truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 30 });
moveAnimal({ type: 'horse', runningSpeed: 50 });

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById(
  'user-input'
) as HTMLInputElement;

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}

interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a capital character!' }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
};
