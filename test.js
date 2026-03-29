import { APIInstance } from './dist/index.js'
let api = new APIInstance()

api.start(4000, '127.0.0.1', {
    commandVersion: 1,
    logging: {
        info: true,
        warning: true,
        error: true,
        commandError: true
    }
})
api.wss.on('connection', async stream => {
    let client = api.clients[0]
    client.subscribe('PlayerTeleported')

    client.on('PlayerTeleported', e => {
        console.log(e)
    })
})