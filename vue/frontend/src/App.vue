<script setup>
import { ref } from 'vue'
import Latian from './latian.vue' // 1. Impor file latian.vue
import hallo from './components/hallo.vue'

// Membuat state/variabel untuk melacak menu aktif ('home' atau 'latian')
const menuAktif = ref('home')
</script>

<template>
  <div style="padding: 20px;">
    <!-- Bagian Tombol Menu (Navigasi) -->
    <nav style="margin-bottom: 20px;">
      <button @click="menuAktif = 'home'">Menu 1 (Home)</button>
      <button @click="menuAktif = 'latian'" style="margin-left: 10px;">Menu 2 (Latian)</button>
      <button @click="menuAktif = 'hallo'" style="margin-left: 10px;">Menu 3 (hallo)</button>

    </nav>

    <hr />

    <!-- Bagian Konten yang Berubah-ubah Berdasarkan Menu yang Dipilih -->
    <div>
      <!-- Jika menuAktif bernilai 'home', tampilkan ini -->
      <div v-if="menuAktif === 'home'">
        <h2>Ini adalah Halaman Menu 1 (App.vue)</h2>
        <p>Selamat datang di halaman utama!</p>
      </div>

      <!-- Jika menuAktif bernilai 'latian', tampilkan komponen Latian -->
      <div v-else-if="menuAktif === 'latian'">
        <Latian />
      </div>

      <div v-else-if="menuAktif === 'hallo'">
      <hallo />
      </div>
    </div>
  </div>
</template>