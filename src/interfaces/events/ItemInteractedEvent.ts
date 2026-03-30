/* import: local interfaces */
import { Player } from '../world/player/Player.js'
import { ItemStack } from '../world/item/ItemStack.js'

/* import: local enumerators */
import { ItemInteractMethod } from '../../enums/world/item/ItemInteractMethod.js'

/* declaration */
/**
 * Fires whenever the player uses an item.
 * - *This has not yet been verified to be recieved from other players.*
 */
export interface ItemInteractedEvent {
    /**
     * The amount of items that have been used.
     */
    count: number
    /**
     * The item that has been used.
     */
    item: ItemStack
    /**
     * The way that the player has interacted with this item.
     */
    method: ItemInteractMethod
    /**
     * The player that has used this item.
     */
    player: Player
}