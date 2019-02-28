import express from 'express'
import { version } from '../package.json'

const app = express()

app.get('/version', (req, res) => {
    res.send(version)
})

export default app
