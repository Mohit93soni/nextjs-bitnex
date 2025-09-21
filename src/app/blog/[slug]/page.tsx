import Layout from "@/components/Layout";
import { blogPosts, BlogPost } from "@/app/blog/posts-data";
import { Calendar, Clock, Tag, ChevronRight, Share2, ArrowLeft, ArrowRight as ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article not found" };
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.image }],
    },
  };
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function PostContent({ post }: { post: BlogPost }) {
  return (
    <article className="space-y-8">
      {post.content ? (
        post.content.map((section, idx) => (
          <div key={idx} className="mb-8">
            {section.heading && (
              <h2 id={slugify(section.heading)} className="mb-3 scroll-mt-24">
                {section.heading}
              </h2>
            )}
            {section.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className="leading-7 text-muted-foreground">
                {para}
              </p>
            ))}
            {section.codeBlocks?.map((block, cIdx) => (
              <div key={`code-${cIdx}`} className="mt-4">
                {block.caption && (
                  <div className="text-xs text-muted-foreground mb-1">{block.caption}</div>
                )}
                <pre className="w-full overflow-x-auto rounded-md border bg-secondary/10 p-4 text-sm">
                  <code>{block.code}</code>
                </pre>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p className="text-muted-foreground">Full article coming soon.</p>
      )}
    </article>
  );
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  const morePosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const idx = sorted.findIndex((p) => p.slug === post.slug);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx >= 0 && idx < sorted.length - 1 ? sorted[idx + 1] : null;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bitnexinfotech.com";
  const shareUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <Layout>
      {/* Header */}
      <section className="relative overflow-hidden py-10 lg:py-16">
        <div className="container-max section-padding">
          <nav className="mb-4 text-sm text-muted-foreground flex items-center gap-2">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{post.title}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <div className="flex flex-wrap gap-1">
                {post.tags.map((t, i) => (
                  <span key={t} className="text-xs">
                    {t}
                    {i < post.tags.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="pb-6">
        <div className="container-max section-padding">
          <div className="rounded-lg overflow-hidden border bg-secondary/10">
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="container-max section-padding grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <PostContent post={post} />
          </div>
          <aside className="lg:col-span-4 space-y-6">
            {post.content && post.content.some((s) => s.heading) && (
              <div className="bg-background border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">On this page</h3>
                <ul className="space-y-2 text-sm">
                  {post.content!.filter((s) => s.heading).map((s, i) => (
                    <li key={`toc-${i}`}>
                      <a href={`#${slugify(s.heading!)}`} className="text-muted-foreground hover:text-primary">
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Share</h3>
              <div className="flex gap-3">
                <a
                  className="inline-flex items-center gap-2 text-sm bg-secondary px-3 py-2 rounded hover:bg-secondary/80"
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Share2 className="h-4 w-4" /> X
                </a>
                <a
                  className="inline-flex items-center gap-2 text-sm bg-secondary px-3 py-2 rounded hover:bg-secondary/80"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Share2 className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  className="inline-flex items-center gap-2 text-sm bg-secondary px-3 py-2 rounded hover:bg-secondary/80"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Share2 className="h-4 w-4" /> Facebook
                </a>
              </div>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">About the author</h3>
              <p className="text-sm text-muted-foreground">
                {post.author} is a software professional at Bitnex Infotech.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="py-10">
        <div className="container-max section-padding">
          <div className="grid gap-6 md:grid-cols-2">
            {prev && (
              <Link href={`/blog/${prev.slug}`} className="group block border rounded-lg p-5 hover:bg-accent/30 transition-colors">
                <div className="text-xs text-muted-foreground mb-1">Previous</div>
                <div className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium group-hover:text-primary">{prev.title}</span>
                </div>
              </Link>
            )}
            {next && (
              <Link href={`/blog/${next.slug}`} className="group block border rounded-lg p-5 hover:bg-accent/30 transition-colors text-right">
                <div className="text-xs text-muted-foreground mb-1">Next</div>
                <div className="flex items-center gap-2 justify-end">
                  <span className="font-medium group-hover:text-primary">{next.title}</span>
                  <ArrowRightIcon className="h-4 w-4 text-muted-foreground" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* More articles */}
      <section className="py-16 bg-secondary/5">
        <div className="container-max section-padding">
          <h2 className="text-2xl font-bold mb-8">More articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {morePosts.map((p) => (
              <article key={p.id} className="rounded-lg border overflow-hidden bg-background">
                <Link href={`/blog/${p.slug}`} className="block">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                        {p.category}
                      </span>
                      <span>{new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
