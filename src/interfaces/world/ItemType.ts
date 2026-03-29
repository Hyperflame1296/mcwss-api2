/* declaration */
export interface ItemType {
    /**
     * The numeric identifier for this item.
     * - Due to a bug, this is always 0.
     */
    aux: number
    /**
     * The identifier for this item.
     */
    id: string
    /**
     * The name for this item.
     */
    name: string
}