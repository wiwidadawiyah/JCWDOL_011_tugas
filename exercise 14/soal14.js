// 1. Tulis Kode untuk memeriksa apakah tanggal tersebut adalah akhir pekan
// 2. Tulis kode untuk menemukan FPB dari dua angka ( pakai while )
// 3. Tulis kode untuk menemukan KPK dari dua angka ( pakai do while )
// 4. Tulis kode untuk menemukan karakter paling umum dari sebuah string
// 5. Tulis kode untuk mengurutkan string berdasarkan abjad (dengan dan tanpa fungsi sortir)
// 6. Tulis kode untuk mendapatkan tanggal minimum dari array



console.log("JAWABAN NOMOR 1")

function weekend(date) {
    console.log(new Date(date).getDay())
    return new Date(date).getDay() === 6 || new Date(date).getDay() === 0 ? "weekend" : "weekday"

}
console.log(weekend("2022-11-10")) // 4
console.log(weekend('2022-11-13')) // 0
console.log(weekend("2022-11-14")) // 1


console.log("JAWABAN NOMOR 4")

function commonCharacter(str) {
    let char = null
    let charMax = 0
    let charCount = 0
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < str.length; j++) {
            if(str[i] === str[j] && i !== j){
                charCount += 1
            }
        }
        if(charCount > charMax) {
            charMax = charCount
            char = str[i]
        }
    }
    return char
}
console.log(commonCharacter("YUDHISTIRA"))
console.log(commonCharacter("PURWADHIKA"))
//

console.log("JAWABAN NOMOR 5")

function sortString(arr) {
    for(let i = 0; i < arr.length; i++) {
        let temp = null
        for(let j =  0; j < arr.length; j++) {
            if(arr[i][0] < arr[j][0]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }

        }
    }
    return arr

}
console.log(sortString(["WIWID", "KHANSA", "FINZA"]))

console.log("JAWABAN NOM0R 6")

function minimumDate(dates) {
    let minDate = new Date(dates[0])

    for(let i = 1; i < dates.length; i++) {
        if(minDate > new Date(dates[i])) {
            minDate = new Date(dates[i])
        }
    }

    return minDate
}
console.log(minimumDate(['2022-10-05', '2010-09-10', '1998-10-15']))

console.log("JAWABAN NOMOR 7")

function multiDimensi(arr) {
    let result = 0
    for(let i = 0; i < arr.length; i++) {
        let row = 0
        for(let j = 0; j < arr[i].length; j++) {
            row += arr[i][j]
        }
        result += row
    }

    return result
}
console.log(multiDimensi([
    [1,2,3],
    [3,4],
    [1],
    [4,3,5],
    [5,6,2,6]
]))

