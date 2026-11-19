import { Hono } from 'hono'
// @ts-ignore
import mahasiswaRoute from './routes/mahasiswa.js' 

const app = new Hono()

app.get('/', (c) => {
  return c.text('Server API Aktif')
})

// Menghubungkan semua rute di mahasiswa.js ke awalan /api/mahasiswa
app.route('/api/mahasiswa', mahasiswaRoute)

export default app