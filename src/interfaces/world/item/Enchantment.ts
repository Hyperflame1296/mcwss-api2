/* declaration */
/**
 * An enchantment for an in-game item.
 */
export interface Enchantment {
    /**
     * The level of this enchantment.
     */
    level: number
    /**
     * The name for this enchantment.
     */
    name: string
    /**
     * The numeric identifier for this enchantment.
     */
    type: number
}