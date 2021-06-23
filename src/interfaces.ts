// type AddFn = (a: number, b: number) => number;
// function type
interface AddFn {
  (a: number, b: number): number;
}

// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Pers implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!!');
    }
  }
}

const user1 = new Pers();

user1.greet('Hi there - I am');
console.log(user1);
