console.log(`No.01`)
// Fungsi untuk mendapatkan nilai terendah, tertinggi, dan rata-rata tanpa menggunakan fungsi sortir
function getMinMaxAvgWithoutSort(arr) {
    if (arr.length === 0) {
      return {
        min: undefined,
        max: undefined,
        avg: undefined,
      };
    }
  
    let min = arr[0];
    let max = arr[0];
    let sum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      } else if (arr[i] > max) {
        max = arr[i];
      }
      sum += arr[i];
    }
  
    const avg = sum / arr.length;
  
    return {
      min,
      max,
      avg,
    };
  }
  
  // Contoh penggunaan:
  const numbers = [4, 2, 8, 1, 6];
  const result = getMinMaxAvgWithoutSort(numbers);
  console.log(result); // Output: { min: 1, max: 8, avg: 4.2 }

console.log(`=========================`)
console.log(`No.02`)
function gabungKata(arr) {
  if (arr.length === 0) {
    return "";
  } else if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 2) {
    return arr.join(' dan ');
  } else {
    // Menggabungkan kata-kata dalam larik, dipisahkan dengan koma
    let result = arr.slice(0, arr.length - 1).join(', ');

    // Menambahkan kata terakhir dengan 'dan' di depannya
    result += ` dan ${arr[arr.length - 1]}`;

    return result;
  }
}

// Contoh fungsi:
const kataArr = ["gelas", "piring", "sendok", "garpu"];
const hasilGabung = gabungKata(kataArr);
console.log(hasilGabung);
console.log(`=========================`)
console.log(`No.03`)
function splitStringIntoArray(stringToSplit) {
  // Memisahkan string menjadi array menggunakan spasi sebagai pemisah
  const arrayOfWords = stringToSplit.split(' ');

  return arrayOfWords;
}

// Contoh penggunaan fungsi
const inputString = "Halo Dunia Apakah Sudah Minum Yakult Hari Ini";
const resultArray = splitStringIntoArray(inputString);

console.log(resultArray);
console.log(`=========================`)
console.log(`No.04`)
function hitungElemenSama(arr1, arr2) {
  // Pastikan kedua larik memiliki panjang yang sama
  if (arr1.length !== arr2.length) {
    throw new Error('Kedua larik harus memiliki panjang yang sama.');
  }

  const hasil = [];
  
  // Iterasi melalui elemen-elemen larik dan hitung hasilnya pada setiap posisi
  for (let i = 0; i < arr1.length; i++) {
    const hasilPerhitungan = arr1[i] + arr2[i];
    hasil.push(hasilPerhitungan);
  }
  
  return hasil;
}

// Contoh penggunaan fungsi
const larik1 = [1, 2, 3, 4];
const larik2 = [5, 6, 7, 8];
const hasilPerhitungan = hitungElemenSama(larik1, larik2);
console.log(hasilPerhitungan); 
console.log(`=========================`)
console.log(`No.05`)
function tambahkanElemenUnik(arr, elemen) {
  if (!arr.includes(elemen)) {
    arr.push(elemen);
  }
}

// Contoh penggunaan:
let arraySaya = [1, 2, 3, 4];
console.log("Array awal:", arraySaya);

tambahkanElemenUnik(arraySaya, 3);
console.log("Setelah menambahkan elemen 3:", arraySaya);

tambahkanElemenUnik(arraySaya, 5);
console.log("Setelah menambahkan elemen 5:", arraySaya);
console.log(`=========================`)
console.log(`No.06`)
function hapusAngkaGanjil(array) {
  const arrayBaru = array.filter(angka => angka % 2 === 0);
  return arrayBaru;
}

// fungsi:
const arrayAwal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const arrayHasil = hapusAngkaGanjil(arrayAwal);

console.log("Array Awal: ", arrayAwal);
console.log("Array Hasil: ", arrayHasil);