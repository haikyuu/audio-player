import express from 'express'
import { version } from '../package.json'
import songsRouter from './routes/songs'

const app = express()

app.get('/version', (req, res) => {
    res.send(version)
})

app.use('/songs', songsRouter)
export default app
