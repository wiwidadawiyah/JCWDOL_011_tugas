console.log(`No.01`)
function Triangle(height) {
  let number = 1;
  for (let i = 1; i <= height; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += number.toString().padStart(2, '0') + ' ';
      number++;
    }
    console.log(pattern.trim());
  }
}

Triangle(5);
console.log(`====================`)
console.log(`No.02`)
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
// fungsi dengan parameter n = 15
fizzBuzz(15);
console.log(`====================`)
console.log(`No.03`)
const cekBMI = (weight, height) => {

  let bmi = (weight / ((height * height)
    / 10000)).toFixed(2);;
  console.info(bmi)
  if (bmi < 18.5) {
    return "kurang gizi";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.00 && bmi <= 29.9) {
    return "overweight";
  } else {
    return "obesitas berat, perlu sedot lemak"
  }
}
console.info(cekBMI(80, 167));
console.log(`====================`)
console.log(`No.04`)
function hapusAngkaGanjil(array) {
  const arrayBaru = array.filter(angka => angka % 2 === 0);
  return arrayBaru;
}

// fungsi:
const arrayAwal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const arrayHasil = hapusAngkaGanjil(arrayAwal);

console.log("Array Awal: ", arrayAwal);
console.log("Array Hasil: ", arrayHasil);
console.log(`====================`)
console.log(`No.05`)

function splitStringIntoArray(stringToSplit) {
  // Memisahkan string menjadi array menggunakan spasi sebagai pemisah
  const arrayOfWords = stringToSplit.split(' ');

  return arrayOfWords;
}

// Contoh penggunaan fungsi
const inputString = "Halo Dunia Apakah Sudah Minum Yakult Hari Ini";
const resultArray = splitStringIntoArray(inputString);

console.log(resultArray);
