import { Hono } from "hono"

const namaDosen = new Hono()

let dosen = [
    {id: 1, nama: "Pak cb", matkul: "Pemrograman web", hari: "senin"},
    {id: 2, nama: "Pak zulham", matkul: "Jaringan Komputer", hari: "senin"},
    {id: 3, nama: "Pak syar", matkul: "Basis data", hari: "senin"},
    {id: 4, nama: "Pak faishol", matkul: "Algoritma", hari: "senin"},
    {id: 5, nama: "Pak arip tri", matkul: "interaksi komputer", hari: "senin"}

]

//ambil semua API dosen
app.get('/api/dosen', (info) => {
    return info.json({
        status: "sukses",
        sen: dosen

    })
})

app.get('/api/dosen/:id', (info) => {
    const id = Number(info.req.param('id'))

    return info.json({
        sukses: 'sukses'
    })
})
export default namaDosen