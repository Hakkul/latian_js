const barang = [
    {nama_barang: "buku", id: 1, harga: 8_500, stok: 20, kategori: "alat tulis"},
    {nama_barang: "pena", id: 2, harga: 9_500, stok: 10, kategori: "alat tulis"},
    {nama_barang: "dompet", id: 3, harga: 9_700, stok: 30, kategori: "alat tulis"},
    {nama_barang: "kursi", id: 4, harga: 28_500, stok: 23, kategori: "barang"},
    {nama_barang: "kopi", id: 5, harga: 88_500, stok: 21, kategori: "minuman"}

]

// console.log(barang) // menampilkan seluruh isi barang


//Cara 1 menggunakan kata function
// const pilih = barang.filter(function(item) {
//     return item.kategori === "alat tulis";
// }) 

// console.log(pilih)  memfilter yang hanya alat tulis

//Cara 2 menggunakan arrow function

// const pilih = barang.filter((item) => {
//     return item.kategori === "minuman"
// })

// console.log(pilih) menampilkah yang hanya kategori minuman saja


// // cara 3 1 baris + arrow function l lebih clear dan enak di baca

// const pilih = barang.filter(item => item.kategori === "barang")

// console.log(pilih) menampilkan yang hanya kategori barang
