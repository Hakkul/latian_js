import { Hono } from "hono"
// @ts-ignore
import info from './routes/info.js'
// @ts-ignore
import dosen from './routes/dosen.js'
// @ts-ignore
import kampus from './routes/kampus.js'
// @ts-ignore'
import mahasiswa from './routes/mahasiswa.js'

const app = new Hono()

// Root Endpoint
app.get("/", (c) => {
  return c.text("Selamat Datang di REST API Hono - Universitas Yudharta Pasuruan!")
})

app.route('/api/info', info)  //Mengarah ke API INFO

app.route('/api/dosen', dosen)   //Mengarah ke API dosen

app.route('/api/kampus', kampus)  //Mengarah ke API kampus

app.route('/api/mahasiswa', mahasiswa)  //Mengarah ke API Mahasiswa



export default app