console.log(`No.01`)
let j = 1;
while (j <= 10) {
  console.log("9 x ", j);
  j++;

}

let amount = 100000
let amountStr = String(amount)
let str = ""
for (let i = amountStr.length - 1, count = 0; i >= 0; i--, count++) {
  str = amountStr[i] + str
  if (count === 2 && i != 0) {
    str = "." + str
    count = -1
  }
}
console.log(`${amount} to IDR = Rp. ${str}`)