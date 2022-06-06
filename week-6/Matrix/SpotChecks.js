let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

//spotcheck2
const printMatrix = function(mat){
    for(let i = 0; i < mat.length;i++ ){
        for(j=0 ; j < mat[i].length; j++){
            console.log(mat[i][j])
        }
    }
}

//spotcheck3
const get = (rowNum,colNum) => matrix[rowNum][colNum]

//spot check 4
const print = function(mat){
    for(let i = 0; i < mat.length;i++ ){
        let strLine = ""
        for(j=0 ; j < mat[i].length; j++){
            strLine += mat[i][j] + '\t'
        }
        console.log(strLine)
    }


}

//Spot Check 5
const printRow = function(rowNum){
    for (let i = 0; i < matrix[rowNum].length; i++) {
        console.log(matrix[rowNum][i])
    }
}

//spot check 6

const ubdateMatrix = function(rowNum,colNum,value)
{
    matrix[rowNum][colNum] = value
}

printMatrix(matrix)
console.log(get(1, 2))
print(matrix)
printRow(1)
ubdateMatrix(2,2,174)
print(matrix)
