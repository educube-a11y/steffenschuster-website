import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostAuthor {
  name: string;
  bio: string;
  avatar?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: PostAuthor;
  faq?: FaqItem[];
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description ?? "",
      author: data.author ?? { name: "Steffen Schuster", bio: "" },
      faq: data.faq ?? [],
    } as PostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Lädt einen Blog-Artikel — prüft zuerst Netlify Blobs (Admin-Änderungen),
 *  fällt dann auf das Dateisystem zurück. */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  // Netlify Blobs (vom Admin gespeicherte Versionen, sofort live)
  if (process.env.NETLIFY) {
    try {
      const { getStore } = await import("@netlify/blobs");
      const store = getStore("blog-content");
      const raw = await store.get(slug, { type: "text" });
      if (raw) {
        const { data, content } = matter(raw);
        return {
          slug,
          title: data.title ?? slug,
          date: data.date ?? "",
          description: data.description ?? "",
          author: data.author ?? { name: "Steffen Schuster", bio: "" },
          faq: data.faq ?? [],
          content,
        };
      }
    } catch (err) {
      console.error("Blobs Lesefehler:", err);
    }
  }

  // Fallback: Dateisystem
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description ?? "",
    author: data.author ?? { name: "Steffen Schuster", bio: "" },
    faq: data.faq ?? [],
    content,
  };
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
