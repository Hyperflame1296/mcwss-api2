/* import: local enumerators */
import { EntityDamageCause } from '../../enums/world/entity/EntityDamageCause.js'

/* import: local interfaces */
import { EntityReference } from '../world/entity/EntityReference.js'
import { Player } from '../world/player/Player.js'


/* declaration */
/**
 * Fires whenever the player dies.
 * - *This has not yet been verified to be recieved from other players.*
 */
export interface PlayerDiedEvent {
    /**
     * The damage that caused this player to die.
     */
    cause: EntityDamageCause
    /**
     * Whether this player is currently in a raid or not.
     */
    inRaid: boolean
    /**
     * A reference to the entity that killed this player.
     */
    killer: EntityReference
    /**
     * The player that has died.
     */
    player: Player
}