export type BlogSection = {
  heading?: string;
  paragraphs: string[];
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
