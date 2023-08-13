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
        let gajiPerJamAwal, gajiPerJamSelanjutnya;
        
        if (this.jenis === 'full_time') {
            gajiPerJamAwal = 100000;
            gajiPerJamSelanjutnya = 75000;
        } else if (this.jenis === 'part_time') {
            gajiPerJamAwal = 50000;
            gajiPerJamSelanjutnya = 30000;
        } else {
            throw new Error('Jenis karyawan tidak valid');
        }

        const jamAwal = Math.min(this.jamKerjaPerHari, 6);
        const jamSelanjutnya = Math.max(this.jamKerjaPerHari - 6, 0);

        const totalGaji = (jamAwal * gajiPerJamAwal) + (jamSelanjutnya * gajiPerJamSelanjutnya);
        return totalGaji;
    }
}

class FullTimer extends Karyawan {
    constructor(nama) {
        super(nama, 'full_time');
    }
}

class PartTimer extends Karyawan {
    constructor(nama) {
        super(nama, 'part_time');
    }
}

// =========TESTER=========
const karyawanFullTimer = new FullTimer('Adawiyah');
karyawanFullTimer.tambahJamKerja(8);
console.log(`${karyawanFullTimer.nama} memiliki total gaji: Rp ${karyawanFullTimer.hitungTotalGaji()}`);
