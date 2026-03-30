/* declaration */
/**
 * Methods for player movement.
 */
export enum PlayerTravelMethod {
    /**
     * Walking around normally.
     */
    Walk = 0,
    /**
     * Moving in water.
     */
    Water = 1,
    /**
     * Moving in the air.
     */
    Aerial = 2,
    /**
     * Moving in lava.
     */
    Lava = 4,
    /**
     * Flying in Creative Mode, or with `mayfly` permissions.
     */
    Fly = 5,
    /**
     * Riding an entity.
     */
    Ride = 6,
    /**
     * Sneaking to move.
     */
    Sneak = 7,
    /**
     * Sprinting to move.
     */
    Sprint = 8,
    /**
     * Bouncing on a block. (like Slime Blocks)
     */
    Bounce = 9,
    /**
     * Walking on water with Frost Walker.
     */
    FrostedIce = 10,
    /**
     * Teleporting to move.
     */
    Teleport = 11
}