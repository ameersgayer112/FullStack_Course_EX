class Human {
    constructor(name,age,isFrindly){
        this.name = name;
        this.age = age;
        this.isFrindly = isFrindly;
    }
}

const person = new Human('Ameer',25,true)
console.log(`Human Name : ${person.name}, and his ages ${person.age} years old, and ${person.isFrindly ? 'friendly' : 'not friendly'}`)