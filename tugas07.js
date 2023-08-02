console.log(`Jawaban No.01`)
function isDeepEqual(obj1, obj2) {
    // Handle the simple cases first
    if (obj1 === obj2) {
      return true; // Same object reference or primitive value
    }
  
    if (typeof obj1 !== 'object' || obj1 === null ||
        typeof obj2 !== 'object' || obj2 === null) {
      return false; // One of the objects is not an object or null
    }
  
    // Check if both objects have the same number of properties
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Check if all properties are deep equal
    for (const key of keys1) {
      if (!isDeepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  
    return true;
  }
  
const obj1 = { a: 4, b: { c: 8 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 4, b: { c: 8 } };

console.log(isDeepEqual(obj1, obj2));
console.log(isDeepEqual(obj1, obj3));

console.log(`===============================`)
console.log(`Jawaban No.02`)
function getIntersection(objc1, objc2) {
    const intersection = {};
  
    for (const key in objc1) {
      if (objc2.hasOwnProperty(key) && objc1[key] === objc2[key]) {
        intersection[key] = objc1[key];
      }
    }
  
    return intersection;
  }
  
  // Contoh penggunaan fungsi
  const objc1 = { a: 1, b: 2 };
  const objc2 = { a: 1, c: 3 };
  
  const result = getIntersection(objc1, objc2);
  console.log(result);
  
console.log(`===============================`)
console.log(`Jawaban No.03`)
function mergeAndRemoveDuplicates(arr1, arr2) {
    // Menggabungkan kedua larik
    const mergedArray = arr1.concat(arr2);
  
    // Menghapus data duplikat berdasarkan email
    const uniqueArray = mergedArray.reduce((acc, curr) => {
      const existingItem = acc.find((item) => item.email === curr.email);
      if (!existingItem) {
        acc.push(curr);
      }
      return acc;
    }, []);
  
    return uniqueArray;
  }
  
  // Contoh penggunaan fungsi dengan data yang diberikan
  const larik1 = [
    { nama: 'Mahasiswa 1', email: 'mahasiswa1@mail.com' },
    { nama: 'Mahasiswa 2', email: 'mahasiswa2@mail.com' }
  ];
  const larik2 = [
    { nama: 'Mahasiswa 1', email: 'mahasiswa1@mail.com' },
    { nama: 'Mahasiswa 3', email: 'mahasiswa3@mail.com' }
  ];
  
  const arrayResult = mergeAndRemoveDuplicates(larik1, larik2);
  console.log(arrayResult);
  
console.log(`===============================`)
console.log(`Jawaban No.04`)
function swapPropertiesAndValues(inputArray) {
    if (!Array.isArray(inputArray)) {
      throw new Error('Input harus berupa larik (array) objek.');
    }
  
    return inputArray.map((obj) => {
      const newObj = {};
      for (const key in obj) {
        newObj[obj[key]] = key;
      }
      return newObj;
    });
  }
  
  const inputArray = [{ nama: 'David', umur: 20 }];
const outputArray = swapPropertiesAndValues(inputArray);

console.log(outputArray);
console.log(`===============================`)
console.log(`Jawaban No.05`)
function factorial(n) {
  // Basis dari rekursi: jika n adalah 0 atau 1, maka faktorialnya adalah 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Rekursif: faktorial dari n adalah n dikali faktorial dari n-1
  return n * factorial(n - 1);
}

// Contoh penggunaan fungsi:
const number = 7;
const hasil = factorial(number);
console.log(`Faktorial dari ${number} adalah: ${hasil}`);

console.log(`===============================`)