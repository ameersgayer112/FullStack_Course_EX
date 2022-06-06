const encrypt = function (str) {
    let newEncrypted = []
    let remain

    for (let i = 0; i < str.length; i++) {
        newEncrypted[i] = str.charCodeAt(i) + 1
        if (newEncrypted[i] > 122) {
            remain = (newEncrypted[i] - 97) % 26
            newEncrypted[i] = 97 + remain
        }
    }
    return String.fromCharCode(...newEncrypted);

}

console.log(encrypt("catz"))