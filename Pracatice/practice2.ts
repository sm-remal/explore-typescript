// problem 1
function add(a: number, b: number): number {
    return a + b;
}

// console.log(add(5,6));

//problem 2
function printId(id: number | string): void {
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
interface User2 {
    id: number,
    name: string,
    email: string,
    phone: string,
}

const user2: User2 = {
    id: 101,
    name: "Asif Hasan",
    email: "asifhasan@gmail.com",
    phone: "01234567894"
}

// console.log(user2.phone)


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

// console.log(getBookInfo(book1))


//problem 6
type Users = {
    id: number,
    name: string,
    role: "admin" | "user",
}

const users: Users[] = [
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


// problem 7
type User3 = {
    id: number
    name: string
    email: string
    role: "admin" | "user"
    isActive: boolean
}

const users3: User3[] = [
    {
        id: 1,
        name: "Shuvo",
        email: "shuvo@gmail.com",
        role: "admin",
        isActive: true,
    },
    {
        id: 2,
        name: "Siam",
        email: "siam@gmail.com",
        role: "user",
        isActive: false,
    },
    {
        id: 3,
        name: "Rafi",
        email: "rafi@gmail.com",
        role: "user",
        isActive: true,
    },
]


const filterByProperty = (users3: User3[], name: string): User3[] => {
    return users3.filter(u => u.name.toLocaleLowerCase() === name.toLocaleLowerCase());
}
// console.log(filterByProperty(users3, "siam"))



// problem 8
type Products = {
    id: number,
    title: string,
    price: number,
    category: "electronics" | "clothing" | "food",
    inStock: boolean,
    rating: number,
}

const products: Products[] = [
    {
        id: 1,
        title: "iPhone 15",
        price: 1200,
        category: "electronics",
        inStock: true,
        rating: 4.8,
    },
    {
        id: 2,
        title: "T-Shirt",
        price: 25,
        category: "clothing",
        inStock: true,
        rating: 4.2,
    },
    {
        id: 3,
        title: "Chocolate Box",
        price: 15,
        category: "food",
        inStock: false,
        rating: 4.5,
    },
    {
        id: 4,
        title: "Laptop",
        price: 950,
        category: "electronics",
        inStock: true,
        rating: 4.7,
    },
    {
        id: 5,
        title: "Jeans",
        price: 60,
        category: "clothing",
        inStock: false,
        rating: 4.1,
    },
]

function genericFilter(items: Products[], title: string): string[] {
    return items.filter(item => item.title.toLocaleLowerCase() === title.toLocaleLowerCase()).map(u => u.title);
}

// console.log(genericFilter(products, "jeans"))


// problem 9
type Watch = {
    id: number,
    brand: string
    model: string
    price: number
    rating: number
}

const watch: Watch[] = [
    {
    id: 1,
    brand: "Rolex",
    model: "Submariner",
    price: 12000,
    rating: 4.9,
  },
  {
    id: 2,
    brand: "Omega",
    model: "Seamaster",
    price: 8000,
    rating: 4.7,
  },
  {
    id: 3,
    brand: "Casio",
    model: "G-Shock",
    price: 200,
    rating: 4.3,
  },
  {
    id: 4,
    brand: "Tag Heuer",
    model: "Carrera",
    price: 5500,
    rating: 4.5,
  },
  {
    id: 5,
    brand: "Tissot",
    model: "PRX",
    price: 650,
    rating: 4.2,
  },
]

const sortByWatch = (array: Watch[], price: number): Watch[] => {
    return array.filter(arr => arr.price === price);
}

console.log(sortByWatch(watch, 650))