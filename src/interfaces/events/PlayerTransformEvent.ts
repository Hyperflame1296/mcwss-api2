/* import: local interfaces */
import { Player } from '../world/Player.js'

/* declaration */
export interface PlayerTransformEvent {
    /**
     * The player that has moved.
     */
    player: Player
}