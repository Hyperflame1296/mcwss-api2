/* import: local interfaces */
import { Entity } from '../world/entity/Entity.js'
import { Player } from '../world/player/Player.js'

/* import: local enumerators */
import { PlayerTravelMethod } from '../../enums/world/player/PlayerTravelMethod.js'

/* declaration */
/**
 * Fires whenever the player sends a message.  
 * - *This event will not be recieved from other players.*
 */
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