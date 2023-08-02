// app.js

const Product = require('./product');
const Cart = require('./cart');

// Data Produk
const produk1 = new Product('Rumah', 1500000000);
const produk2 = new Product('Apartemen', 750000000);
const produk3 = new Product('Tanah', 500000000);

// Inisialisasi Keranjang dan Transaksi
const keranjang = new Cart();

// Tambahkan Produk ke Keranjang
keranjang.tambahProduk(produk1);
keranjang.tambahProduk(produk2);
keranjang.tambahProduk(produk3);

// Tampilkan Total Transaksi Saat Ini
console.log('Total Transaksi Saat Ini:', keranjang.tampilkanTotal());

// Selesaikan Transaksi
const transaksi = keranjang.selesaikanTransaksi();
console.log('Transaksi Selesai:', transaksi);
