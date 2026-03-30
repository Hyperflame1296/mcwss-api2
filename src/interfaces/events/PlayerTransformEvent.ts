/* import: local interfaces */
import { Player } from '../world/player/Player.js'

/* declaration */
/**
 * Fires whenever a player moves.  
 * - *This event will only be recieved from other players if you are the host of the world.*
 */
export interface PlayerTransformEvent {
    /**
     * The player that has moved.
     */
    player: Player
}