/* import: local interfaces */
import { PlayerDiedEvent       } from './PlayerDiedEvent.js'
import { PlayerMessageEvent    } from './PlayerMessageEvent.js'
import { PlayerTeleportedEvent } from './PlayerTeleportedEvent.js'
import { PlayerTransformEvent  } from './PlayerTransformEvent.js'
import { PlayerTravelledEvent  } from './PlayerTravelledEvent.js'
import { PlayerBouncedEvent    } from './PlayerBouncedEvent.js'

/* declaration */
export interface EventMap {
    PlayerMessage   : PlayerMessageEvent
    PlayerTravelled : PlayerTravelledEvent
    PlayerTransform : PlayerTransformEvent
    PlayerTeleported: PlayerTeleportedEvent
    PlayerDied      : PlayerDiedEvent
    PlayerBounced   : PlayerBouncedEvent
}