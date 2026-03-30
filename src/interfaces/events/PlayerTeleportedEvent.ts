/* import: local enumerators */
import { PlayerTeleportCause } from '../../enums/world/player/PlayerTeleportCause.js'

/* import: local interfaces */
import { Player } from '../world/player/Player.js'

/* declaration */
/**
 * Fires whenever the player teleports.
 * - *This event will not be recieved from other players.*
 */
export interface PlayerTeleportedEvent {
    /**
     * The cause of this player being teleported.
     */
    cause: PlayerTeleportCause
    /**
     * The item that this player has used to teleport. 
     * - If player didn't use an item, it defaults to `1`.
     */
    itemType: number
    /**
     * How many blocks this player has teleported.
     */
    metersTravelled: number
    /**
     * The player that has teleported.
     */
    player: Player
}