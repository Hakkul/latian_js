<script setup>

defineProps({
    daftarKategori:{
        type: Array,
        required: true
    },
    kategoriAktif: {
        type: String,
        required: true
    }
    // daftarKategori: Array,
    // kategoriAktif: String

})
const emit = defineEmits(['pilih-kategori'])

</script>

<template>
    <div class="filter-kategori">
        <button
        v-for="kat in daftarKategori"
        :key="kat"
        @click="emit('pilih-kategori, kat')"
        :class="{aktif: kategoriAktif === kat}"
        class="btn-kategori"

        >
        {{ kat }}
    </button>
    </div>
</template>