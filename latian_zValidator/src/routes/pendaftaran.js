import { Hono as server } from 'hono'
import { z } from 'zod'
import { zValidator as cekValidasi } from '@hono/zod-validator' 

const pendaftaran = new server()

pendaftaran.get('/', (info) => {
    return info.text('Server pendaftaran aktiv')
})

export default pendaftaran