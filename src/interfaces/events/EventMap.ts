/* import: local interfaces */
import { PlayerMessageEvent    } from './PlayerMessageEvent.js'
import { PlayerTravelledEvent  } from './PlayerTravelledEvent.js'
import { PlayerTransformEvent  } from './PlayerTransformEvent.js'
import { PlayerTeleportedEvent } from './PlayerTeleportedEvent.js'
import { PlayerDiedEvent       } from './PlayerDiedEvent.js'
import { PlayerBouncedEvent    } from './PlayerBouncedEvent.js'
import { EntitySpawnedEvent    } from './EntitySpawnedEvent.js'
import { ItemUsedEvent         } from './ItemUsedEvent.js'
import { ItemInteractedEvent   } from './ItemInteractedEvent.js'

/* declaration */
export interface EventMap {
    PlayerMessage   : PlayerMessageEvent
    PlayerTravelled : PlayerTravelledEvent
    PlayerTransform : PlayerTransformEvent
    PlayerTeleported: PlayerTeleportedEvent
    PlayerDied      : PlayerDiedEvent
    PlayerBounced   : PlayerBouncedEvent
    EntitySpawned   : EntitySpawnedEvent
    ItemUsed        : ItemUsedEvent
    ItemInteracted  : ItemInteractedEvent
}