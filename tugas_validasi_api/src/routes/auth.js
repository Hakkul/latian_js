import { Hono } from 'hono'
import { z } from "zod"
import { zValidator } from '@hono/zod-validator'


const app = new Hono()

const register = z.object({
    nama: z.string().min(3, "Nama minimal 3 karakter"),
    email: z.string().email("Format email tidak valid"),
    password: z.string().min(8, "Password minal 8 karakter"),
    umur: z.number().min(17, "Umur minimal 17 tahun")
})

const users = []

app.get('/', (info) => {
    return info.text('API Register aktiv')
})

app.get('/register', (c) => {
    return c.text('register aman')
})

app.get('/data', (c) => {
    return c.json({
        sukses: true,
        total: users.length,
        dataUsers: users
    })
})

app.post('/register', zValidator("json", register, (hasil, info) => {
    if (!hasil.success) {
        return info.json({
            sukses: false,
            pesan: "Validasi data gagal",
            eror: hasil.error.flatten().fieldErrors
        }, 400)
    }
}), async (info) => {
    const dataValid = info.req.valid("json")

    return info.json({
        sukses: true,
        pesan: "semua data sesuai",
        data: { id: Date.now(), ...dataValid},
        dataUsers: users

    },201 )
})

export default app