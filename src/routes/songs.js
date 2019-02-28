import express from 'express'
import { getAllSongs, getSongById, getSongFile } from '../db'

const router = express.Router()

router.get('/', (req, res) => {
    const songs = getAllSongs()
    res.status(200).send({ data: songs })
})
router.get('/:id', (req, res) => {
    const { id } = req.params
    const song = getSongById(id)
    if (!song) {
        return res.status(404).send({ error: 'resource not found' })
    }

    res.status(200).send({ data: song })
})
router.get('/:id/file', (req, res) => {
    const { id } = req.params
    const songFile = getSongFile(id)
    if (!songFile) {
        return res.status(404).send({ error: 'resource not found' })
    }

    res.status(200).sendFile(songFile, { root: 'src/assets/' })
})
export default router
