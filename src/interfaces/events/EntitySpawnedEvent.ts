/* import: local interfaces */
import { Player } from '../world/player/Player.js'

/* import: local enumerators */
import { EntitySpawnType } from '../../enums/world/entity/EntitySpawnType.js'

/* declaration */
export interface EntitySpawnedEvent {
    /**
     * The mob that has been spawned.
     */
    mob: {
        /**
         * The type of this mob.
         */
        type: number
    }
    /**
     * The player that spawned this entity.
     */
    player: Player
    /**
     * How this entity was spawned.
     */
    spawnType: EntitySpawnType
}