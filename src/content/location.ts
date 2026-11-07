// The Club House location as listed on Google Maps (from Google's Locator Plus setup, 2026-11-07).
// One place for the map pin, links and search-engine coordinates.
export const CLUB_LOCATION = {
  name: "Cox's Bazar Boat Club Ltd. (CBBCL)",
  lat: 21.4453056,
  lng: 91.9765277,
  /** Google Maps place ID of the Club's business listing. */
  placeId: "ChIJt5MIRPXJrTAR8suphZbXf7U",
};

const enc = encodeURIComponent;

/** Opens the Club's Google Maps listing (address, photos, reviews). */
export const CLUB_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${enc(CLUB_LOCATION.name)}&query_place_id=${CLUB_LOCATION.placeId}`;

/** Opens Google Maps directions to the Club House from the visitor's location. */
export const CLUB_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${CLUB_LOCATION.lat},${CLUB_LOCATION.lng}&destination_place_id=${CLUB_LOCATION.placeId}`;

/** Keyless Google Maps embed centred on the Club House pin. */
export const CLUB_MAP_EMBED_URL = `https://maps.google.com/maps?q=${CLUB_LOCATION.lat},${CLUB_LOCATION.lng}&z=17&output=embed`;
