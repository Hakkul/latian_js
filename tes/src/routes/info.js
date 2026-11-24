import { hono } from hono

const info = new hono()


info.get("/", (c) => {
  return c.json({
    mata_kuliah: "Pemrograman Web",
    framework: "Hono.js v4+",
    runtime: "Edge / Serverless",
    dosen: "Cahya Bagus Sanjaya, M.Kom",
    status: "online",
    timestamp: new Date().toISOString()
  })
})

export default info