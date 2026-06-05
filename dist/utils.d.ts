/**
 * Capitalizes the first Unicode character of a string.
 * Returns an empty string for falsy input.
 *
 * @param {string} s - Input string
 * @returns {string} String with the first character uppercased
 */
export declare function capitalize(s: string): string;
/**
 * Capitalizes the first character of each word in a string.
 * Words are split on whitespace.
 *
 * @param {string} s - Input string
 * @returns {string}
 */
export declare function deepCapitalize(s: string): string;
/**
 * Formats a server name into an abbreviated identifier.
 * Each word is reduced to its first alphanumeric character.
 * Non-alphanumeric-leading tokens are preserved as-is.
 *
 * Example:
 * "My Server 123" -> "MS1"
 *
 * @param {string} name - The name to format
 * @returns {string}
 */
export declare function formatServerName(name: string): string;
/**
 * Returns a random element from an array.
 *
 * @template T
 * @param {T[]} array - Source array
 * @returns {T | undefined} Random element, or undefined if array is empty
 */
export declare function pickRandom<T>(array: T[]): T | undefined;
/**
 * Converts degrees to radians.
 *
 * @param {number} degrees
 * @returns {number}
 */
export declare function toRadians(degrees: number): number;
//# sourceMappingURL=utils.d.ts.map