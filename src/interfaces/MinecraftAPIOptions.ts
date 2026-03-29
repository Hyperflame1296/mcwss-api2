export interface MinecraftAPIOptions {
    /**
     * Logging options.
     */
    logging?: {
        /**
         * Whether to log verbose info messages.
         * @default false
         */
        info?: boolean
        /**
         * Whether to log warning messages.
         * @default true
         */
        warning?: boolean
        /**
         * Whether to log error messages.
         * @default true
         */
        error?: boolean
        /**
         * Whether to log command errors.
         * @default true
         */
        commandError?: boolean
    }
}