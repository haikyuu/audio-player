import server from './src/server'

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
