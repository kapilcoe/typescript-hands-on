var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, 'author'],
    auth: Role.ADMIN
};
person.role[1] = '10';
var favActivities; // array
favActivities = ['Sports', '1'];
console.log(person.auth);
console.log(person.name);
