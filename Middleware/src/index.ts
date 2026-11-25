import { Hono } from "hono"
import { cors } from "hono/cors"
import { logger } from "hono/logger"
import { prettyJSON } from "hono/pretty-json"
// @ts-ignore
import artikelApp from "./routes/artikel.js"


const app = new Hono()

// Global Middleware Pipeline
app.use("*", cors({
  origin: ["http://localhost:5173", "https://yudharta.ac.id"],
  allowMethods: ["GET", "POST", "PUT", "DELETE"],
  allowHeaders: ["Content-Type", "Authorization"]
}))
app.use("*", logger())
app.use("*", prettyJSON())

// Custom Execution Time Middleware
app.use("*", async (c, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  c.res.headers.set("X-Response-Time", ms + "ms")
  console.log("[Timer] " + c.req.method + " " + c.req.url + " selesai dalam " + ms + "ms")
})
app.route("/api/artikel", artikelApp)

export default app

