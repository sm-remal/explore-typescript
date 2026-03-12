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
for (const main of array) {
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

// problem 5
interface Person {
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

// problem 6
function addNumbers(num1: number, num2: number): number {
    const result = num1 + num2;
    return result;
}

console.log(addNumbers(5, 6))


// problem 7
interface User5 {
    id: number,
    name: string,
    email: string,
    isAdmin: boolean,
};

const user5 = {
    id: 102,
    name: "Siam",
    email: "siam@gmail.com",
    isAdmin: true,
}

user5.email = "remal@gmail.com";

console.log(user5.email);


// problem 8  (Generic Type)
function getFirstElement<T>(array: T[]): T {
    return array[0];
}

console.log(getFirstElement([10, 20, 30]))

// problem 9
const sumArrayNumbers = (array: number[]): number => {
    let sumOfArray = 0;
    for (const arr of array) {
        sumOfArray = sumOfArray + arr;
    }
    return sumOfArray
}

console.log(sumArrayNumbers([1, 2, 3, 4]))


// problem 10

const getFirstElementFruits = (fruits: string[]): string => {
    return fruits[0];
}

console.log(getFirstElementFruits(["apple", "banana", "mango"]))


// problem 11
interface UserProperties {
    id: number,
    name: string,
    email: string,
}

const userProperties: UserProperties = {
    id: 101,
    name: "Shah Mozzem Remal",
    email: "shahmozzemremal@gmail.com",
}

console.log(`${userProperties.name} (${userProperties.email})`)


// problem 12
function findLargest(array: number[]): number {
    const result = Math.max(...array)
    return result
}
console.log(findLargest([5, 8, 2, 11, 3]))

// problem 13 
const makePair = <S, T>(key: S, value: T): { key: S, value: T } => {
    return {
        key: key,
        value: value
    }
}

console.log(makePair("age", 23))


// problem 14
const reverseArray = <N>(value: N[]): N[] => {
    return value.reverse();
}

console.log(reverseArray([1, 2, 3, 4]))


// Problem 15
const addNumber = (num1: number, num2: number): number => {
    return num1 + num2;
}

console.log(addNumber(5, 6));


// Problem 16
