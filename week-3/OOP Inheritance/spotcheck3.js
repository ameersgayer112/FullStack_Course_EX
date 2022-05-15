class Person{
    constructor(name,startyear){
        this.name = name
        this,startyear = startyear
    }
    addCourse(){}
}

class Teacher extends Person{
    constructor(name,startyear,salary){
        super(name,startyear)
        this.salary = salary
        this.courses = {} 
    }

    addCourse(name){
        if(this.courses[name]){
            return this.courses[name]++
        }
        this.courses[name] = 1  
    }

}

const t1 = new Teacher("Cassandra", 2002, 40000)
t1.addCourse("Algebra II")
t1.addCourse("Algebra II")
t1.addCourse("Trigonometry")
console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}