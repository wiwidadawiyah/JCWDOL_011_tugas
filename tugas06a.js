console.log(`SOAL NOMOR 1`)
function hitungStatistikSiswa(siswaObjek) {
    if (!siswaObjek || !Array.isArray(siswaObjek) || siswaObjek.length === 0) {
      return null;
    }
  
    let skorTerendah = Infinity;
    let skorTertinggi = -Infinity;
    let totalUsia = 0;
    let usiaTerendah = Infinity;
    let usiaTertinggi = -Infinity;
  
    siswaObjek.forEach((siswa) => {
      if (siswa.hasOwnProperty("Skor") && typeof siswa.Skor === "number") {
        skorTerendah = Math.min(skorTerendah, siswa.Skor);
        skorTertinggi = Math.max(skorTertinggi, siswa.Skor);
      }
  
      if (siswa.hasOwnProperty("Usia") && typeof siswa.Usia === "number") {
        totalUsia += siswa.Usia;
        usiaTerendah = Math.min(usiaTerendah, siswa.Usia);
        usiaTertinggi = Math.max(usiaTertinggi, siswa.Usia);
      }
    });
  
    const jumlahSiswa = siswaObjek.length;
    const rataRataSkor = skorTertinggi !== -Infinity ? totalUsia / jumlahSiswa : 0;
    const rataRataUsia = usiaTertinggi !== -Infinity ? totalUsia / jumlahSiswa : 0;
  
    const hasilStatistik = {
      SkorPalingTinggi: skorTertinggi,
      SkorTerendah: skorTerendah,
      RataRataSkor: rataRataSkor,
      UsiaPalingTinggi: usiaTertinggi,
      UsiaTerendah: usiaTerendah,
      RataRataUsia: rataRataUsia,
    };
  
    return hasilStatistik;
  }
  
  // Contoh penggunaan fungsi:
  const dataSiswa = [
    { Nama: "John", Surel: "john@example.com", Usia: 20, Skor: 85 },
    { Nama: "Jane", Surel: "jane@example.com", Usia: 22, Skor: 95 },
    { Nama: "Bob", Surel: "bob@example.com", Usia: 21, Skor: 70 },
  ];
  
  const hasil = hitungStatistikSiswa(dataSiswa);
  console.log(hasil);
  console.log(`===============================`)

  