/* import: local interfaces */
import { Block } from '../world/Block.js'
import { Player } from '../world/Player.js'


/* declaration */
export interface PlayerBouncedEvent {
    /**
     * The type of the block that this player has bounced on.
     */
    block: Block
    /**
     * How high this player has bounced.
     */
    bounceHeight: number
    /**
     * The player that has bounced.
     */
    player: Player
}