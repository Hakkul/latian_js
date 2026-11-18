// Live Demo Code: src/routes/mahasiswa.js
import { Hono } from "hono"

const app = new Hono()

const dataMahasiswa = [
  { nim: "240511001", nama: "Budi Santoso", prodi: "TI" },
  { nim: "240511002", nama: "Siti Rahma", prodi: "TI" }
]

// GET dengan Query Param: /api/mahasiswa?prodi=TI
app.get("/api/mahasiswa", (c) => {
  const prodiFilter = c.req.query("prodi")
  if (prodiFilter) {
    const hasil = dataMahasiswa.filter(m => m.prodi === prodiFilter)
    return c.json({ data: hasil, total: hasil.length })
  }
  return c.json({ data: dataMahasiswa, total: dataMahasiswa.length })
})

// GET dengan Path Param: /api/mahasiswa/:nim
app.get("/api/mahasiswa/:nim", (c) => {
  const nim = c.req.param("nim")
  const mhs = dataMahasiswa.find(m => m.nim === nim)
  if (!mhs) {
    return c.json({ error: "Mahasiswa tidak ditemukan" }, 404)
  }
  return c.json({ data: mhs })
})

// POST: Tambah Mahasiswa Baru
app.post("/api/mahasiswa", async (c) => {
  const body = await c.req.json()
  dataMahasiswa.push(body)
  return c.json({ pesan: "Berhasil menambahkan mahasiswa", data: body }, 201)
})

export default app
