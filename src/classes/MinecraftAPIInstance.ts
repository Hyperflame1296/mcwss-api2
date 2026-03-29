// import: classes
import { WebSocket, WebSocketServer } from 'ws'
import { EventEmitter } from 'node:events'

// import: constants
import color from 'cli-color'
import crypto from 'node:crypto'

// import: local interfaces
import { MinecraftAPIOptions } from '../interfaces/MinecraftAPIOptions.js'
import { CommandOptions } from '../interfaces/CommandOptions.js'

// import: local classes
import { Client } from './Client.js'

// code
/**
 * An instance of the API.
 */
export class MinecraftAPIInstance extends EventEmitter {
    /**
     * The WebSocket server.
     */
    wss: WebSocketServer
    /**
     * All of the clients connected to the server.
     */
    clients: Client[]
    /**
     * Options for the API.
     */
    options: MinecraftAPIOptions
    /**
     * Whether the API is started or not.
     */
    started: boolean
    /**
     * Internal text decoder.
     */
    decoder: TextDecoder
    /**
     * Internal message tags.
     */
    tags = {
        info: `[${color.cyanBright('INFO')}] - `,
        warning: `[${color.yellowBright('WARNING')}] - `,
        error: `[${color.redBright('ERROR')}] - `
    }
    constructor() {
        super()
        this.started = false
    }
    /**
     * Starts the API.
     * @param {string} url The URL that the API hosts at.
     * @param {APIOptions} options API options.
     */
    start(port: number, host: string, options: MinecraftAPIOptions): void {
        this.started = true
        this.options = {
            logging: {
                info: options?.logging?.info ?? false,
                warning: options?.logging?.warning ?? true,
                error: options?.logging?.error ?? true,
                commandError: options?.logging?.commandError ?? true
            }
        }
        this.decoder = new TextDecoder()
        this.wss = new WebSocketServer({
            port,
            host: host ?? '127.0.0.1'
        })
        this.clients = []
        this.wss.on('connection', stream => {
            let cl = new Client(stream, this)
            cl.ws.on('close', () => this.clients.splice(this.clients.indexOf(cl), 1))
            this.clients.push(cl)
        })
    }
    /**
     * Stops the API.
     */
    stop(): void {
        if (!this.started && this.options.logging.warning)
            return console.warn(this.tags.warning + `\'api.%s()\' - Method stop() called while the API isn\'t currently started.`, this.stop.name)
        this.wss.close()
        this.wss = undefined
        this.started = false
    }
    /**
     * Run an in-game command for all clients.
     * @param {string} command The command to run.
     * @param {CommandOptions} options The options of this command request.
     */
    runCommand(command: string, options: CommandOptions = {}): void {
        try {
            for (let client of this.wss.clients) {
                client.send(JSON.stringify({
                    header: {
                        version: options?.commandVersion,
                        requestId: crypto.randomUUID({ disableEntropyCache: true }),
                        messagePurpose: 'commandRequest'
                    },
                    body: {
                        commandLine: command,
                        origin: typeof options?.originType !== 'undefined' ? { type: options.originType } : undefined
                    }
                }))
            }
        } catch (err) {
            if (this.options.logging.error)
                console.error(this.tags.error + `\'api.%s()\' - ${color.whiteBright(err.message)}\n${err.stack}`, this.runCommand.name)
        }
    }
    /**
     * Run an in-game command for all clients. This will also provide an array of command responses.
     * @param {string} command The command to run.
     * @param {CommandOptions} options The options of this command request.
     */
    runCommandAsync(command: string, options?: CommandOptions): Promise<object[]> {
        return new Promise((resolve, reject) => {
            try {
                let final = []
                for (let client of this.wss.clients) {
                    let isLast = [...this.wss.clients].indexOf(client) === this.wss.clients.size - 1
                    let requestId = crypto.randomUUID({ disableEntropyCache: true })
                    client.send(JSON.stringify({
                        header: {
                            version: options?.commandVersion,
                            requestId,
                            messagePurpose: 'commandRequest'
                        },
                        body: {
                            commandLine: command,
                            origin: typeof options?.originType !== 'undefined' ? { type: options.originType } : undefined
                        }
                    }))
                    let handler = (e: WebSocket.RawData) => {
                        let message = JSON.parse(this.decoder.decode(e as Buffer))
                        if (message.header.requestId === requestId) {
                            final.push(message)
                            if (isLast)
                                resolve(final)
                            if (message.body.statusCode < 0 && this.options.logging.commandError)
                                console.error(this.tags.error + `${color.whiteBright(message.body.statusMessage) ?? 'A command response error has been sent.'} | ${color.yellowBright(message.body.statusCode.toString())}`)
                            client.off('message', handler)
                        }
                    }
                    client.on('message', handler)
                }
            } catch (err) {
                reject(this.tags.error + `\'api.${this.runCommandAsync.name}()\' - ${color.whiteBright(err.message)}\n${err.stack}`)
            }
        })
    }
}