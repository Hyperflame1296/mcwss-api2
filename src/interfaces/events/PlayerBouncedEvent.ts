/* import: local interfaces */
import { GameObjectType } from '../world/GameObjectType.js'
import { Player } from '../world/player/Player.js'


/* declaration */
/**
 * Fires whenever the player bounces. (e.g. on a Slime Block)
 * - *This has not yet been verified to be recieved from other players.*
 */
export interface PlayerBouncedEvent {
    /**
     * The type of the block that this player has bounced on.
     */
    block: GameObjectType
    /**
     * How high this player has bounced.
     */
    bounceHeight: number
    /**
     * The player that has bounced.
     */
    player: Player
}