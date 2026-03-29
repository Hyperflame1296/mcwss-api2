// import: classes
import { WebSocket } from 'ws'
import { EventEmitter } from 'node:events'

// import: constants
import color from 'cli-color'
import crypto from 'node:crypto'

// import: local interfaces
import { CommandOptions } from '../interfaces/CommandOptions.js'
import { MessageResponse } from '../interfaces/events/MessageResponse.js'
import { APIInstance } from '../index.js'

// code
export class Client extends EventEmitter {
    /**
     * Internal WebSocket connection.
     */
    ws: WebSocket
    /**
     * Internal API reference.
     */
    api: APIInstance
    constructor(ws: WebSocket, api: APIInstance) {
        super()
        this.ws = ws
        this.api = api

        this.ws.on('message', e => {
            let decoded = JSON.parse(new TextDecoder().decode(e as Buffer))
            switch (decoded.header.messagePurpose) {
                case 'event':
                    this.emit(decoded.header.eventName, decoded.body)
                    break
            }
        })
    }
    /**
     * Subscribe to an event. This will allow listeners for this event.
     * @param event The event to subscribe to.
     */
    subscribe(event: keyof MessageResponse) {
        // check if our WS is open
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return

        // send the message
        this.ws.send(JSON.stringify({
            header: {
                version: 42,
                requestId: crypto.randomUUID({ disableEntropyCache: true }),
                messageType: 'commandRequest',
                messagePurpose: 'subscribe'
            },
            body: {
                eventName: event
            }
        }))
    }
    /**
     * Unsubscribe from an event. Listeners for this event will be disabled.
     * @param event The event to unsubscribe from.
     */
    unsubscribe(event: keyof MessageResponse) {
        // check if our WS is open
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return

        // send the message
        this.ws.send(JSON.stringify({
            header: {
                version: 42,
                requestId: crypto.randomUUID({ disableEntropyCache: true }),
                messageType: 'commandRequest',
                messagePurpose: 'unsubscribe'
            },
            body: {
                eventName: event
            }
        }))
    }
    /**
     * Run an in-game command for this client.
     * @param command The command to run.
     * @param options The options of this command request.
     */
    runCommand(command: string, options: CommandOptions = {}) {
        // check if our WS is open
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return

        // send the message
        this.ws.send(JSON.stringify({
            header: {
                version: options?.commandVersion ?? 42,
                requestId: crypto.randomUUID({ disableEntropyCache: true }),
                messagePurpose: 'commandRequest'
            },
            body: {
                commandLine: command,
                origin: typeof options?.originType !== 'undefined' ? { type: options.originType } : undefined
            }
        }))
    }
    /**
     * Run an in-game command for this client. This will also provide the command response.
     * @param {string} command The command to run.
     * @param {CommandOptions} options The options for this command request.
     */
    runCommandAsync(command: string, options?: CommandOptions): Promise<object> | Promise<object[]> {
        return new Promise((resolve, reject) => {
            try {
                // Generate a random UUID. This is used to identify responses to the request later.
                let requestId = crypto.randomUUID({ disableEntropyCache: true })

                // Send our message with the UUID
                this.ws.send(JSON.stringify({
                    header: {
                        
                        version: options?.commandVersion,
                        messagePurpose: 'commandRequest'
                    },
                    body: {
                        commandLine: command,
                        origin: typeof options?.originType !== 'undefined' ? { type: options.originType } : undefined
                    }
                }))

                // make a handler for the message and recieve it
                let handler = (e: WebSocket.RawData) => {
                    // decode the message's data
                    let message = JSON.parse(this.api.decoder.decode(e as Buffer))

                    // check if the UUID is the same as the oen given
                    if (message.header.requestId === requestId) {
                        // check to see if the message is an error message
                        if (message.body.statusCode < 0 && this.api.options.logging?.commandError)
                            console.error(this.api.tags.error + `${color.whiteBright(message.body.statusMessage) ?? 'A command response error has been sent.'} | ${color.yellowBright(message.body.statusCode.toString())}`)
                        
                        // remove listener
                        this.ws.off('message', handler)

                        // resolve the Promise
                        resolve(message)
                    }
                }

                // create listener
                this.ws.on('message', handler)
            } catch (err) {
                reject(this.api.tags.error + `\'Client.${this.runCommandAsync.name}()\' - ${color.whiteBright(err.message)}\n${err.stack}`)
            }
        })
    }
    /**
     * Get the data for all entities supported by this client.
     * @param {CommandOptions} options The options for this command request.
     */
    getMobData(options?: CommandOptions) {
        return new Promise((resolve, reject) => {
            try {
                // Generate a random UUID. This is used to identify responses to the request later.

                let requestId = crypto.randomUUID({ disableEntropyCache: true })

                // Send our message with the UUID
                this.ws.send(JSON.stringify({
                    header: {
                        // currently looking at v1's code bc i forgot how it works
                        version: options?.commandVersion,
                        messagePurpose: 'data:mob',
                        requestId
                    },
                }))

                // make a handler for the message and recieve it
                let handler = (e: WebSocket.RawData) => {
                    // decode the message's data
                    let message = JSON.parse(this.api.decoder.decode(e as Buffer))

                    // check if the UUID is the same as the oen given
                    if (message.header.requestId === requestId) {
                        // check to see if the message is an error message
                        if (message.body.statusCode < 0 && this.api.options.logging?.commandError)
                            console.error(this.api.tags.error + `${color.whiteBright(message.body.statusMessage) ?? 'A command response error has been sent.'} | ${color.yellowBright(message.body.statusCode.toString())}`)
                        
                        // remove listener
                        this.ws.off('message', handler)

                        // resolve the Promise
                        resolve(message.body)
                    }
                }

                // create listener
                this.ws.on('message', handler)
            } catch (err) {
                reject(this.api.tags.error + `\'Client.${this.runCommandAsync.name}()\' - ${color.whiteBright(err.message)}\n${err.stack}`)
            }
        })
    }
}