import { Hono } from 'hono'

export const authRoutes = new Hono()

authRoutes.basePath('/v1/auth').post('/login', (c) => c.text('text 1'))
