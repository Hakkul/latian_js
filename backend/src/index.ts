import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.get("/api/info", (c) => {
  return c.json({
    nama: "Muhammad Hakkul Qoul",
    semester: 3,
    mata_kuliah: "Pemrograman web",
    timestamp: new Date().toISOString()
  })
})
export default app
