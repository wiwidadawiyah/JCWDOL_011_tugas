class Karyawan {
    constructor(nama, jenis) {
        this.nama = nama;
        this.jenis = jenis;
        this.jamKerjaPerHari = 0;
    }
    

    tambahJamKerja(jam) {
        this.jamKerjaPerHari += jam;
    }

    hitungTotalGaji() {
        let gaji;
        if (this.jenis === "full_time") {
            gaji = this.jamKerjaPerHari > 6 ? 75000 : 100000;
        } else if (this.jenis === "half_time") {
            gaji = this.jamKerjaPerHari > 6 ? 30000 : 50000;
        } else {
            throw new Error ("Jenis karyawan tidak valid");
        }
        return this.jamKerjaPerHari * gaji;
    }
}

class FullTime extends Karyawan {
    constructor(nama) {
        super(nama, "full_time");
    }
}

class HalfTime extends Karyawan {
    constructor(nama) {
        super(nama, "half_time");
    }
}

const fullTime = new FullTime("Adawiyah");
fullTime.tambahJamKerja(8);
console.log(`${fullTime.nama} memiliki total gaji : Rp ${fullTime.hitungTotalGaji()}`);
