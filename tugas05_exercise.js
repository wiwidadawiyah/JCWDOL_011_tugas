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
console.log(`=========================`)
console.log(`No.03`)
console.log(`=========================`)
console.log(`No.04`)
console.log(`=========================`)
console.log(`No.05`)
console.log(`=========================`)
console.log(`No.06`)
