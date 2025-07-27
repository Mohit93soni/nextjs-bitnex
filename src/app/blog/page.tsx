import { Metadata } from 'next';
import Layout from '@/components/Layout';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Bitnex Infotech | Software Development Insights & Tutorials',
  description: 'Stay updated with the latest trends in software development, web technologies, mobile apps, and cloud solutions. Expert insights and tutorials from Bitnex Infotech team.',
  keywords: 'software development blog, web development, mobile apps, react tutorials, next.js, cloud computing, programming',
};

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js 14",
    excerpt: "Learn how to build high-performance, SEO-friendly React applications using the latest features of Next.js 14, including the App Router and Server Components.",
    author: "Mohit Soni",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "Performance"],
    image: "/placeholder.svg",
    featured: true
  },
  {
    id: 2,
    title: "Mobile App Development: React Native vs Flutter",
    excerpt: "A comprehensive comparison of React Native and Flutter for cross-platform mobile development, including performance, development experience, and ecosystem.",
    author: "Priya Sharma",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Mobile Development",
    tags: ["React Native", "Flutter", "Mobile"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Cloud Migration Strategies for Modern Applications",
    excerpt: "Best practices for migrating applications to AWS cloud, including containerization, database migration, and implementing CI/CD pipelines.",
    author: "Rahul Kumar",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "Cloud Computing",
    tags: ["AWS", "Cloud Migration", "DevOps"],
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "TypeScript Best Practices for Large-Scale Applications",
    excerpt: "Essential TypeScript patterns and practices for building maintainable, type-safe applications at scale with real-world examples.",
    author: "Sneha Patel",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Implementing Real-time Features with WebSockets",
    excerpt: "How to build real-time applications using WebSockets, including chat systems, live notifications, and collaborative features.",
    author: "Mohit Soni",
    date: "2023-12-20",
    readTime: "14 min read",
    category: "Web Development",
    tags: ["WebSockets", "Real-time", "Node.js"],
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Database Design Patterns for Modern Web Apps",
    excerpt: "Explore common database design patterns, normalization strategies, and how to choose between SQL and NoSQL databases for your project.",
    author: "Priya Sharma",
    date: "2023-12-15",
    readTime: "11 min read",
    category: "Database",
    tags: ["Database", "SQL", "NoSQL"],
    image: "/placeholder.svg"
  },
  {
    id: 7,
    title: "Security Best Practices for Web Applications",
    excerpt: "Essential security measures every developer should implement, including authentication, authorization, data validation, and protection against common vulnerabilities.",
    author: "Rahul Kumar",
    date: "2023-12-10",
    readTime: "13 min read",
    category: "Security",
    tags: ["Security", "Authentication", "Web Security"],
    image: "/placeholder.svg"
  },
  {
    id: 8,
    title: "Performance Optimization Techniques for React Apps",
    excerpt: "Advanced techniques to optimize React application performance, including code splitting, lazy loading, memoization, and bundle analysis.",
    author: "Sneha Patel",
    date: "2023-12-05",
    readTime: "9 min read",
    category: "Performance",
    tags: ["React", "Performance", "Optimization"],
    image: "/placeholder.svg"
  }
];

const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Web Development", count: blogPosts.filter(post => post.category === "Web Development").length },
  { name: "Mobile Development", count: blogPosts.filter(post => post.category === "Mobile Development").length },
  { name: "Cloud Computing", count: blogPosts.filter(post => post.category === "Cloud Computing").length },
  { name: "Programming", count: blogPosts.filter(post => post.category === "Programming").length },
  { name: "Security", count: blogPosts.filter(post => post.category === "Security").length },
  { name: "Performance", count: blogPosts.filter(post => post.category === "Performance").length }
];

const featuredPost = blogPosts.find(post => post.featured);
const regularPosts = blogPosts.filter(post => !post.featured);

export default function BlogPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Insights, tutorials, and thoughts on software development, web technologies, 
              mobile apps, and the latest trends in the tech industry.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-secondary/5">
          <div className="container-max section-padding">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Featured Article</h2>
              <p className="text-muted-foreground">Our latest and most popular content</p>
            </div>
            
            <div className="bg-background rounded-lg border overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {featuredPost.author}</span>
                    <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                      Read More <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-12">
        <div className="container-max section-padding">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container-max section-padding">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <article key={post.id} className="group bg-background rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-3 w-3 text-muted-foreground" />
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs text-muted-foreground">
                          {tag}{tagIndex < post.tags.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {post.author}</span>
                    <button className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm">
                      Read More <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-secondary/5">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to get the latest articles and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
              />
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
