import { Hono } from 'hono'
import { authRoutes } from './modules/Auth/routes'

const app = new Hono()

app.route('/api', authRoutes)

export default {
	port: 3000,
	fetch: app.fetch
}
