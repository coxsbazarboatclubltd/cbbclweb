/** Navy circle with gold initials, used until a director's photo is supplied (never a stock photo of someone else). */
export function initialsPortrait(name: string): string {
  const initials = name.replace(/^(md|mohammad|mohammed)\.?\s+/i, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><rect width="600" height="600" fill="#12304C"/><text x="300" y="300" dy=".35em" text-anchor="middle" font-family="Georgia, serif" font-size="210" fill="#C9A24A">${initials}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
