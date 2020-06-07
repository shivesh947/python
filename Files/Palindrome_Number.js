var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let arr = s.split("");
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if ( map[arr[i]] < map[arr[i+1]] && i!=arr.length) {
            sum = map[arr[i+1]]-map[arr[i]] + sum;
			i=i+1
            continue;
        }
        sum = sum + map[arr[i]];
    }
    return sum;

};
/* "III"
"IV"
"IX"
"LVIII"
"MCMXCIV" */
console.log(romanToInt('III'))