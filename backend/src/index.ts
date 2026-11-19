import { Hono } from 'hono'
// @ts-ignore
import mahasiswaRoute from './routes/mahasiswa.js' 
// @ts-ignore
import siswaJosjis from './routes/siswa.js'
// @ts-ignore
import Dosen from './routes/dosen.js'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Server API Aktif')
})

// Menghubungkan semua rute di mahasiswa.js ke awalan /api/mahasiswa
app.route('/api/mahasiswa', mahasiswaRoute)
app.route('/api/siswa', siswaJosjis)
app.route('/dos/dosen', Dosen)

export default app