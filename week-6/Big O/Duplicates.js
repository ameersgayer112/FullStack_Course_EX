
const findDuplicates = function (arr) {

    let appears = {}

    for (let i = 0; i < arr.length; i++) {

        if(appears[arr[i]])
        {
            return true;
        }

        appears[arr[i]] = true

    }
}


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 1 , 3, 4, 3 , 5];
if(findDuplicates(arr2)){
    console.log("there is a duplicate")
}
else{
    console.log("there is No duplicates in array")
}
