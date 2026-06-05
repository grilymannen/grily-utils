/**
 * Capitalizes the first Unicode character of a string.
 * Returns an empty string for falsy input.
 *
 * @param {string} s - Input string
 * @returns {string} String with the first character uppercased
 */
export function capitalize(s: string): string {
  if (!s) return '';

  const [first, ...rest] = [...s]; // Unicode-safe splitting
  return first.toUpperCase() + rest.join('');
}

/**
 * Capitalizes the first character of each word in a string.
 * Words are split on whitespace.
 *
 * @param {string} s - Input string
 * @returns {string}
 */
export function deepCapitalize(s: string): string {
  if (!s) return '';

  return s
    .trim()
    .split(/\s+/)
    .map(word => capitalize(word))
    .join(' ');
}

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
export function formatServerName(name: string): string {
  if (!name) return '';

  return name
    .trim()
    .split(/\s+/)
    .map(word => {
      if (/^[a-zA-Z0-9]/.test(word)) {
        return word[0];
      }
      return word;
    })
    .join('');
}

/**
 * Returns a random element from an array.
 *
 * @template T
 * @param {T[]} array - Source array
 * @returns {T | undefined} Random element, or undefined if array is empty
 */
export function pickRandom<T>(array: T[]): T | undefined {
  if (!array || array.length === 0) return undefined;

  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

/**
 * Converts degrees to radians.
 *
 * @param {number} degrees
 * @returns {number}
 */
export function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}