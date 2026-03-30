/* declaration */
/**
 * Methods for using an item.
 */
export enum ItemUseMethod {
    /**
     * Eating an item.
     */
    Eat = 1,
    /**
     * Drinking a potion.
     */
    Drink = 3,
    /**
     * Throwing an item. (e.g. a Snowball, or an Egg)
     */
    Throw = 4,
    /**
     * Shooting using an item. (e.g. shooting w/ a bow)
     */
    Shoot = 5,
    /**
     * Using an item on a block.
     * - Placing *items* results in this method as well.
     */
    OnBlock = 6,
    /**
     * Emptying a bucket.
     */
    Bucket = 9,
    /**
     * Casting a fishing rod.
     */
    Fish = 10
}