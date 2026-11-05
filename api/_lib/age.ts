// Server copy of the application age rule (keep in step with minAge in src/membershipCategories.ts):
// at least 30 years for every category except Associate, which keeps the AOA's 21.
const MIN_AGE_BY_CATEGORY: Record<string, number> = { Associate: 21 };
const MIN_MEMBER_AGE = 30;

export function minimumAgeFor(category: string): number {
  return MIN_AGE_BY_CATEGORY[category] ?? MIN_MEMBER_AGE;
}

/** Age in whole years today for a YYYY-MM-DD date of birth, or null if invalid. */
export function ageFromDob(dob: string, today = new Date()): number | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dob);
  if (!m) return null;
  const [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])];
  if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
  let age = today.getFullYear() - y;
  if (today.getMonth() + 1 < mo || (today.getMonth() + 1 === mo && today.getDate() < d)) age--;
  return age;
}

/** Error message when the applicant is below the category's minimum age, else null. */
export function ageError(category: string, dob: string): string | null {
  const age = ageFromDob(dob);
  if (age === null || age > 120) return "Please enter a valid date of birth.";
  const min = minimumAgeFor(category);
  return age < min ? `Applicants for ${category || "this"} Membership must be at least ${min} years of age.` : null;
}
