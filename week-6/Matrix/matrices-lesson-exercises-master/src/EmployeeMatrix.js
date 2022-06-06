const Matrix = require('./Matrix')

class EmployeeMatrix extends Matrix {

    constructor() {
        super()
    }


    /*constructor(){
        super()
        this.employeeMatrix = new Matrix()
    }
    */


    loadData(salaryData) {

        for (let i = 0; i < salaryData.length; i++) {
            this.myMatrix[i] = Object.values(salaryData[i])
        }

    }
    getEmployees(department) {

        let employes = []
        for (let i = 0; i < this.myMatrix.length; i++) {
            if (department === this.myMatrix[i][2]) {
                employes.push(this.myMatrix[i][1])
            }

        }
        return employes

    }
    getTotalSalary(department){
        let sumSalryDepartment = 0
        for (let i = 0; i < this.myMatrix.length; i++) {
            if (department === this.myMatrix[i][2]) {
                sumSalryDepartment += this.myMatrix[i][3]
            }

        }
        return sumSalryDepartment

    }

    findRichest(){
        let maxSalary = this.myMatrix[0][3]
        let nameMaxSalaryEmploy = this.myMatrix[0][1]
        for (let i = 1; i < this.myMatrix.length; i++) {
            if (maxSalary < this.myMatrix[i][3]) {
                maxSalary = this.myMatrix[i][3]
                nameMaxSalaryEmploy = this.myMatrix[i][1] 
            }
        }
        return nameMaxSalaryEmploy
    }
}




//You can paste the code from the lesson below to test your solution
let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)

m.print()

console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

console.log(m.getTotalSalary("Finance")) //prints 4300
console.log(m.getTotalSalary("Design")) //prints 5300
console.log(m.findRichest()) //prints Anisha



/* Do not remove the exports below */
module.exports = EmployeeMatrix