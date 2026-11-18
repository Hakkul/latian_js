import { Hono } from 'hono'

const app = new Hono()

// Koleksi data inventaris laboratorium (disimpan sementara di memori)
let inventaris = [
  { id: 1, nama: 'Komputer PC Lab 1', kategori: 'Komputer', jumlah: 25, kondisi: 'Baik' },
  { id: 2, nama: 'Proyektor Epson EB-X500', kategori: 'Proyektor', jumlah: 2, kondisi: 'Baik' },
  { id: 3, nama: 'Switch Cisco 24 Port', kategori: 'Switch', jumlah: 4, kondisi: 'Baik' },
  { id: 4, nama: 'Router Mikrotik RB750Gr3', kategori: 'Router', jumlah: 3, kondisi: 'Rusak Ringan' }
]

// 1. Endpoint GET semua data inventaris
app.get('/api/inventaris', (c) => {
  return c.json({
    status: 'success',
    total: inventaris.length,
    data: inventaris
  })
})

// 2. Endpoint GET detail satu barang berdasarkan ID
app.get('/api/inventaris/:id', (c) => {
  const id = Number(c.req.param('id')) // Mengambil parameter :id dari URL
  const barang = inventaris.find((item) => item.id === id)

  if (!barang) {
    return c.json({ status: 'error', message: 'Barang tidak ditemukan' }, 404)
  }

  return c.json({
    status: 'success',
    data: barang
  })
})

// 3. Endpoint POST untuk menambah barang baru
app.post('/api/inventaris', async (c) => {
  const body = await c.req.json() // Membaca data JSON yang dikirim pengguna

  // Validasi sederhana
  if (!body.nama || !body.kategori) {
    return c.json({ status: 'error', message: 'Nama dan kategori wajib diisi' }, 400)
  }

  const barangBaru = {
    id: inventaris.length + 1,
    nama: body.nama,
    kategori: body.kategori,
    jumlah: body.jumlah || 1,
    kondisi: body.kondisi || 'Baik'
  }

  inventaris.push(barangBaru)

  return c.json({
    status: 'success',
    message: 'Barang berhasil ditambahkan',
    data: barangBaru
  }, 201)
})

export default app