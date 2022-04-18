
const splice = function(array ,start,how_del,...argss){


    var res = [] 
    if(start < 0)
    {
        start = array.lenght + start;
        if(start <= 0)
        {
            start = 0
        }
    }
    else if(start > array.lenght){
        start = array.lenght
    }

    if(argss.length != 0)
    {
        for(let i = 0 ; i < start;i++ )
        {
            res[i] = array[i]
        }
        for(let i = 0; i < argss.length;i++)
        {
            res.push(argss[i]);
        }
    }

    else {
        if (how_del < 0) 
    {
        how_del = 0;
    }
    if (how_del > (array.lenght - start))
    {
        how_del = array.lenght - start;
    }

    //copy until start ....
    for(let i = 0 ; i < start;i++ )
    {
        res[i] = array[i]
    }

    for (let i = start + how_del; i < array[i]; i++)
    {
        res.push(array[i]);
    }
}

    array.length = 0;
    for(let i = 0;i< res.length;i++)
    {
        array[i] = res[i];
    }  
}


// remove 1 element
let arr = [1,2,3]
splice(arr, 0,1); 
console.log(arr); //should be [2,3]

// add 1 element
arr = [1,2,3]
splice(arr, 0,0,0); 
console.log(arr); //should be [0,1,2,3]

// add 2 elements
arr = [1,2,3]
splice(arr,0,0,-1,0); 
console.log(arr); //should be [-1,0,1,2,3]

// replace 1 element
arr = [1,2,3]
splice(arr,1,1,55); 
console.log(arr); //should be [1,55,3] 

// delete all elements from index to end
arr = [1,2,3,4,5]
splice(arr,1); 
console.log(arr); //should be [1] 

// returns array of deleted elements
arr = [1,2,3]
let deleted = splice(arr,1); 
console.log(deleted); //should be [2,3] 

// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = splice(arr,1,1); 
console.log(deleted); //should be [2] 

// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = splice(arr,1,0,5); 
console.log(deleted); //should be [] 

