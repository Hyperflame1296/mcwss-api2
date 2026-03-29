/* import: local interfaces */
import { EventMap } from '../../interfaces/events/EventMap.js'

/* declaration */
export type EventOf<T extends keyof EventMap> = EventMap[T]