
<script setup>
import { ref, computed } from "vue"
// import './css/app.css'


const count = ref(0)
const batasMaksimal = 10

const statusGenapGanjil = computed(() => {
  return count.value % 2 === 0 ? "Genap" : "Ganjil"
})

const tambah = () => {
  if (count.value < batasMaksimal) count.value++
}

const reset = () => {
  count.value = 0
}
</script>

<template>
  <div class="counter-card">
    <h2>Counter Reaktif Vue 3</h2>
    <p class="display-angka">{{ count }}</p>
    <p>Nilai ini adalah bilangan: <strong>{{ statusGenapGanjil }}</strong></p>

    <div class="actions">
      <button @click="tambah" :disabled="count >= batasMaksimal">Tambah (+)</button>
      <button @click="count > 0 ? count-- : null">Kurang (-)</button>
      <button @click="reset" class="btn-reset">Reset</button>
    </div>
  </div>
</template>