// Live Demo Code: src/routes/artikel.js
import { Hono } from "hono"
import { z } from "zod"
import { zValidator } from "@hono/zod-validator"

const artikelApp = new Hono()

const daftarArtikel = []

const artikelSchema = z.object({
  judul: z.string().min(5, "Judul minimal 5 karakter").max(100),
  konten: z.string().min(20, "Konten minimal 20 karakter"),
  kategori: z.enum(["Teknologi", "Akademik", "Prestasi"]),
  tags: z.array(z.string()).min(1, "Minimal 1 tag")
})

artikelApp.get("/", (c) => {
  return c.json({
    sukses: true,
    total: daftarArtikel.length,
    data: daftarArtikel
  })
})

artikelApp.post("/", zValidator("json", artikelSchema, (result, c) => {
  if (!result.success) {
    return c.json({
      sukses: false,
      pesan: "Validasi data gagal",
      error: result.error.flatten().fieldErrors
    }, 400)
  }
}), async (c) => {
  const dataBersih = c.req.valid("json")
  
  return c.json({
    sukses: true,
    pesan: "Artikel berhasil disimpan",
    data: { id: Date.now(), ...dataBersih }
  }, 201)
})

export default artikelApp

