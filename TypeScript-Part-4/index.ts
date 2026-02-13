const dev = {
    name: "Remal",
    age: 23,
    isSkill: true,
}

console.log(dev.name)

// ==================================== //


const devs: {name: string, age: number, isSkill?: boolean} = {
    name: "Remal",
    age: 23,
    // isSkill: true,
}

console.log(devs.name)



// ========================================== //

const devs2: {readonly name: string, age: number, isSkill?: boolean} = {
    name: "Remal",
    age: 23,
    isSkill: true,
}

// Do not change when key property is readonly 



// ================================================= //

type user = {
    name: string,
    age: number,
    isSkill?: boolean,
}

const devs3: user = {
    name: "Remal",
    age: 23,
    isSkill: true,
}



// ======================================== //


// enum type 
enum skills {
    MERN = "MERN Stack",
    LARAVEL = "PHP With Laravel", 
    DJANGO = "Python With Django",
    IOS = "Flutter / Native"
}

const skill = skills.IOS;
console.log(skill)