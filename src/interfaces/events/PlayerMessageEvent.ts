/* import: local types */
import { PlayerMessageType } from '../../types/PlayerMessageType.js'

/* declaration */
export interface PlayerMessageEvent {
    /**
     * The message that has been sent.
     */
    message: string
    /**
     * The person who is recieving this message.
     * - If there is no specific reciever, this will be an empty string.
     */
    receiver: string
    /**
     * The name of the person who has sent this message.
     */
    sender: string
    /**
     * The type of this message.
     */
    type: PlayerMessageType
}