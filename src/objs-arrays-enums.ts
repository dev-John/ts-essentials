// const pers: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // this identifies a tuple type
// } = {
//   name: "Jonatas",
//   age: 21,
//   hobbies: ["Sports", "Cooking"],
//   role: [1, "Owner"],
// };

enum Role {
  ADMIN, // defaults set it to 0
  READ_ONLY = 3, // I can set a value if I want
  AUTHOR = 'AUTHOR', // the following item increases
}

const pers = {
  name: 'Jonatas',
  age: 21,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

console.log(pers.name);

for (const hobby of pers.hobbies) {
  console.log(hobby.toUpperCase());
}
