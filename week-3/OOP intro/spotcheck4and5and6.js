class Vehicle {
    static carsSold = 3
    constructor(x,y,speed,fuel){
        this.x = x
        this.y = y
        this.speed = speed
        this._fuel=fuel
        
    }
    getInfo(){
        console.log("Cars are great")
    }

    get fuel()
    {
        return this._fuel
    }

    set fuel(amount)
    {
        if(amount < 0 || amount > 150)
        {
            return console.log("fuel cannot be less than 0, or greater than 150")
        }
        this._fuel=amount
    }

    static calculateMoney()
    {
        console.log("Earn " + 30000 * Vehicle.carsSold + "$")

    }
}



const mazda = new Vehicle(2,2,220)
mazda.getInfo()
Vehicle.calculateMoney()
mazda.fuel = 190
console.log(mazda.fuel)