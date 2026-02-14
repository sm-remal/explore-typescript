// problem - 1
const fullName: string = "Shah Mozzem Remal";
const age: number = 20;
const isDeveloper: boolean = true;

console.log(fullName, age, isDeveloper)

// problem - 2
function add(a: number, b: number): number {
    return a + b;
}
const result = add(3, 6)
console.log(result)

// problem - 3
const array: number[] = [1, 2, 3, 4, 5]
let sum: number = 0;
for(const main of array){
    sum = sum + main;
}
console.log(sum)

// problem - 4
type User = {
    name: string,
    age: number,
    isAdmin: boolean,
}
const user: User = {
    name: "Shah Mozzem Remal",
    age: 23,
    isAdmin: true,
}

console.log(user.name)

// ------ Interface ------ //
interface Person  {
    name: string,
    age: number,
    isAdmin: boolean,
}

const person: Person = {
    name: "Shah Mozzem Remal",
    age: 23,
    isAdmin: true
}
console.log(person.isAdmin)

