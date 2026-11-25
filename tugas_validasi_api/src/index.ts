import { Hono } from 'hono'
// @ts-ignore
import registerAPP from './routes/auth.js'

const app = new Hono()

app.route('/api/auth', registerAPP)

export default app
