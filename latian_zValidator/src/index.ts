import { Hono } from 'hono'
// @ts-ignore
import pendaftaranApp from './routes/pendaftaran.js'

const server = new Hono()

server.get('/', (info) => {
  return info.text('Server Hono aktiv')
})

server.route('/api/pendaftaran', pendaftaranApp)

export default server
