// Process 1
let firstName = "Shah Mozzem Remal";
let age = 23;
let skill = "MERN Stack Developer";
let isSenior = false;

// firstName = 90;   // Wrong
// firstName = "Remal"  // Right

console.log(firstName, age, skill, isSenior)


// ========================================== //

// Process 2 
let price: number = 100;
let color: string = "White";
let isNew: boolean = true;

console.log(price, color, isNew);


// ======================================== //

// Process 3 
let dev: string;
dev = "MERN Stack Developer";
// dev = 20;  // Wrong 

let mobilePrice: any; // Not used to good
mobilePrice = "100";
mobilePrice = 200;

let laptopPrice: number | string; // Can use
laptopPrice = 1000;
laptopPrice = "2000";