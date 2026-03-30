/* declaration */
/**
 * Used by multiple events to represent the type of any one game object. (such as an item or block)
 */
export interface GameObjectType {
    /**
     * The numeric identifier for this object.
     * - Due to a bug, this is always 0.
     */
    aux: number
    /**
     * The identifier for this object.
     */
    id: string
    /**
     * The namespace for this object.
     */
    namespace: string
}