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
 * Formats a Date object into 24-hour time (H:MM).
 * Hours are not zero-padded, minutes are always two digits.
 *
 * @param date - The date to format
 * @returns Formatted time string, e.g. "9:05", "14:30"
 */
export declare function formatTimeHM(date: Date): string;
/**
 * Formats a Date object into a full readable timestamp.
 * Includes weekday, month name, day, year, and time (H:MM).
 *
 * Example output:
 * "Monday, January 15, 2026 9:05"
 *
 * @param date - The date to format
 * @returns Fully formatted date-time string
 */
export declare function formatTimeFull(date: Date): string;
/**
 * Formats a Date into a human-friendly relative or absolute string.
 *
 * Rules:
 * - Today → "H:MM"
 * - Yesterday → "Yesterday at H:MM"
 * - Otherwise → "M/D/YYYY H:MM"
 *
 * @param date - The date to format
 * @returns Human-readable relative or absolute time string
 */
export declare function formatTime(date: Date): string;
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
/**
 * Converts radians to degrees.
 *
 * @param {number} radians
 * @returns {number}
 */
export declare function toDegrees(radians: number): number;
//# sourceMappingURL=utils.d.ts.map