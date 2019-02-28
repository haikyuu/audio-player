import server from './src/server'
import { loadDb } from './src/db'
import songs from './src/db/songs.json'

const port = process.env.PORT || 3000

loadDb(songs)

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
