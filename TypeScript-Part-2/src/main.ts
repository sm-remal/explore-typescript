const ageCal = (name: string, age: number): string => {
    return `I am ${name}. And I am ${age} years old`
}

ageCal("Shah Mozzem Remal", 23);


// ====================================================== // 

const myFunction = (name: string = "Bangladesh", amount: number = 140000): string => {
    return `The name of our country is ${name} about ${amount} people live here.`
}

myFunction();


// ===================================================== //

const yourFunction = (name: string = "Bangladesh", amount: number = 140000): void => {
    console.log(`The name of our country is ${name} about ${amount} people live here.`);
}

yourFunction();


// =================================================== //

const yourFunction2 = (name: string = "Bangladesh", amount: number = 140000): never => {
    throw new Error();
}

yourFunction2();