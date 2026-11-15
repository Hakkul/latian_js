<script setup>

defineProps({
    daftarKategpri:{
        type: Array,
        required: true
    },
    kategoriAktiv: {
        type: String,
        required: true
    }

})
const emit = defineEmits(['pilih-kategori'])

</script>

<template>
    <div class="filter-kategori">
        <button
        v-for="kat in daftarKategpri"
        :key="kat"
        @click="kategoriAktiv"
        :class="{aktif: kategoriAktiv === kat}"
        class="btn-kategori"

        >
        {{ kat }}
    </button>
    </div>
</template>