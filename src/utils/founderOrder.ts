// Directors and members are listed in founder-code order (CBBCL-FM-01, FM-02, ...).
// Anyone without a code yet goes last, alphabetically.
export function founderCodeNumber(code?: string): number {
  const m = (code || "").match(/(\d+)\s*$/);
  return m ? parseInt(m[1], 10) : Number.POSITIVE_INFINITY;
}

export function byFounderCode<T extends { membershipCode?: string; name: string }>(a: T, b: T): number {
  const diff = founderCodeNumber(a.membershipCode) - founderCodeNumber(b.membershipCode);
  if (diff !== 0 && Number.isFinite(diff)) return diff;
  if (diff !== 0) return Number.isFinite(founderCodeNumber(a.membershipCode)) ? -1 : 1;
  return a.name.localeCompare(b.name);
}
