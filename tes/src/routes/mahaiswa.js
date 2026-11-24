import { hono } from hono

const mahasiswa = new hono()


mahasiswa.get("/api/mahasiswa", (c) => {
  return c.text('API MAHASISWA DI TEMUKAN')
})

export default mahasiswa