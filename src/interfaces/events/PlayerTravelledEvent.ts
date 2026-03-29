/* import: local interfaces */
import { Entity } from '../world/Entity.js'
import { Player } from '../world/Player.js'

/* import: local enumerators */
import { PlayerTravelMethod } from '../../enums/world/PlayerTravelMethod.js'

/* declaration */
export interface PlayerTravelledEvent {
    /**
     * Whether this player is underwater or not.
     */
    isUnderwater: boolean
    /**
     * How many blocks this player has travelled since the last event.
     */
    metersTravelled: number
    /**
     * Whether this player has entered a new biome or not.
     */
    newBiome: 0 | 1
    /**
     * The player that has travelled.
     */
    player: Player
    /**
     * The way that this player has travelled.
     */
    travelMethod: PlayerTravelMethod
    /**
     * The vehicle that this player is riding.
     */
    vehicle?: Entity
}