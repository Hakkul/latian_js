// Live Demo Code: src/routes/mahasiswa.js
import { Hono } from "hono"

const editMhs = new Hono()

let dataMahasiswa = [
  { nim: "240511001", nama: "Budi Santoso", prodi: "TI" },
  { nim: "240511002", nama: "Siti Rahma", prodi: "TI" },
  { nim: "202569040005", nama: "Hakkul", prodi: "TI" }

]

// app.get('/', (c) => {
//     return c.json({
//         status: "aman"
//     })
// })

// GET dengan Query Param: /api/mahasiswa?prodi=TI
editMhs.get("/", (c) => {
  const prodiFilter = c.req.query("prodi")
  if (prodiFilter) {
    const hasil = dataMahasiswa.filter(m => m.prodi === prodiFilter)
    return c.json({ data: hasil, total: hasil.length })
  }
  return c.json({ data: dataMahasiswa, total: dataMahasiswa.length })
})

// GET dengan Path Param: /api/mahasiswa/:nim
editMhs.get("/nim/:nim", (c) => {
  const nim = c.req.param("nim")
  const mhs = dataMahasiswa.find(m => m.nim === nim)
  if (!mhs) {
    return c.json({ error: "Mahasiswa tidak ditemukan" }, 404)
  }
  return c.json({ data: mhs })
})

editMhs.get("/nama/:nama", (c) => {
  const nama = c.req.param("nama").toLocaleLowerCase()
  const mhs = dataMahasiswa.find(m => m.nama.toLocaleLowerCase() === nama)
  if (!mhs) {
    return c.json({ error: "Mahasiswa tidak ditemukan" }, 404)
  }
  return c.json({ data: mhs })
})

// POST: Tambah Mahasiswa Baru
// app.post("/", async (c) => {
//   const body = await c.req.json()
//   dataMahasiswa.push(body)
//   return c.json({ pesan: "Berhasil menambahkan mahasiswa", data: body }, 201)
// })

editMhs.post("/", async (c) => {
  const body = await c.req.json()

  // Cegah data kosong masuk
  if (!body.nim || !body.nama) {
    return c.json({ pesan: "NIM dan Nama wajib diisi" }, 400)
  }

  const dataBaru = {
    // id: dataMahasiswa.length + 1,
    nim: body.nim,
    nama: body.nama,
    prodi: body.prodi || "Teknik Informatika"
  }

  dataMahasiswa.push(dataBaru)
  return c.json({ pesan: "Berhasil menambahkan mahasiswa", data: dataBaru }, 201)
})

//edit mahasiswa
editMhs.put('/:nim', async (c) => {
  const nim = c.req.param('nim')
  const body = await c.req.json()

  // Cari posisi index mahasiswa di dalam array
  const index = dataMahasiswa.findIndex(m => String(m.nim) === nim)

  if (index === -1) {
    return c.json({ pesan: 'Mahasiswa tidak ditemukan' }, 404)
  }

  // Perbarui data (jika field baru tidak dikirim, pertahankan data lama)
  dataMahasiswa[index] = {
    ...dataMahasiswa[index],
    nama: body.nama || dataMahasiswa[index].nama,
    prodi: body.prodi || dataMahasiswa[index].prodi
  }

  return c.json({
    pesan: 'Data mahasiswa berhasil diperbarui',
    data: dataMahasiswa[index]
  })
})

export default editMhs
