// Problem - 1 
const addNumbers = (a: number, b: number): number => {
    return a + b;
}

const result = addNumbers(5, 6);

// console.log(typeof result);


// Problem - 2
const printId = (id: number | string): number | string => {
    if (typeof id === "number") {
        return "Your id is a number";
    } else {
        return "Your id is a string";
    }
}

const printIdResult = printId(12)

// console.log(printIdResult)


// Problem - 3
type User = {
    id: number,
    name: string,
    email: string,
    isAdmin: boolean,
}

const user: User = {
    id: 102,
    name: "Shah Mozzem Remal",
    email: "remal.mozzem@gmail.com",
    isAdmin: false,
}

user.isAdmin = true;

// console.log(typeof user.id, user.isAdmin);


// Problem - 4
type Product = {
    id: number,
    name: string,
    price: number,
    description: string,
}

const product: Product = {
    id: 1001,
    name: "Laptop",
    price: 120000,
    description: "",
}

const printProduct = (product: Product) => {
    if (product.description.length === 0) {
        return "There is no Description"
    } else {
        return product.description;
    }
}

const output = printProduct(product);

// console.log(output)


// Problem - 5
type Student = {
    id: number,
    name: string,
    marks: number,
}

const students: Student[] = [
    { id: 101, name: "Shakib", marks: 95 },
    { id: 102, name: "Tamim", marks: 92 },
    { id: 103, name: "Miraz", marks: 88 },
    { id: 104, name: "Mustafiz", marks: 91 },
    { id: 105, name: "Mash", marks: 97 },
]

const maxNumber = (students: Student[]): number => {
    const max = Math.max(...students.map(s => s.marks))
    return max
}

// console.log(maxNumber(students)) 


// Problem - 6
type Status = "success" | "error" | "loading";

// Function
function handleStatus(status: Status): string {
  if (status === "success") {
    return "Operation completed successfully!";
  } else if (status === "error") {
    return "Something went wrong!";
  } else if (status === "loading") {
    return "Please wait, loading...";
  } else {
    return "Unknown status";
  }
}

console.log(handleStatus("success"));
console.log(handleStatus("error"));
console.log(handleStatus("loading"));