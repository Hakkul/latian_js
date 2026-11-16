import {ref, computed} from 'vue'

export function filterProduk(daftar_produk) {
    const daftarKategori = ['semua', 'alat tulis', 'alat gambar', 'logika', 'color']
    const kategoriAktif = ref('semua') 

    const produkTerFilter = computed(() => {
        if (kategoriAktif.value === 'semua') {
            return daftar_produk.value
        }

        return daftar_produk.value.filter(
            (item) => item.kategori === kategoriAktif.value
        )
    })

    const pilihKategori = (kategoriBaru) => {
        kategoriAktif.value = kategoriBaru
    }

    return {
        daftarKategori,
        kategoriAktif,
        produkTerFilter,
        pilihKategori
    }
    
    
}

