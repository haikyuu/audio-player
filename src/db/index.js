let SONGS

// put export in top of the file so that
// it's easier to peek at the file and see its contents
module.exports = { loadDb, getAllSongs, getSongById, getSongFile }

// run at startup and during tests
function loadDb(data) {
    SONGS = data
}
function getAllSongs() {
    return SONGS.ids.map(id => SONGS.data[id])
}
function getSongById(id) {
    return SONGS.data[id]
}
function getSongFile(id) {
    const song = getSongById(id)
    if (song) {
        return song.filename
    }
}
