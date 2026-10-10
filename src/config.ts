/**
 * External consultation form. Set VITE_EXTERNAL_FORM_URL (see .env.example) and the
 * consultation modal embeds it (with an "open in new tab" fallback); when unset the
 * modal shows the built-in WhatsApp form.
 */
export const EXTERNAL_FORM_URL = (import.meta.env.VITE_EXTERNAL_FORM_URL ?? "").trim();

export const HYDERABAD_MAPS_URL =
  "https://www.google.com/maps/place/BlezeX+Technologies/@17.480202,78.4145279,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb91337ecba55f:0x48e93f098a1179d0!8m2!3d17.4801969!4d78.4171028!16s%2Fg%2F11z9bmj7lc";
export const HYDERABAD_MAPS_EMBED_URL = "https://www.google.com/maps?q=17.4801969,78.4171028&z=17&output=embed";
