
class UniqueArray{
    constructor(){
        this.uniqueArray = []
        this.uniqueArrayLength = 0
    }

    add(item)
    {
        if(!this.exists(item))
        {
            this.uniqueArray.push(item)
            this.uniqueArrayLength++

        }else{
            console.log("Alerady exists")
        }

    }

    showAll(){
        for(let item of this.uniqueArray)
        {
            console.log(" - ",item," - ")
        }
    }

    get(index){
        if(index > this.uniqueArrayLength || index < 0)
        {
            return -1;
        }
        else
        {
            return this.uniqueArray[index]
        }
    }

    exists(item){

        let SetuniqeArray = new Set(this.uniqueArray)
        if(SetuniqeArray.has(item))
        {
            return true
        }else {
            return false
        }

    }


}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"