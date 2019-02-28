import { getAllSongs, getSongById, getSongFile, loadDb } from './'
import SONGS from './songs.json'
import { expect } from 'chai'

// can change data at will in tests
// using "production" data ^^' by default
loadDb(SONGS)

describe('getting songs metadata', () => {
    describe('get all songs', () => {
        it('should return all songs', () => {
            const songs = getAllSongs()
            expect(songs)
                .to.be.an('array')
                .that.has.length(2)
        })
    })

    describe('get song by id', () => {
        it('gets actual song if exists', () => {
            const song = getSongById('1')
            expect(song).to.have.property('id', '1')
        })
        it('returns undefined for not found songs', () => {
            const song = getSongById('4')
            expect(song).to.be.a('undefined')
        })
    })
    describe('get song file by id', () => {
        it('gets actual song if exists', () => {
            const songFile = getSongFile('1')
            expect(songFile).to.equal('1.mp3')
        })
        it('returns undefined for not found songs', () => {
            const song = getSongById('4')
            expect(song).to.be.a('undefined')
        })
    })
})
