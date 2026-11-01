//Menmilih elemen di html
const deskripsi = document.querySelector('.deskripsi')
const tombol = document.querySelector('#btntoggle')
const daftar_produk = document.querySelector('#Daftar_produk')

//Mengubah text secara aman 
deskripsi.textContent = 'text ini sudah di update';

//Membuat element baru secara dinamis
const newItem = document.createElement('li')
newItem.textContent = 'laptop asus'
daftar_produk.appendChild(newItem)

//manipulasi class css
tombol.addEventListener('click', () => {
    deskripsi.classList.toggle('highlight')
})