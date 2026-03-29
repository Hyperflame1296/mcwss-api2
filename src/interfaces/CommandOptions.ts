// import: local types
import { CommandOriginType } from '../types/CommandOriginType.js'

// declaration
export interface CommandOptions {
    /**
     * The version of the commands being ran. Lowest is `1`, highest is `42`.
     * @default 42
     */
    commandVersion?: number
    originType?: CommandOriginType
}