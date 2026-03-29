/* import: local interfaces */
import { Vector3 } from '../math/Vector3.js'
import { Player } from '../world/Player.js'


/* declaration */
export type MessageResponse = {
    PlayerMessage   : {}
    PlayerTravelled : {}
    PlayerTransform : {}
    PlayerTeleported: {}
    PlayerDied      : {}
    PlayerBounced   : {}
    EntitySpawned   : {}
    ItemUsed        : {}
    ItemInteracted  : {}
    ItemEquipped    : {}
    ItemAcquired    : {}
    ItemDropped     : {}
    ItemSmelted     : {}
    ItemCrafted     : {}
    ItemTraded      : {}
    BlockPlaced     : {}
    BlockBroken     : {}
    MobKilled       : {}
    MobInteracted   : {}
    TargetBlockHit  : {}
}