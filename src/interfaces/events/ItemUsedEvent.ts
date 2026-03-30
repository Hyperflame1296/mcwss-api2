/* import: local interfaces */
import { GameObjectType } from '../world/GameObjectType.js'
import { Player } from '../world/player/Player.js'

/* import: local enumerators */
import { ItemUseMethod } from '../../enums/world/item/ItemUseMethod.js'

/* declaration */
/**
 * Fires whenever the player uses an item.
 * - *This has not yet been verified to be recieved from other players.*
 */
export interface ItemUsedEvent {
    /**
     * The amount of items that have been used.
     */
    count: number
    /**
     * The item that has been used.
     */
    item: GameObjectType
    /**
     * The player that has used this item.
     */
    player: Player
    /**
     * The way that the player has used this item.
     */
    useMethod: ItemUseMethod
}