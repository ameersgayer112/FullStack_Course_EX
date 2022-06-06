
const printStarSeries = function (num, count) {

    let j = count
    let stars = ""
    while (j) {
        stars = ""
        for (let i = 1; i <= num; i++) {
            for (let k = 0; k < i; k++) {
                stars += '*'

            }
            stars += '\n'

        }

        for (let i = 0; i < num; i++) {
            for (let k = 0; k < num - i; k++) {
                stars += "*";
            }
            stars += "\n";
        }
        console.log(stars)
        j--;
    }

}


printStarSeries(5, 3)