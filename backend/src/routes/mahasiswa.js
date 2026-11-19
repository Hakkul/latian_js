import {Hono} from 'hono'

const mahasiswa = new Hono()

//alamat asli yang mengikuti prefix di index.ts
// mahasiswa.get("/", (c) => {
//     return c.json({ message: 'Daftar mahasiswa udah terdaftar'})
// })


// // Alamat asli menjadi api/siswa
// mahasiswa.get('/:id', (c) => {
//     const id = c.req.param('id')
//     return c.json({ message: `Detail mahasiswa ${id}`})
// })

// mahasiswa.get('/:no', (c) => {
//     const no = c.req.param('no')
//         return c.json({ message: `nomer mahasiswa ${no}`})
    
// })


let dataMahasiswa = [
    {id: 1, nim: 2002, nama: "Hakkul", prodi: "Teknik informatika"}
]

mahasiswa.get('/', (c) => {
    return c.json({ status: 'success', data: dataMahasiswa})
})

mahasiswa.post('/', async (c) => {
    const body = await c.req

    if (!body.nim || !body.nama) {
        return c.json({status: 'eror',  message: 'nama & nim wajib di isi'}, 400)
    
}
const mahasiswBaru = {
    id: dataMahasiswa.length + 1,
    nim: body.nim,
    nama: body.nama,
    prodi: body.prodi || 'teknik'  
}

dataMahasiswa.push(mahasiswBaru)

return c.json({
    status: 'succes',
    message: 'Data berhasil di tambah',
    data: mahasiswBaru
}, 201)
})



export default mahasiswa