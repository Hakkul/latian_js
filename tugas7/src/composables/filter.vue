<script setup>
import {ref, computed} from 'vue'

export function filterProduk(daftar_produk) {
    const daftarKategori = ['semua', 'alat tulis', 'alat gambar', 'logika']
    const kategoriAktiv = ref('semua') 

    const produkTerFilter = computed(() => {
        if (kategoriAktiv.value === 'semua') {
            return daftar_produk.value
        }
    })

    const pilihKategori = (kategoriBaru) => {
        kategoriAktiv.value = kategoriBaru
    }

    return {
        daftarKategori,
        kategoriAktiv,
        produkTerFilter,
        pilihKategori
    }
    
    
}


</script> 