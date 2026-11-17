<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCardStore } from '../stores/cartStore'
import '../assets/css/keranjang.css'

const cardStore = useCardStore()
const { items, totalHarga, strukTerakhir } = storeToRefs(cardStore)

const namaPembeli = ref('')
const metodeBayar = ref('Transfer Bank')
const pesanError = ref('')

const formatRupiah = (angka) => {
  return Number(angka || 0).toLocaleString('id-ID')
}

const handleCheckout = () => {
  if (!namaPembeli.value.trim()) {
    pesanError.value = 'Nama pembeli wajib diisi sebelum melakukan checkout.'
    return
  }

  pesanError.value = ''

  cardStore.prosesCheckout({
    nama: namaPembeli.value.trim(),
    metode: metodeBayar.value
  })

  namaPembeli.value = ''
  metodeBayar.value = 'Transfer Bank'
}
</script>

<template>
  <div class="keranjang-container">
    <h2>Keranjang Belanja</h2>

    <!-- KONDISI 1: Tampilan Struk Checkout setelah transaksi berhasil -->
    <div v-if="strukTerakhir" class="struk-card">
      <div class="struk-header">
        <h3>Struk Pembayaran</h3>
        <span class="badge-lunas">LUNAS</span>
      </div>

      <div class="struk-info">
        <p><strong>No. Transaksi:</strong> {{ strukTerakhir.idTransaksi }}</p>
        <p><strong>Tanggal:</strong> {{ strukTerakhir.tanggal }}</p>
        <p><strong>Nama Pembeli:</strong> {{ strukTerakhir.namaPembeli }}</p>
        <p><strong>Metode Bayar:</strong> {{ strukTerakhir.metodeBayar }}</p>
      </div>

      <hr />

      <div class="struk-items">
        <div 
          v-for="item in strukTerakhir.items" 
          :key="item.id" 
          class="struk-item-baris"
        >
          <span>{{ item.nama }} x {{ item.qty }}</span>
          <span>Rp {{ formatRupiah(item.harga * item.qty) }}</span>
        </div>
      </div>

      <hr />

      <div class="struk-total">
        <span>Total Dibayar</span>
        <span>Rp {{ formatRupiah(strukTerakhir.totalBayar) }}</span>
      </div>

      <button @click="cardStore.resetStruk()" class="btn-utama">
        Selesai & Tutup Struk
      </button>
    </div>

    <!-- KONDISI 2: Tampilan saat keranjang masih kosong -->
    <div v-else-if="items.length === 0" class="keranjang-kosong">
      <p>Keranjang belanja Anda masih kosong.</p>
      <p>Silakan pilih buku dari halaman katalog terlebih dahulu.</p>
    </div>

    <!-- KONDISI 3: Daftar belanja dan form pembeli -->
    <div v-else class="keranjang-grid">
      <!-- Bagian Kiri: Daftar Item Belanjaan -->
      <div class="daftar-belanja">
        <div 
          v-for="item in items" 
          :key="item.id" 
          class="item-card"
        >
          <div class="item-detail">
            <h4>{{ item.nama }}</h4>
            <p class="harga-satuan">Rp {{ formatRupiah(item.harga) }} / buku</p>
          </div>

          <div class="item-kontrol">
            <button @click="cardStore.kurangQty(item.id)" class="btn-qty">-</button>
            <span class="angka-qty">{{ item.qty }}</span>
            <button @click="cardStore.tambahQty(item.id)" class="btn-qty">+</button>
          </div>

          <div class="item-subtotal">
            <p>Rp {{ formatRupiah(item.harga * item.qty) }}</p>
            <button @click="cardStore.hapusItem(item.id)" class="btn-hapus">
              Hapus
            </button>
          </div>
        </div>
      </div>

      <!-- Bagian Kanan: Form Pembeli & Ringkasan Checkout -->
      <div class="form-checkout">
        <h3>Data Pembeli</h3>

        <div class="form-grup">
          <label for="nama">Nama Lengkap</label>
          <input 
            id="nama"
            v-model="namaPembeli" 
            type="text" 
            placeholder="Masukkan nama Anda"
          />
        </div>

        <div class="form-grup">
          <label for="metode">Metode Pembayaran</label>
          <select id="metode" v-model="metodeBayar">
            <option value="Transfer Bank">Transfer Bank</option>
            <option value="QRIS">QRIS</option>
            <option value="COD">Bayar di Tempat</option>
          </select>
        </div>

        <p v-if="pesanError" class="pesan-error">{{ pesanError }}</p>

        <div class="ringkasan-total">
          <span>Total Pembayaran:</span>
          <strong>Rp {{ formatRupiah(totalHarga) }}</strong>
        </div>

        <button @click="handleCheckout" class="btn-utama">
          Proses Checkout
        </button>
      </div>
    </div>
  </div>
</template>