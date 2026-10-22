const weekday: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const month: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

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
 * Formats a name into an abbreviated identifier.
 * Each word is reduced to its first alphanumeric character.
 * Non-alphanumeric-leading tokens are preserved as-is.
 * 
 * Example:
 * 
 * ```ts
 * const name = abbreviateName("Hello 2 you!")
 * console.log(name) // Will log "H2Y!"
 * ```
 * 
 *
 * @param {string} name - The name to format
 * @returns {string}
 */
export function abbreviateName(name: string): string {
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
 * Formats a Date object into 24-hour time (H:MM).
 * Hours are not zero-padded, minutes are always two digits.
 *
 * @param date - The date to format
 * @returns Formatted time string, e.g. "9:05", "14:30"
 */
export function formatTimeHM(date: Date) {
  const hours = date.getHours(); // no padding
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

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
export function formatTimeFull(date: Date): string {
  return `${weekday[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${formatTimeHM(date)}`;
}

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
export function formatTime(date: Date): string {
  const now = new Date();

  const isToday =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  const isYesterday =
    date.getFullYear() === yesterday.getFullYear() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getDate() === yesterday.getDate();

  if (isToday) {
    return formatTimeHM(date);
  }

  if (isYesterday) {
    return `Yesterday at ${formatTimeHM(date)}`;
  }

  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${formatTimeHM(date)}`;
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
/**
 * Converts radians to degrees.
 * 
 * @param {number} radians 
 * @returns {number}
 */
export function toDegrees(radians: number): number {
  return radians * (180 / Math.PI)
}

/**
 * Converts a Temporal.Instant into a human readable relative or absolute time string 
 * 
 * Example: 
 * ```ts
 * formatTemporal(today) // "Today at HH:MM"
 * formatTemporal(yesterday) // "Yesterday at HH:MM"
 * formatTemporal(someOtherTime) // "YYYY:MM:DD"
 * ```
 * @param instant {Temporal.Instant} - The instant in time to convert
 * @returns Human readable relative or absolute time string
 */
export function formatTemporal(instant: Temporal.Instant): string {
  if (!instant) return "";
  const now = Temporal.Now.zonedDateTimeISO();
  const ztd = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());
  const time = `${String(ztd.hour).padStart(2, "0")}:${String(ztd.minute).padStart(2, "0")}`;

  const isToday = now.year === ztd.year && now.dayOfYear === ztd.dayOfYear;
  const isYesterday =
    now.year === ztd.year && now.dayOfYear - 1 === ztd.dayOfYear;
  if (isToday) {
    return `Today at ${time}`;
  }
  if (isYesterday) {
    return `Yesterday at ${time}`;
  }

  return `${ztd.year}/${ztd.month}/${ztd.day}`;
}
/**
 * Formats a temporal instant into a full human readable string, including year, month name, day name and time (HH:MM)
 * 
 * @param instant {Temporal.Instant}
 * @returns Full human readable string 
 */
export function formatTemporalFull(instant: Temporal.Instant): string {
  const ztd = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId())
  return `${weekday[ztd.dayOfWeek - 1]}, ${month[ztd.month - 1]} ${ztd.day}, ${String(ztd.hour).padStart(2, "0")}:${String(ztd.minute).padStart(2, "0")}`
}