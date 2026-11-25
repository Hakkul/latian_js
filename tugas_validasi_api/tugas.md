File rute baru (src/routes/auth.js atau .ts)
Wadah khusus untuk menangani fitur pendaftaran akun supaya kodenya rapi dan terpisah dari file utama.

Skema validasi Zod (registerSchema)
Buku aturan untuk mengecek 4 input wajib: nama (teks minimal 3 karakter), email (format email valid), password (teks minimal 8 karakter), dan umur (angka minimal 17).

Handler POST /register dengan zValidator
Pintu penerima data JSON yang langsung mencegat input salah dengan status 400 beserta rincian .flatten().fieldErrors, dan membalas status 201 kalau datanya lolos semua.

Penyambung rute di src/index.ts
Baris app.route("/api/auth", authApp) untuk menggabungkan awalan /api/auth dengan /register sehingga terbentuk alamat lengkap POST /api/auth/register.