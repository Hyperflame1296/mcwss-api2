// import: local interfaces
import { Vector3 } from '../math/Vector3.js'

/* import: local enumerators */
import { DimensionType } from '../../enums/world/DimensionType.js'

/* declaration */
export interface Entity {
    color: number
    dimension: DimensionType
    id: number
    position: Vector3
    type: string
    variant: number
    yRot: number
}