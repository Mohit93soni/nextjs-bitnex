export type BlogCodeBlock = {
  code: string;
  language?: string;
  caption?: string;
};

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  codeBlocks?: BlogCodeBlock[];
};

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string; // ISO date
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
  content?: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "building-scalable-react-applications-with-nextjs-14",
    title: "Building Scalable React Applications with Next.js 14",
    excerpt:
      "Learn how to build high-performance, SEO-friendly React applications using the latest features of Next.js 14, including the App Router and Server Components.",
    author: "Mohit Soni",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "Performance"],
    image: "/images/99.png",
    featured: true,
    content: [
      {
        paragraphs: [
          "When I first started with React, I loved how easy it was to build UIs. But the moment I needed server-side rendering, SEO optimization, or backend APIs, everything got messy. That’s where Next.js came to the rescue.",
          "With Next.js 13+ (and now 14), things got even better thanks to the App Router, Server Components, and powerful data-fetching patterns. This article is your in-depth guide to building scalable, full-stack apps with Next.js.",
        ],
      },
      {
        heading: "1. Why Choose Next.js Over Plain React?",
        paragraphs: [
          "React is amazing for the frontend, but:",
          "• It doesn’t handle SEO well (everything renders on the client).",
          "• It doesn’t come with routing out of the box.",
          "• You need extra setup for API routes, image optimization, and caching.",
          "Next.js fixes all that by adding:",
          "✅ File-based routing (app/ or pages/)",
          "✅ Server-Side Rendering (SSR) and Static Site Generation (SSG)",
          "✅ Built-in API routes (no need for Express for small apps)",
          "✅ Image optimization with next/image",
          "✅ Edge + Serverless deployment ready",
          "In short → React is the engine, but Next.js is the sports car built around it.",
        ],
      },
      {
        heading: "2. The App Router: A Game-Changer",
        paragraphs: [
          "Older versions of Next.js used the pages/ directory. But now, with Next.js 13+, we have the App Router (app/), which makes things way more powerful.",
          "Key differences:",
          "• Every folder in app/ can be a route.",
          "• Uses React Server Components (RSCs) by default → faster and lighter.",
          "• Built-in layout support (no need to repeat navbar/footer code).",
          "If you go to /dashboard/settings, Next.js will render the root layout, then the dashboard layout, then the settings page. This is nested layouts made easy.",
        ],
        codeBlocks: [
          {
            language: "txt",
            code: `app/
├── layout.tsx   // shared layout
├── page.tsx     // homepage
├── about/
│   └── page.tsx
├── dashboard/
│   ├── layout.tsx
│   ├── page.tsx
│   └── settings/
│       └── page.tsx`,
            caption: "App Router folder structure with nested layouts",
          },
        ],
      },
      {
        heading: "3. Rendering Modes in Next.js",
        paragraphs: [
          "Next.js gives you control over how pages render:",
          "• Static Site Generation (SSG) — pre-renders at build time",
        ],
        codeBlocks: [
          {
            language: "ts",
            code: `export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}`,
            caption: "SSG example for dynamic routes",
          },
          {
            language: "tsx",
            code: `export default async function Page() {
  const res = await fetch("https://api.example.com/data", { cache: "no-store" });
  const data = await res.json();
  return <div>{data.title}</div>;
}`,
            caption: "SSR — fetches data on every request",
          },
          {
            language: "tsx",
            code: `"use client";
import { useEffect, useState } from "react";

export default function ClientPage() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData);
  }, []);
  return <div>{data?.title}</div>;
}`,
            caption: "CSR — fetch on the client",
          },
        ],
      },
      {
        heading: "4. API Routes in Next.js",
        paragraphs: [
          "You don’t always need a separate backend. With Next.js, you can create APIs directly inside your project.",
        ],
        codeBlocks: [
          {
            language: "ts",
            code: `// app/api/hello/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello from Next.js API!" });
}`,
          },
        ],
      },
      {
        heading: "5. Authentication with Next.js",
        paragraphs: [
          "Authentication is one of the trickiest parts in web development. Thankfully, NextAuth.js works seamlessly with Next.js.",
          "Install NextAuth:",
        ],
        codeBlocks: [
          { language: "bash", code: "npm install next-auth" },
          {
            language: "ts",
            code: `// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };`,
            caption: "NextAuth route handler",
          },
          {
            language: "tsx",
            code: `"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav>
      {session ? (
        <>
          <span>Welcome, {session.user?.name}</span>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <button onClick={() => signIn("github")}>Login with GitHub</button>
      )}
    </nav>
  );
}`,
            caption: "Using NextAuth in a client component",
          },
        ],
      },
      {
        heading: "6. Database Integration (Prisma + Next.js)",
        paragraphs: [
          "If you want a real backend, you’ll need a database. The best combo is Prisma + PostgreSQL.",
          "Install and initialize Prisma:",
        ],
        codeBlocks: [
          { language: "bash", code: "npm install prisma @prisma/client\nnpx prisma init" },
          {
            language: "prisma",
            code: `// prisma/schema.prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}`,
            caption: "Prisma schema example",
          },
          {
            language: "ts",
            code: `import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}`,
            caption: "Using Prisma in a route handler",
          },
        ],
      },
      {
        heading: "7. Deployment",
        paragraphs: [
          "The best place to deploy a Next.js app is Vercel (made by the same team).",
          "Push your code to GitHub, import the repo into Vercel, and deploy. Vercel automatically handles serverless functions, edge caching, and image optimization.",
        ],
      },
      {
        heading: "8. Key Takeaways",
        paragraphs: [
          "• Next.js turns React into a production-ready framework.",
          "• Use the App Router for layouts and server components.",
          "• Choose the right rendering mode (SSG, SSR, CSR) based on your needs.",
          "• Use built-in API routes for small backends.",
          "• For auth → NextAuth.js. For DB → Prisma. Deploy easily on Vercel.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "mobile-app-development-react-native-vs-flutter",
    title: "Mobile App Development: React Native vs Flutter",
    excerpt:
      "A comprehensive comparison of React Native and Flutter for cross-platform mobile development, including performance, development experience, and ecosystem.",
    author: "Mohit Soni",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Mobile Development",
    tags: ["React Native", "Flutter", "Mobile"],
    image: "/images/77.png",
    content: [
      {
        paragraphs: [
          "Flutter and React Native are certainly two of the most prominent frameworks. Provided here is a comparative analysis between both these platforms.",
        ],
      },
      {
        heading: "React Native vs. Flutter: Performance",
        paragraphs: [
          "React Native app development doesn’t stand as tall as Flutter in terms of performance. The prime reason behind this is due to the JavaScript bridge meant for making connection happen between built-in modules.",
          "Though people enhance performance through the usage of external libraries, this approach is not liked by all.",
          "In comparison, Flutter app development is indeed a better performer. There is no bridge essential for connecting between native modules as native components are available by default here.",
        ],
      },
      {
        heading: "React Native vs. Flutter: Architecture",
        paragraphs: [
          "React Native makes use of a JavaScript bridge that offers a mode of communication with built-in modules. In this context, JSON messages are often used for communication.",
          "Moreover, it demands a sleek user interface. React Native makes use of Facebook’s Flux architecture.",
          "In comparison, Flutter is preferred as it possesses a maximum of essential components within it. It means there is no requirement for a bridge here. This makes applications developed through Flutter more established.",
        ],
      },
      {
        heading: "React Native vs. Flutter: Setup",
        paragraphs: [
          "Thorough guidelines are essential for framework setup. However, React Native doesn’t offer any considerable roadmap. There are not many guidelines available as well for the usage of Xcode tools.",
          "All in all, React Native doesn’t offer adequate details for a thorough setup.",
          "On the other hand, Flutter offers a comprehensive guideline for proper installation. The CLI tool offered by Flutter called Flutter Doctor helps in hassle-free installation. In short, Flutter offers enhanced support and specific guidelines for smooth configuration.",
        ],
      },
      {
        heading: "React Native vs. Flutter: Testing",
        paragraphs: [
          "Every developer wants their code to run smoothly, requiring nominal time. As far as React Native is concerned, there is no proper support for conducting testing at the UI level. The same is the case with integration testing as well.",
          "As there remains no proper support, developers are bound to depend upon external tools to find bugs. It is also dependent upon external libraries. There is no automation available for deployment of the applications for iOS.",
          "In comparison, Flutter provides major support for conducting automation testing. Simultaneously, offering a huge amount of testing features to test the app at different levels also provides proper documentation concerned with the same. It also offers sufficient documentation for development and deployment of applications into concerned platforms. There is a proper deployment method available with thorough documentation in an official way.",
        ],
      },
      {
        heading: "React Native vs. Flutter: CI/CD Support",
        paragraphs: [
          "CI (Continuous Integration) and CD (Continuous Delivery) are considered crucial for obtaining regular feedback. However, there is no official support available in this context to React Native.",
          "Though one can introduce it manually, there is no thorough guideline for the same as well. It means one needs to depend upon third-party options.",
          "In comparison, CI/CD setup is far easier with Flutter. Here, details of each step have been provided distinctly for both platforms. Deployment is equally easy as well with a proper interface. One can also set up a DevOps lifecycle for Flutter. It can be ultimately claimed that Flutter remains ahead of React Native as far as CI/CD support is concerned.",
        ],
      },
      {
        heading: "React Native vs. Flutter: Usability",
        paragraphs: [
          "From a usage perspective, both these applications can be distinguished. Those up for using React Native are essential to be well versed with JavaScript. As far as developing complex applications are concerned, React Native is indeed a preferable option.",
          "However, if a smooth user interface remains the priority with the application, Flutter certainly can be the stand-out option. Those having budget constraints can also find Flutter a better choice. Simplistic business applications thus always prefer Flutter.",
          "Moreover, Google has been consistently trying to enhance the performance of Flutter for PCs primarily. One must thus keep intended usage in mind before deciding on whether to go with Flutter or React Native.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "All things pointed out, it can be concluded that Flutter is a better option to go by unless someone has to develop a sophisticated application.",
        ],
      },
      {
        heading: "Get in touch",
        paragraphs: [
          "Are you looking for a Mobile App Development Company to develop your next mobile app project that could change the face of your industry?",
          "You can reach out to us via email at: info@bitnexinfotech.com or contact us at: +91-8824525849 to handle the technical aspects of your mobile app development so you can focus on your business model.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "cloud-migration-strategies-for-modern-applications",
    title: "Cloud Migration Strategies for Modern Applications",
    excerpt:
      "Best practices for migrating applications to AWS cloud, including containerization, database migration, and implementing CI/CD pipelines.",
    author: "Rahul Kumar",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "Cloud Computing",
    tags: ["AWS", "Cloud Migration", "DevOps"],
    image: "/images/55.png",
  },
  {
    id: 4,
    slug: "typescript-best-practices-for-large-scale-applications",
    title: "TypeScript Best Practices for Large-Scale Applications",
    excerpt:
      "Essential TypeScript patterns and practices for building maintainable, type-safe applications at scale with real-world examples.",
    author: "Sneha Patel",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    image: "/images/66.png",
  },
  {
    id: 5,
    slug: "implementing-real-time-features-with-websockets",
    title: "Implementing Real-time Features with WebSockets",
    excerpt:
      "How to build real-time applications using WebSockets, including chat systems, live notifications, and collaborative features.",
    author: "Mohit Soni",
    date: "2023-12-20",
    readTime: "14 min read",
    category: "Web Development",
    tags: ["WebSockets", "Real-time", "Node.js"],
    image: "/images/44.png",
  },
  {
    id: 6,
    slug: "database-design-patterns-for-modern-web-apps",
    title: "Database Design Patterns for Modern Web Apps",
    excerpt:
      "Explore common database design patterns, normalization strategies, and how to choose between SQL and NoSQL databases for your project.",
    author: "Priya Sharma",
    date: "2023-12-15",
    readTime: "11 min read",
    category: "Database",
    tags: ["Database", "SQL", "NoSQL"],
    image: "/images/33.png",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "You have classrooms, students, teachers, courses, grades, semesters, etc. Many entities having interesting relationships with each other. Good domain to draw examples from. Also, hopefully, familiar to most readers.",
          "Let’s start with Student table. What do we want to store there and how would we design it? Assume we want to start with storing first name, last name, and email. Here is the first shot at it:",
        ],
        codeBlocks: [
          {
            language: "sql",
            code: `create table Student_v1
(
   FirstName nvarchar(32),
   LastName  nvarchar(32),
   Email     varchar(64)
)`
          }
        ]
      },
      {
        heading: "Keys and unique indexes",
        paragraphs: [
          "That works, however this entity lacks the identity — not in the specific Sql Server sense (keyword identity), but in the sense that we don’t have a way to uniquely identify particular student.",
          "The term we are looking for here is key. This is the term from logical design. Corresponding concept in physical design domain is unique index.",
          "We have an attribute that we can use as a key. It’s Email. Let’s modify our table definition accordingly:",
        ],
        codeBlocks: [
          {
            language: "sql",
            code: `create table Student_v2
(
   FirstName nvarchar(32),
   LastName  nvarchar(32),
   Email     varchar(64),
   index ixu_Student_v2_Email unique (Email)
)`
          }
        ]
      },
      {
        heading: "Index naming conventions",
        paragraphs: [
          "What’s going on here? Well, we just defined index, making column Email unique. Now no two rows in a table can have the same value of Email column and, therefore, if we know Email, we can uniquely identify entity instance.",
          "Pattern: index naming conventions. As you noticed, we gave this index name ixu_Student_v2_Email. It consists of three parts:",
          "Prefix ixu (ix stands for index, u stands for unique)",
          "Table name (Student_v2)",
          "Column list (Email)",
          "It is convenient in many cases to know the type of database object and some of its properties just by looking at its name. Reasonable exception could be made for database objects used most often — tables, functions, and stored procedures.",
        ]
      },
      {
        heading: "Clustered index",
        paragraphs: [
          "Any table needs to have one clustered index. We will dwell on the choice of clustered key a bit later. How do we make our index clustered? Easy, just add the word clustered to the index definition:",
        ],
        codeBlocks: [
          {
            language: "sql",
            code: `create table Student_v2
(
   FirstName nvarchar(32),
   LastName  nvarchar(32),
   Email     varchar(64),
   index ixuc_Student_v2_Email unique clustered (Email)
)`
          }
        ],
      },
      {
        heading: "Index tree levels and page size",
        paragraphs: [
          "Please note that prefix now contains c, denoting the fact that the index is clustered. The leaf nodes of the index are now data pages and contain all data from corresponding rows. In our case, FirstName, LastName and Email.",
          "It is also worth noting that the size of any page, including non-leaf index page, is 8K in Sql Server, which gives us an easy way to estimate how many levels we would have in the index. Let’s assume average length of email address to be 40 bytes and total number of students to be 100 million (really big college). The number of keys per page is 8K/40 ≈ 200. Level 2 capacity is 200*200 = 40 thousand, level 3 = 8 million, level 4 = 1.6 billion. So our index will have 4 levels of non-leaf nodes (one root and three intermediate).",
          "It is also worth noting that every level of the tree is also a doubly-linked list, allowing fast sequential reads (more on it later).",
        ]
      },
      {
        heading: "Non-clustered index",
        paragraphs: [
          "Imagine now that we need to search students by their last names — in case we don’t know their email. Since last name is not unique, we want back a list of all students with given last name, and we want it fast. Scanning through all 100 million records would take too long. Let’s define non-clustered index on LastName:",
        ],
        codeBlocks: [
          {
            language: "sql",
            code: `create table Student_v2
(
   FirstName nvarchar(32),
   LastName  nvarchar(32),
   Email     varchar(64),
   index ixuc_Student_v2_Email unique clustered (Email),
   index ix_Student_v2_LastName (LastName)
)`
          }
        ],
        paragraphs2: []
      },
      {
        heading: "How it works",
        paragraphs: [
          "The absence of keywords unique and clustered means that the index is non-unique and non-clustered (you can only have one clustered index per table).",
          "How does it work? The search starts from root page and goes through all intermediate levels to find first record with given last name in the last (leaf) level. Then, using next page link chain, it starts reading all the leaf pages until it finds one with the next value of LastName.",
          "Assuming that selectivity of our LastName is 0.01%, we only had to read through 10 thousand rows out of total 100 million.",
        ]
      }
    ]
  },
  {
    id: 7,
    slug: "security-best-practices-for-web-applications",
    title: "Security Best Practices for Web Applications",
    excerpt:
      "Essential security measures every developer should implement, including authentication, authorization, data validation, and protection against common vulnerabilities.",
    author: "Rahul Kumar",
    date: "2023-12-10",
    readTime: "13 min read",
    category: "Security",
    tags: ["Security", "Authentication", "Web Security"],
    image: "/images/22.png",
  },
  {
    id: 8,
    slug: "performance-optimization-techniques-for-react-apps",
    title: "Performance Optimization Techniques for React Apps",
    excerpt:
      "Advanced techniques to optimize React application performance, including code splitting, lazy loading, memoization, and bundle analysis.",
    author: "Sneha Patel",
    date: "2023-12-05",
    readTime: "9 min read",
    category: "Performance",
    tags: ["React", "Performance", "Optimization"],
    image: "/images/11.png",
  },
];

export const categories = [
  { name: "All", count: blogPosts.length },
  {
    name: "Web Development",
    count: blogPosts.filter((post) => post.category === "Web Development").length,
  },
  {
    name: "Mobile Development",
    count: blogPosts.filter((post) => post.category === "Mobile Development").length,
  },
  {
    name: "Cloud Computing",
    count: blogPosts.filter((post) => post.category === "Cloud Computing").length,
  },
  { name: "Programming", count: blogPosts.filter((post) => post.category === "Programming").length },
  { name: "Security", count: blogPosts.filter((post) => post.category === "Security").length },
  { name: "Performance", count: blogPosts.filter((post) => post.category === "Performance").length },
];
