<script setup>
import {ref} from 'vue'
import {storeToRefs} from 'pinia'
import {useCardStore} from '../stores/carStore'


const cardStore = useCardStore()
const {items, totalHarga, StrukTerakhir } = storeToRefs(cardStore)

const namaPembeli = ref ('')
const metodeBayar1 = ref('Transfer Bank')
const metodeBayar2 = ref('Qris')
const erorMessage = ref('')

const formatRupiah = (angka) => {
    if (!namaPembeli.value.trim()) {
        erorMessage.value = 'Nama pembeli wajib diisi'
        return
    }

    erorMessage.value = ''

    cardStore.prosesCheckout({
        nama: namaPembeli.value.trim(),
        metode1: metodeBayar1.value,
        metode2: metodeBayar2.value
    })

    namaPembeli.value = ''
    metodeBayar1.value = 'Transfer Bank'
    metodeBayar2.value = 'Qris'
}


</script>