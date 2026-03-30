/* declaration */
export interface BlockType {
    /**
     * The numeric identifier for this block.
     * - Due to a bug, this is always 0.
     */
    aux: number
    /**
     * The identifier for this block.
     */
    id: string
    /**
     * The name for this block.
     */
    name: string
}