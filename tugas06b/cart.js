// cart.js

class Cart {
    constructor() {
      this.cartItems = [];
    }
  
    tambahProduk(produk) {
      this.cartItems.push(produk);
    }
  
    tampilkanTotal() {
      let total = 0;
      this.cartItems.forEach((produk) => {
        total += produk.harga;
      });
      return total;
    }
  
    selesaikanTransaksi() {
      const transaksi = {
        produk: this.cartItems,
        total: this.tampilkanTotal(),
      };
      this.cartItems = [];
      return transaksi;
    }
  }
  
  module.exports = Cart;
  