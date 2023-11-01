/**
 * memanggil sebuah module readline 
 * untuk membaca data dari argumen yang diinputkan user
 */
const readline = require('readline');
 
/**
 * memanggil method createInterface() 
 * untuk membuat antarmuka readline, 
 * yang memungkinkan kita membaca input 
 * dari pengguna secara interaktif melalui baris perintah
 */
const rl = readline.createInterface(process.stdin, process.stdout);

// 1. Memulai program
/**
 * memanggil method question() untuk mengajukan 
 * pertanyaan dari pengguna dan membaca input mereka
 */
rl.question('Input X : ', (inputX) => { // 2. kode ini untuk menampilkan interface untuk membuat user menginputkan suatu argumen (x)
  
  // menggunakan parseInt() untuk mem-parsing string ke tipe data integer
  let x = parseInt(inputX)

  // mengecek apakah user menginputkan argumen atau tidak
  if(inputX.length > 0) {

    // mengecek apakah input x itu berupa angka atau tidak
    if(isNaN(x)) {
      // menampilkan pesan jika input bukan angka
      console.log("Error: Input X harus berupa angka")                  
    } else {

      /**
       * 3. membuat variabel i, a, b, dan c untuk menyimpan nilai
       * yang nantinya akan digunakan
       */
      let i = 0
      let a = 7
      let b = 9
      let c = 100
      
      /**
       * 4. membuat variabel f untuk menyimpan nilai
       * yaitu mendapatkan sisa bagi 3 dari c
       */
      let f = c % 3
      
      for(i = 0; i < 100; i++) { // 5. melakukan perulangan selama i kurang dari 100
        
        x -= 20 // 6. mengurangi x dengan 20        
        b -= 2 // 7. mengurangi b dengan 2
        
        if(b > 0) { // 8. mengecek apakah b lebih dari 0 atau tidak
          b += 1 // 12. menambah b dengan 1
          a += 1 // 9. menambah a dengan 1
          f += a // 10. menambah f dengan a
        } else {          
          a += 1 // 9. menambah a dengan i
          f += a // 10. menambah f dengan a
        }

        while(f % 4 == 0) { // 11. mengecek selama f sisa bagi 4 itu sama dengan 0, maka lakukan proses di dalamnya
          b += 1 // 12. menambah b dengan 1
          a += 1 // 9. menambah a dengan 1
          f += a // 10. menambah f dengan a
        }

        i += 10 // 13. menambah i dengan 10

      }

      // 14. mengkalikan b dengan 2
      b *= 2

      // 15. menampilkan hasil dari nilai a, b, c dan f
      console.log("----------------------")
      console.log(`Nilai a : ${a}\nNilai b : ${b}\nNilai c : ${c}\nNilai f : ${f}`)
    }
  } else {
    // menampilkan pesan jika tidak ada argumen yang diinputkan oleh user
    console.log("Error: Anda harus menginputkan argumen")
  }

  // 16. program selesai
  rl.close()
});

