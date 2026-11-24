import { hono } from hono

const kampus = new hono()


kampus.get("/api/kampus", (c) => {
  return c.text("API KAMPUS DI TEMUKAN")
})

export default kampus