// persegi panjang
var p = 3, l = 4
var luasP = p * l
var kelilingP = (p + l) * 2
console.log(luasP)
console.log(kelilingP)

// lingkaran
var r = 5
luasL = 3.14 * r * r
kelilingL = 2 * 3.14 * r
d = 2 * r
console.log(luasL)
console.log(kelilingL)
console.log(d)

// segitiga
// jumlah sudut segitiga = 180
// A + B + C = 180
var A = 60, B = 90
var C = 180 - (A + B)
console.log(C)

// date
var date_1 = new Date('2023-07-25')
var date_2 = new Date('2023-07-20')

var differentDays = Math.abs(date_1 - date_2) / (1000 * 60 * 60 * 24);

console.log(`date1 =${date_1}, \ndate2=${date_2}`)
console.log('different days is', differentDays);


// hari
// 400 hari : 1 tahun, (35 hari)
// 35 / 30 : 1 bulan, (5 hari)
var days = 400
var years = Math.floor(days / 365)
//console.log(years)
var daysLeft = 400 % 365
var months = Math.floor(daysLeft / 30)
//console.log(months)
daysLeft = daysLeft % 30
var weeks = Math.floor(daysLeft / 7)
//console.log(weeks)
daysLeft = daysLeft % 7
//console.log(daysLeft)

console.log(`${days} hari : ${years} tahun, ${months} bulan, ${weeks} minggu, ${daysLeft} hari`)
