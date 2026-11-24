import { hono } from hono

const dosen = new hono()

dosen.get("/api/Dosen", (c) => {
  return c.json({
    staus: "API DOSEN DI TEMUKAN"
  })

})


export default dosen