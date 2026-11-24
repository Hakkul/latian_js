import { Hono } from "hono";

const peminjaman = new Hono ()

let dataPeminjaman = [
    {id: 1, namaPeminjam: "Rizky", judulBuku: "ALgoritma pemrograman", status: "Dipinjam"},
    {id: 2, namaPeminjam: "siti", judulBuku: "Basis Data", status: "Dikembalikan"},
]

peminjaman.get('/', (infoPeminjaman) => {
    const dataPeminjam = infoPeminjaman.req.query("namaPeminjambr")

})