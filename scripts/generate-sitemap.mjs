// Writes public/sitemap.xml from the code-managed content (runs before every build).
// Lists only public, canonical, indexable pages on the production host (www.cbbcl.org; the apex
// redirects there). No <lastmod>: the content files carry no reliable modification dates.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = "https://www.cbbcl.org";
const read = (p) => readFileSync(join(root, p), "utf8");

/** Top-level object entries of `export const NAME ... = [ ... ];` as { id, body }. */
function entriesIn(source, constName) {
  const start = source.indexOf(`export const ${constName}`);
  if (start < 0) throw new Error(`${constName} not found`);
  const open = source.indexOf("[", source.indexOf("=", start));
  let depth = 0, i = open;
  for (; i < source.length; i++) {
    if (source[i] === "[") depth++;
    else if (source[i] === "]" && --depth === 0) break;
  }
  const block = source.slice(open, i);
  // Entries are the objects that start with a 2-space indented "{" line.
  return block.split(/\n  \{\n/).slice(1).map((body) => ({ id: (body.match(/^ {4}id: "([^"]+)"/m) || [])[1], body })).filter((e) => e.id);
}

const data = read("src/data.ts");
// Directors whose profile has not been sent yet only show a thank-you note (noindex), so they are left out.
const directors = entriesIn(data, "DIRECTORS_DATA").filter((e) => /profileSubmitted: true/.test(e.body)).map((e) => e.id);
const news = entriesIn(data, "NEWS_DATA").map((e) => e.id);
const categories = [...read("src/membershipCategories.ts").matchAll(/^ {4}slug: "([^"]+)"/gm)].map((m) => m[1]);

const paths = [
  "/",
  "/about",
  "/facilities",
  "/membership",
  ...categories.map((s) => `/membership/${s}`),
  "/board",
  ...directors.map((id) => `/board/${id}`),
  "/members",
  "/governance",
  "/news-feed",
  ...news.map((id) => `/news-feed/${id}`),
  "/events",
  "/affiliations",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/data-deletion",
];

if (directors.length < 10 || categories.length < 5) {
  throw new Error(`Sitemap parse looks wrong: ${directors.length} directors, ${categories.length} categories`);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join("\n")}
</urlset>
`;
writeFileSync(join(root, "public/sitemap.xml"), xml);
console.log(`sitemap.xml: ${paths.length} URLs (${directors.length} directors, ${categories.length} membership categories, ${news.length} news)`);
