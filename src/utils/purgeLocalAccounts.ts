// The old sign-in, registration, dashboard, EZ Booking and request forms kept accounts (with plain-text
// passwords), profiles and requests only in this browser's storage. Those features are off; remove the data.
const LOCAL_ACCOUNT_KEYS = [
  "cbbcl_users",
  "cbbcl_profiles",
  "cbbcl_current_user",
  "cbbcl_membership_applications",
  "cbbcl_affiliation_requests",
  "cbbcl_ezbooking_reservations",
];

export function purgeLocalAccounts(): void {
  try {
    for (const key of LOCAL_ACCOUNT_KEYS) localStorage.removeItem(key);
  } catch {
    // Storage unavailable (private mode): nothing stored to remove.
  }
}
