import { MinecraftAPIInstance } from './dist/index.js'
let api = new MinecraftAPIInstance()

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
    client.subscribe('PlayerBounced')
    console.log(await client.getAllItemTypes())
})