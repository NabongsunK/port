import fs from "fs";
import path from "path";

export type DocEntry = {
  slug: string; // URL용(경로 구분자를 __로 치환)
  title: string;
  description: string;
  filePath: string; // 서버에서만 사용
};

function extractTitleAndDescription(markdown: string, fallbackTitle: string) {
  const lines = markdown.split(/\r?\n/);
  const firstHeading = lines.find((l) => l.trim().startsWith("# "));
  const title =
    firstHeading?.replace(/^#\s+/, "").trim() || firstHeading?.trim() || fallbackTitle;

  // 첫 본문 한 줄(또는 두 줄)을 description으로 사용
  const firstBodyLine =
    lines.find(
      (l) =>
        l.trim() !== "" &&
        !l.trim().startsWith("#") &&
        !l.trim().startsWith("```") &&
        !l.trim().startsWith("---")
    ) || "";
  const description = firstBodyLine.trim().slice(0, 120);

  return { title, description: description || fallbackTitle };
}

function makeSlug(relPathWithoutExt: string) {
  // Next route segment에는 "/"가 들어갈 수 없어서 "__"로 평탄화합니다.
  return relPathWithoutExt.split(path.sep).join("__").replace(/\//g, "__");
}

function walkMdFiles(dir: string): string[] {
  const result: string[] = [];
  if (!fs.existsSync(dir)) return result;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result.push(...walkMdFiles(full));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      result.push(full);
    }
  }
  return result;
}

export function getDocsEntries(): DocEntry[] {
  const docsDir = path.join(process.cwd(), "Doc", "myeonjub-answers");
  const mdFiles = walkMdFiles(docsDir);

  return mdFiles.map((filePath) => {
    const rel = path.relative(docsDir, filePath); // 예: "03-api-security.md"
    const relWithoutExt = rel.replace(/\.md$/i, "");
    const slug = makeSlug(relWithoutExt);

    const markdown = fs.readFileSync(filePath, "utf8");
    const fallbackTitle = path.basename(filePath, path.extname(filePath));
    const { title, description } = extractTitleAndDescription(markdown, fallbackTitle);

    return { slug, title, description, filePath };
  });
}

