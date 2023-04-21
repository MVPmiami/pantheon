import express from 'express'
import bodyParser from 'body-parser'
import authentication from './auth.js'

const app: express.Application = express()
app.use(bodyParser.json({ limit: '10mb' }))

app.use('/api/auth', authentication)

export default app
