import { Metadata } from 'next';
import Layout from '@/components/Layout';
import { CheckCircle, Code, Database, Globe, Smartphone, Cloud, Shield, Zap, Server, Container, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services - Bitnex Infotech | Custom Software Development Solutions',
  description: 'Comprehensive software development services including web applications, mobile apps, cloud solutions, and more. Let\'s discuss the best solution for your business needs.',
  keywords: 'software development, web development, mobile apps, cloud solutions, custom software, React, Next.js, Flutter',
};

const services = [
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and TypeScript. Responsive, fast, and SEO-optimized.",
    features: [
      "React & Next.js Applications",
      "E-commerce Solutions",
      "Content Management Systems",
      "Progressive Web Apps (PWA)",
      "API Development & Integration"
    ]
  },
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
    features: [
      "iOS & Android Apps",
      "React Native Development",
      "Flutter Applications",
      "Cross-platform Solutions",
      "App Store Optimization"
    ]
  },
  {
    icon: <Cloud className="h-12 w-12 text-primary" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps solutions on AWS, ensuring high availability and performance.",
    features: [
      "AWS Cloud Architecture",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Server Management",
      "Database Solutions"
    ]
  },
  {
    icon: <Database className="h-12 w-12 text-primary" />,
    title: "Backend Development",
    description: "Robust backend systems with secure APIs, database design, and microservices architecture.",
    features: [
      "RESTful API Development",
      "Database Design & Optimization",
      "Microservices Architecture",
      "Third-party Integrations",
      "Performance Optimization"
    ]
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Security & Compliance",
    description: "Implement security best practices and ensure compliance with industry standards and regulations.",
    features: [
      "Security Audits",
      "Data Protection",
      "GDPR Compliance",
      "Secure Authentication",
      "Vulnerability Assessment"
    ]
  },
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    title: "Performance Optimization",
    description: "Optimize your applications for speed, scalability, and user experience across all platforms.",
    features: [
      "Code Optimization",
      "Database Tuning",
      "CDN Implementation",
      "Caching Strategies",
      "Load Testing"
    ]
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: "Staffing Solutions",
    description: "Outsource skilled developers and IT professionals to augment your team and accelerate project delivery.",
    features: [
      "Developer Outsourcing",
      "Team Augmentation",
      "Remote Development Teams",
      "Flexible Contract Models",
      "Dedicated Resources"
    ]
  }
];

const technologies = [
  {
    name: "React",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 mb-3 mx-auto" fill="currentColor">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.95-1.44C13.17 9 12.6 9 12 9s-1.17 0-1.67.06c-.33.44-.65.91-.95 1.44l-.81 1.5.81 1.5c.3.53.62 1 .95 1.44.5.06 1.07.06 1.67.06s1.17 0 1.67-.06c.33-.44.65-.91.95-1.44M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
      </svg>
    )
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 mb-3 mx-auto" fill="currentColor">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.75 8.5V15.5H8.5V8.5H9.75ZM16.25 8.5L12.5 13.5L16.25 15.5V8.5Z"/>
      </svg>
    )
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 mb-3 mx-auto" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    )
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <Server className="h-8 w-8 mb-3 mx-auto text-green-600" />
  },
  {
    name: "React Native",
    category: "Mobile",
    icon: <Smartphone className="h-8 w-8 mb-3 mx-auto text-blue-500" />
  },
  {
    name: "Flutter",
    category: "Mobile",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 mb-3 mx-auto text-blue-400" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.871L11.91 14.456l-4.615-4.614L21.017 6.12l-7.37 7.37-1.043-1.043z"/>
      </svg>
    )
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: <Cloud className="h-8 w-8 mb-3 mx-auto text-orange-500" />
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: <Container className="h-8 w-8 mb-3 mx-auto text-blue-600" />
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: <Database className="h-8 w-8 mb-3 mx-auto text-blue-700" />
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 mb-3 mx-auto text-green-500" fill="currentColor">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z"/>
      </svg>
    )
  },
  {
    name: "Redis",
    category: "Cache",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 mb-3 mx-auto text-red-500" fill="currentColor">
        <path d="M10.5 2.661l.54.997-1.797.644-.54-.997L10.5 2.661zm2.077-2.304l.54.997-1.797.644-.54-.997 1.797-.644zm3.077 1.304l.54.997-1.797.644-.54-.997 1.797-.644zM24 18.588l-12 5.414L0 18.588l12-5.414L24 18.588z"/>
      </svg>
    )
  },
  {
    name: "GraphQL",
    category: "API",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 mb-3 mx-auto text-pink-500" fill="currentColor">
        <path d="M5.8 12.2h12.4c.1 0 .2-.1.2-.2s-.1-.2-.2-.2H5.8c-.1 0-.2.1-.2.2s.1.2.2.2zm8.4-7.5c-.1 0-.1-.1-.2-.1s-.1.1-.2.1v.9c0 .1.1.2.2.2s.2-.1.2-.2v-.9zm-4.2 0c-.1 0-.1-.1-.2-.1s-.1.1-.2.1v.9c0 .1.1.2.2.2s.2-.1.2-.2v-.9zm2.1-.9c.1 0 .2-.1.2-.2s-.1-.2-.2-.2-.2.1-.2.2.1.2.2.2zm0 16.4c-.1 0-.2.1-.2.2s.1.2.2.2.2-.1.2-.2-.1-.2-.2-.2z"/>
      </svg>
    )
  }
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive software development solutions tailored to your business needs.
              From web applications to mobile apps, cloud infrastructure, and staffing solutions.
            </p>
            <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
              Let's Talk for Best Price
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/5">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end software development and staffing services to help your business grow and succeed in the digital world.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="group bg-background rounded-lg border p-8 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver modern, scalable, and maintainable solutions.
            </p>
          </div>
          
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-background rounded-lg border p-4 text-center hover:border-primary/20 transition-colors hover:shadow-md group">
                <div className="flex flex-col items-center">
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    {tech.icon}
                  </div>
                  <div className="font-semibold text-sm mb-1">{tech.name}</div>
                  <div className="text-xs text-muted-foreground">{tech.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a proven development methodology to ensure project success and client satisfaction.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements, goals, and target audience" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and technical specifications" },
              { step: "03", title: "Development", description: "Building your solution using agile development methodology" },
              { step: "04", title: "Deployment", description: "Testing, deployment, and ongoing support & maintenance" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss your requirements and find the best solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Get Started Today
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
