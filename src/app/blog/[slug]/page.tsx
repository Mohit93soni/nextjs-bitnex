import { Metadata } from "next";
import Layout from "@/components/Layout";
import { blogPosts } from "@/app/blog/posts-data";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  props: BlogPostPageProps
): Promise<Metadata> {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  return {
    title: `${post.title} - Bitnex Infotech Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      {/* Back Button */}
      <div className="py-6 border-b">
        <div className="container-max section-padding">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="py-12">
        <div className="container-max section-padding">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center gap-2 mb-8">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              By <span className="font-semibold">{post.author}</span>
            </div>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-lg object-cover max-h-96"
          />
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container-max section-padding max-w-4xl">
          <div className="prose prose-invert max-w-none">
            {post.content?.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                {section.heading && (
                  <h2 className="text-3xl font-bold mb-6 text-foreground">
                    {section.heading}
                  </h2>
                )}

                {section.paragraphs.map((paragraph, paraIndex) => (
                  <p
                    key={paraIndex}
                    className="text-base leading-relaxed mb-4 text-foreground whitespace-pre-wrap"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.codeBlocks?.map((codeBlock, codeIndex) => (
                  <div key={codeIndex} className="my-6 rounded-lg overflow-hidden">
                    {codeBlock.caption && (
                      <p className="text-xs text-muted-foreground bg-secondary/20 px-4 py-2 font-medium">
                        {codeBlock.caption}
                      </p>
                    )}
                    <pre className="bg-secondary/10 text-foreground p-4 overflow-x-auto">
                      <code className={`language-${codeBlock.language || "javascript"}`}>
                        {codeBlock.code}
                      </code>
                    </pre>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Info */}
      <section className="py-12 bg-secondary/5 border-t border-b">
        <div className="container-max section-padding max-w-4xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {post.author.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{post.author}</h3>
              <p className="text-sm text-muted-foreground">
                {post.category} Expert at Bitnex Infotech
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="container-max section-padding max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">More Articles</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts
              .filter((p) => p.slug !== post.slug && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-background rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="aspect-video w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {relatedPost.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(relatedPost.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-secondary/5">
        <div className="container-max section-padding">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for more insights and tutorials on
              software development and web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 px-3 py-2 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <button className="inline-flex items-center justify-center px-6 h-10 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
