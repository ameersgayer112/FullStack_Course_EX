const myObject = {

    arr : [11,13,14,66,67,69,234,456,2,1],

    [Symbol.iterator]: function (arr) {
        let index = 0;
        next() 
        {
            if(index < this.arr.length)
            {
                if(this.arr[index] % 2 == 0)
                {
                 return { value: this.arr[index], done: false}; 
                }
                else{
                    return this.next();
                }
        
            }
            else{
                return {done:true};
                
            }
      }

    }

}


for (let x of myObject) {
        console.log(x)
}