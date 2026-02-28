// problem 1
function add(a: number, b: number): number {
  return a + b;
}

// console.log(add(5,6));

//problem 2
function printId(id: number | string): void{
  console.log(id);
}
// printId("512");

// problem 3
interface Book {
    id: number,
    title: string,
    author: string,
    price: number,
    isStock: boolean,
}

const book: Book = {
    id: 125,
    title: "Harry Pother",
    author: "Some-One",
    price: 525,
    isStock: true,
}

// console.log(book.title)


// problem 4
interface User {
    id: number,
    name: string,
    email: string,
    phone: string,
}

const user: User = {
    id: 101,
    name: "Asif Hasan",
    email: "asifhasan@gmail.com",
    phone: "01234567894"
}

console.log(user.phone)


// problem 5
interface Book {
    id: number,
    title: string,
    author: string,
    price: number,
    isStock: boolean,
}

const book1: Book = {
    id: 321,
    title: "The Investor",
    author: "Someone",
    price: 550,
    isStock: true,

}

function getBookInfo(book: Book): string {
   return `${book.title} by ${book.author}`
}

console.log(getBookInfo(book1))


//problem 6
type Users = {
    id: number,
    name: string,
    role: "admin" | "user",
}

const users: Users [] = [
    {
        id: 101,
        name: "Shuvo",
        role: "admin",
    },
    {
        id: 102,
        name: "Siam",
        role: "user",
    }
]