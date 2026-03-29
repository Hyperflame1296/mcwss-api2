/* import: local interfaces */
import { PlayerTeleportCause } from '../../enums/world/PlayerTeleportCause.js'
import { Vector3 } from '../math/Vector3.js'
import { Player } from '../world/Player.js'


/* declaration */
export interface PlayerTeleportedEvent {
    cause: PlayerTeleportCause
    itemType: number
    metersTravelled: number
    player: Player
}