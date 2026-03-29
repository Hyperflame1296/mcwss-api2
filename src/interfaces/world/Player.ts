/* import: local interfaces */
import { Vector3 } from '../math/Vector3.js'
import { Entity } from './Entity.js'

/* import: local enumerators */
import { DimensionType } from '../../enums/world/DimensionType.js'

/* declaration */
export interface Player extends Omit<Entity, 'color'> {
    color: string
    dimension: DimensionType
    id: number
    name: string
    position: Vector3
    type: 'minecraft:player'
    variant: number
    yRot: number
}