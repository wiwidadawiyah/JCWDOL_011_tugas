function excel(alphabet) {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = 0

    for(var i = 0; i < alphabet.length; i++) {
        let findAlphaNumber = 0
        let temp = 0
        for(var j = 0; j <= alphabets.length; j++) {
            if(alphabets[j] == alphabet[i]) {
                findAlphaNumber = j + 1;
                break;
            }
        }
        console.log("findAlphaNumber => ", findAlphaNumber);

        temp = findAlphaNumber * Math.pow(26, alphabet.length - i - 1);
        console.log("temp => ", temp);
        result += temp;

    }

    return result;
}

console.log(excel("B")); // 2
console.log(excel("Z")); // 26
console.log(excel("AA")); // 27
console.log(excel("AL")); // 38 (26) + ( 1 * 12 )
console.log(excel("AZ")); // 52 (26) + ( 1 * 26 )
console.log(excel("ZZ")); // 702
console.log(excel("ABC")) // 731 (26 * 26 * 1) + (26 * 2) + (1 * 3)



/*

(1 x 26^2) (2 x 26^1) (3 x 26^0)

A - Z = 26
AA - AZ ( 26 * 26 ) = 676 => 676 + 26 = 702
AAA - ZZZ ( 26 * 26 * 26) + ( 26 * 26 ) + 26 = 18278
AAAA - ZZZZ ()

*/