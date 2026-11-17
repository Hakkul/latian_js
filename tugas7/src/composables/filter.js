import {ref, computed} from 'vue'

export function filterProduk(daftar_produk) {
    const daftarKategori = ['semua', 'alat tulis', 'alat gambar', 'logika', 'color']
    const kategoriTerpilih = ref('semua') 

    const produkTerFilter = computed(() => {
        if (kategoriTerpilih.value === 'semua') {
            return daftar_produk.value
        }

        return daftar_produk.value.filter(
            (item) => item.kategori === kategoriTerpilih.value
        )
    })

    const pilihKategori = (kategoriBaru) => {
        console.log('tombol ini klik')
        kategoriTerpilih.value = kategoriBaru
    }

    return {
        daftarKategori,
        kategoriTerpilih,
        produkTerFilter,
        pilihKategori
    }
    
    
}

