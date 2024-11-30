function hitungLingkaran() {
     var radius = document.getElementById("radius").value;

     // document.getElementById("lingkaranOutput").innerText = "Hello World";

     if (radius > 0) {
          var luas = 3.14 * radius * radius;
          var keliling = 2 * 3.14 * radius;

          document.getElementById("lingkaranOutput").innerText = "Luas: " + luas + "cm², Keliling: " + keliling + "cm²";
     } else {
          document.getElementById("lingkaranOutput").innerText = "Masukkan jari-jari yang valid!";
     }
}

function hitungRupiah() {
     var rupiah = document.getElementById("rupiah").value;

     if (rupiah > 0) {

          var dollar = rupiah / 15870;  
          document.getElementById("hasilRupiah").innerText = "Nilai dalam Dollar: $" + dollar.toFixed(2);
     } else {
          document.getElementById("hasilRupiah").innerText = "Masukkan nilai Rupiah yang valid!";
     }
}

function hitungPenjumlahan() {
     var bil1 = parseFloat(document.getElementById("bil1").value) || 0;
     var bil2 = parseFloat(document.getElementById("bil2").value) || 0;

     var jumlah = bil1 + bil2;
     document.getElementById("hasilJumlah").innerText = "Jumlah: " + jumlah.toFixed(2);
 }