import {Hono} from 'hono'

const mahasiswa = new Hono()

//alamat asli yang mengikuti prefix di index.ts
mahasiswa.get("/", (c) => {
    return c.json({ message: 'Daftar mahasiswa udah terdaftar'})
})


// Alamat asli menjadi api/siswa
mahasiswa.get('/:id', (c) => {
    const id = c.req.param('id')
    return c.json({ message: `Detail mahasiswa ${id}`})
})

mahasiswa.get('/:no', (c) => {
    const no = c.req.param('no')
        return c.json({ message: `nomer mahasiswa ${no}`})
    
})

export default mahasiswa