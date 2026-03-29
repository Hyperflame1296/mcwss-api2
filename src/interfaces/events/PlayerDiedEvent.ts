/* import: local enumerators */
import { EntityDamageCause } from '../../enums/world/EntityDamageCause.js'

/* import: local interfaces */
import { EntityReference } from '../world/EntityReference.js'
import { Player } from '../world/Player.js'


/* declaration */
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