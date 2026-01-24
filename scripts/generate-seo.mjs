import fs from "fs";
import path from "path";

const SITE_URL = "https://simplifai-solutions.com";

// Paths
const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const BLOGS_MD_DIR = path.join(PUBLIC_DIR, "blogs-md");
const SITEMAP_PATH = path.join(PUBLIC_DIR, "sitemap.xml");
const ROBOTS_PATH = path.join(PUBLIC_DIR, "robots.txt");

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function listMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.join(dir, f));
}

function parseFrontmatter(raw) {
  const trimmed = raw.replace(/^\uFEFF/, "");
  if (!trimmed.startsWith("---")) return { data: {}, content: trimmed };

  const end = trimmed.indexOf("\n---", 3);
  if (end === -1) return { data: {}, content: trimmed };

  const fmBlock = trimmed.slice(3, end).trim();
  const body = trimmed.slice(end + "\n---".length).trimStart();

  const data = {};
  for (const line of fmBlock.split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    val = val.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
    if (key) data[key] = val;
  }

  return { data, content: body };
}

function escapeXml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function normalizeUrl(u) {
  if (u.endsWith("/") && u !== SITE_URL + "/") return u.slice(0, -1);
  return u;
}

function writeRobotsTxt() {
  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync(ROBOTS_PATH, robots, "utf8");
}

(function run() {
  ensureDir(PUBLIC_DIR);
  ensureDir(BLOGS_MD_DIR);

  const files = listMarkdownFiles(POSTS_DIR);

  const posts = files.map((filePath) => {
    const slug = path.basename(filePath, ".md");
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = parseFrontmatter(raw);
    const date = data.date || "";
    return { slug, date, raw };
  });

  // Copy raw markdown to /public/blogs-md
  for (const p of posts) {
    const dest = path.join(BLOGS_MD_DIR, `${p.slug}.md`);
    fs.writeFileSync(dest, p.raw, "utf8");
  }

  // Generate sitemap.xml
  const urls = [
    { loc: `${SITE_URL}/`, lastmod: "" },
    { loc: `${SITE_URL}/blogs`, lastmod: "" },
    ...posts.map((p) => ({
      loc: `${SITE_URL}/blogs/${p.slug}`,
      lastmod: p.date || "",
    })),
  ];

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map((u) => {
        const loc = escapeXml(normalizeUrl(u.loc));
        const lastmod = u.lastmod ? `<lastmod>${escapeXml(u.lastmod)}</lastmod>` : "";
        return `  <url><loc>${loc}</loc>${lastmod}</url>`;
      })
      .join("\n") +
    `\n</urlset>\n`;

  fs.writeFileSync(SITEMAP_PATH, xml, "utf8");

  // robots.txt
  writeRobotsTxt();

  console.log(`✅ Generated sitemap: ${SITEMAP_PATH}`);
  console.log(`✅ Published raw markdown: ${BLOGS_MD_DIR}`);
  console.log(`✅ Wrote robots.txt: ${ROBOTS_PATH}`);
})();
