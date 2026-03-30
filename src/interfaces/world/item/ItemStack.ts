/* import: local interfaces */
import { Enchantment } from './Enchantment.js'

/* declaration */
/**
 * An in-game item.
 */
export interface ItemStack {
    /**
     * The numeric identifier for this item.
     * - Due to a bug, this is always 0.
     */
    aux: number
    /**
     * The enchantments that this item has.
     */
    enchantments: Enchantment[]
    /**
     * The amount of items it would take for this item to hit it's maximum stack size.
     */
    freeStackSize: number
    /**
     * The identifier for this item.
     */
    id: string
    /**
     * The maximum stack size for this item.
     */
    maxStackSize: number
    /**
     * The namespace for this item.
     */
    namespace: string
    /**
     * The item's current stack size.
     */
    stackSize: number
}