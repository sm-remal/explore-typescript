// type of narrowing 

const info = ( value: number | string) => {
    if( typeof value === "string"){
        return value.toUpperCase();
    }
    return value + 10;
}



// ========================================= //

// ---------- OPP ---------- //

class Student {
    public name: string;
    public age: number;
    public skill: boolean;

    constructor(name: string, age: number, skill: boolean){
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
}

const student = new Student("Remal", 23, true);
console.log(student);




// ============= Interface =============== //

