import { Hono } from "hono"

const namaDosen = new Hono()

namaDosen.get('/', (info) => {
    return info.json({
        nama: "Pak CB",
        matakul : "Pemrograman web",
        hari: "Senin"
    })
})

export default namaDosen