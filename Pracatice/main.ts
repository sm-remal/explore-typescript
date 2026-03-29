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
function findMaxValue(array: number[]): number {
    const result = Math.max(...array);
    return result;
}

console.log(findMaxValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// Problem 17
interface User7 {
    id: number,
    name: string,
    email: string,
    isAdmin: boolean,
}

const user7: User7 = {
    id: 106,
    name: "Remal",
    email: "remal@gmail.com",
    isAdmin: true,
}

console.log(user7.name)


// Problem 18 
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}
const product: Product = {
    id: 1245,
    name: "Laptop",
    price: 78000,
}

console.log(product)


// Problem 19
function getFirstElementInArray<T>(array: T[]): T {
    return array[0];
}
console.log(getFirstElementInArray(["a", "b", "c"]))


// Problem 20

const orders = [
    { id: 1, name: "Mouse", price: 500, quantity: 2 },
    { id: 2, name: "Keyboard", price: 1500, quantity: 1 },
    { id: 3, name: "Monitor", price: 12000, quantity: 1 }
]

interface OrderItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

function calculateTotal(orderItems: OrderItem[]): number {

    let sum = 0;
    for (let item of orderItems) {
        sum = sum + (item.price * item.quantity);
    }
    return sum;
}

console.log(calculateTotal(orders))


// Problem 21
const getLength = (value: number | string): number => {
    if (value === "string") {
        return value.length;
    } else {
        return value.toString().length;
    }
}
console.log(typeof (getLength(5214)))


// Problem 22
const students = [
    { id: 1, name: "Rahim", marks: 55 },
    { id: 2, name: "Karim", marks: 32 },
    { id: 3, name: "Salma", marks: 78 },
    { id: 4, name: "Jamal", marks: 40 },
    { id: 5, name: "Nila", marks: 25 }
]

interface Student {
    id: number;
    name: string;
    marks: number;
}

function getPassedStudents(students: Student[]): Student[] {
    let newArray: Student[] = [];
    for (let student of students) {
        if (student.marks >= 40) {
            newArray.push(student);
        }
    }
    return newArray;
}

console.log(getPassedStudents(students))


// Problem 23
const profile1 = {
    name: "Rahim",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}

const profile2 = {
    name: "Karim"
}

const profile3 = {
    name: "Salma",
    address: {
        country: "Bangladesh"
    }
}

interface Profile {
    name: string
    address?: {
        city?: string
        country?: string
    }
}

function getCity(profile: Profile): string {
    if (profile.address?.city) {
        return profile.address?.city;
    } else {
        return "City not found"
    }
}

console.log(getCity(profile3))


// problem 24
function removeFirstElement<T>(array: T[]): T[] {
    return array.slice(1)
}

console.log(removeFirstElement([1, 2, 3, 4]))


// problem 25
const getLastElement = <T>(array: T[]): T | undefined => {
    return array [array.length - 1];
    
}

console.log(getLastElement([1, 2, 3]))
console.log(getLastElement(["a", "b", "c"]))


// problem 26
interface User8 {
    id: number;
    name: string;
    isActive: boolean;
}

// problem 27
interface User8 {
    id: number;
    name: string;
    isActive: boolean;
}

const users8: User8[] = [
    { id: 1, name: "Rahim", isActive: true },
    { id: 2, name: "Karim", isActive: false },
];

function getActiveUsers(users: User8[]): User8[] {
    const activeUsers: User8[] = [];

    for (let user of users) {
        if (user.isActive) {
            activeUsers.push(user);
        }
    }

    return activeUsers;
}

console.log(getActiveUsers(users8));


// problem 28
function getLength1<T extends { length: number }>(item: T): number {
  return item.length;
}

// String
const strLength = getLength1("Hello");
console.log("String Length:", strLength); 

// Array
const arrLength = getLength1([1, 2, 3, 4]);
console.log("Array Length:", arrLength); 

// Custom Object
const objLength = getLength1({ length: 10, name: "Test" });
console.log("Object Length:", objLength); 


// problem 29
function identity<T>(value: T): T {
  return value;
}

// Usage examples
const result1 = identity("Hello");
console.log(result1);

const result2 = identity(10);
console.log(result2);

const result3 = identity([1, 2, 3]);
console.log(result3); 


// problem 30
function getFirstElement1<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

// Usage examples
const result11 = getFirstElement1([1, 2, 3]);
console.log(result11); // 1

const result22 = getFirstElement1(["a", "b", "c"]);
console.log(result22); // "a"

const result33 = getFirstElement1([]);
console.log(result33); // undefined


// problem 31
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object
    ? DeepPartial<T[K]>
    : T[K];
};

// Example
interface Profile {
  name: string;
  address1: {
    city: string;
    zip: number;
  };
}

// Now everything is optional (even nested)
const userProfile: DeepPartial<Profile> = {
  address1: {
    city: "Dhaka"
  }
};

console.log(userProfile);


// problem 32
type AtLeastOne<T> = {
  [K in keyof T]: Pick<T, K> & Partial<T>
}[keyof T];

// Example
interface Contact {
  email?: string;
  phone?: string;
}

function sendNotification(contact: AtLeastOne<Contact>) {
  console.log("Sending to:", contact);
}

// Valid
sendNotification({ email: "test@gmail.com" });
sendNotification({ phone: "01700000000" });
sendNotification({ email: "a@gmail.com", phone: "01800000000" });

//  Error (none provided)
// sendNotification({});


// problem 33
type EventMap = {
  login: { userId: number };
  logout: { reason: string };
  message: { text: string };
};

class TypedEmitter<T extends Record<string, any>> {
  private listeners: {
    [K in keyof T]?: ((payload: T[K]) => void)[]
  } = {};

  on<K extends keyof T>(event: K, callback: (payload: T[K]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(callback);
  }

  emit<K extends keyof T>(event: K, payload: T[K]) {
    this.listeners[event]?.forEach(cb => cb(payload));
  }
}

// Usage
const emitter = new TypedEmitter<EventMap>();

emitter.on("login", (data) => {
  console.log("User logged in:", data.userId);
});

emitter.emit("login", { userId: 101 });

//  Error (wrong payload)
// emitter.emit("login", { wrong: "data" });


// problem 34
type ApiSuccess<T> = {
  status: "success";
  data: T;
};

type ApiError = {
  status: "error";
  error: string;
};

type ApiResponse<T> = ApiSuccess<T> | ApiError;

// Function to handle response
function handleResponse<T>(response: ApiResponse<T>) {
  if (response.status === "success") {
    console.log("Data:", response.data);
  } else {
    console.log("Error:", response.error);
  }
}

// Usage
handleResponse({
  status: "success",
  data: { name: "Remal", age: 20 }
});

handleResponse({
  status: "error",
  error: "Something went wrong"
});

// Invalid (TypeScript will catch this)
// handleResponse({
//   status: "success",
//   error: "Wrong"
// });


// problem 35
function mapObject<T extends Record<string, any>, R>(
  obj: T,
  fn: (value: T[keyof T], key: keyof T) => R
): { [K in keyof T]: R } {
  const result = {} as { [K in keyof T]: R };

  for (const key in obj) {
    result[key] = fn(obj[key], key);
  }

  return result;
}

// Example
const data = {
  a: 1,
  b: 2,
  c: 3
};
const mapped = mapObject(data, (value, key) => {
  return `${key}: ${value * 2}`;
});

console.log(mapped);
// Output: { a: "a: 2", b: "b: 4", c: "c: 6" }