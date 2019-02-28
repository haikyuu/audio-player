import express from 'express'
import db from '../db'

const router = express.Router()

router.get('/', (req, res) => {
    const songs = db.getAllSongs()
    res.status(200).send(songs)
})
router.get('/:id', (req, res) => {
    const { id } = req.params
    const song = db.getSongById(id)
    res.status(200).send(song)
})
export default router
