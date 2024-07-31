enum Role { ADMIN = 5, READ_ONLY = 2, AUTHOR =7 };


const person : {
    name: string;
    age: number;
    hobbies: string[];
    role:  [number, string]; 
    auth: Role// example of tuple
 } = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, 'author'],
  auth: Role.ADMIN
};



person.role[1] = '10';
let favActivities: string[]; // array
favActivities = ['Sports', '1'];


console.log(person.auth)

console.log(person.name);
