import songs from './songs.json'

// put export in top of the file so that
// it's easier to peek at the file and see its contents
module.exports = { getAllSongs, getSongById }

function getAllSongs() {
    return songs.ids.map(id => songs.data[id])
}
function getSongById(id) {
    return songs.data[id]
}
