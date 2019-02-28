import express from 'express'
import db from '../db'

const router = express.Router()

router.get('/', (req, res) => {
    const songs = db.getAllSongs()
    res.status(200).send({ data: songs })
})
router.get('/:id', (req, res) => {
    const { id } = req.params
    const song = db.getSongById(id)
    if (!song) {
        return res.status(404).send({ error: 'resource not found' })
    }

    res.status(200).send({ data: song })
})
export default router
