/* import: local interfaces */
import { Vector3 } from '../math/Vector3.js'
import { Entity } from '../world/Entity.js'
import { Player } from '../world/Player.js'

/* import: local enumerators */
import { PlayerTravelMethod } from '../../enums/world/PlayerTravelMethod.js'

/* declaration */
export interface PlayerTravelledEvent {
    isUnderwater: boolean
    metersTravelled: number
    newBiome: 0 | 1
    player: Player
    travelMethod: PlayerTravelMethod
    vehicle?: Entity
}