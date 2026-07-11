import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import MdxEditor from "./MdxEditor";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function AdminBlogEditPage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const initialContent = fs.readFileSync(filePath, "utf-8");

  return <MdxEditor slug={slug} initialContent={initialContent} />;
}
