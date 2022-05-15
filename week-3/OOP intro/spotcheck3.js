class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children = []
    }

    giveBirth(name)
    {
        this.children.push(name)
    }
}

const cat = new Animal("dolly",4)


cat.giveBirth("Dolly")
console.log(cat.children) 


