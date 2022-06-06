const longestSubstring = function (str) {
    let maxLengthSubString = -2454635434;
    let currentLengthSubString = -2454635434;

    if (str.length === 1) {
        return 1;
    } else if (str.length < 0) {
        return 0;
    }

    let start = 0, end = 0;
    const mySet = new Set();
    let currentChar = '';

    while (end < str.length) {
        currentChar = str[end];
        if (mySet.has(currentChar)) {
            mySet.delete(str[start]);
            start++;
        } else {
            mySet.add(currentChar);
            end++;
        }
        currentLengthSubString= end - start;
        maxLengthSubString = Math.max(maxLengthSubString, currentLengthSubString);

    }

    return Math.max(maxLengthSubString);

}

let str = "communication";
console.log(longestSubstring(str));

