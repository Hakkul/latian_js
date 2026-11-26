import { Hono as server } from 'hono'
import { z as s } from 'zod'
import { zValidator as cekValidasi } from '@hono/zod-validator' 

//membuat variable untuk hono
const pendaftaran = new server()

//Membuat variable penyimpanan
const simpanPendaftaran = []

// aturan zValidator
const rulePendfataran = s.object({
   nama: s.string().min(5, "Minimal 5 karakter").max(100),
   alamat: s.string().min(7, "Masukan alamat dengan 7 karakter").max(50),
   noHp: s.string().min(10, "Masukan dengan minimal 10 angka").max(16)

})

// rute post
pendaftaran.post('/', cekValidasi("json", rulePendfataran, (hasil, info) => {
    if(!hasil.success) {
        return info.json({
            status: false,
            pesan: "Validasi data tidak sesuai",
            eror: hasil.error.flatten().fieldErrors
        }, 400)
    }
}), async (info) => {
    const dataAman = info.req.valid("json")
    return info.json({
        status: true,
        pesan: "Pendfataran berhasil disimpan",
        data: {id: Date.now(), ...dataAman}
    })
}
)

// rute get
pendaftaran.get('/', (info) => {
    return info.json({
        pesan: true,
        total: simpanPendaftaran.length,
        data: pendaftaran
    })
})

// export variable agar bisa jalan
export default pendaftaran