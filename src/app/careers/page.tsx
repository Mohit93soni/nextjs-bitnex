import { Metadata } from 'next';
import Layout from '@/components/Layout';
import { MapPin, Clock, DollarSign, Users, Heart, Zap, Coffee, Laptop } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers - Bitnex Infotech | Join Our Software Development Team',
  description: 'Join Bitnex Infotech and be part of an innovative software development team. Explore exciting career opportunities in web development, mobile apps, and cloud solutions.',
  keywords: 'careers, jobs, software developer, react developer, mobile developer, remote work, bitnex infotech jobs',
};

const benefits = [
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours and work-life balance"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Collaborative Environment",
    description: "Work with passionate developers and learn from experienced mentors"
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Latest Technologies",
    description: "Work with cutting-edge tools and technologies in modern projects"
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: <Coffee className="h-8 w-8 text-primary" />,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and professional development"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Competitive Salary",
    description: "Market-competitive salaries with performance-based bonuses"
  }
];

const openings = [
  {
    title: "Senior React Developer",
    department: "Frontend Development",
    location: "Remote / Mumbai",
    type: "Full-time",
    experience: "3-5 years",
    description: "We're looking for an experienced React developer to build amazing user interfaces and web applications.",
    requirements: [
      "3+ years of React.js experience",
      "Strong knowledge of JavaScript, TypeScript",
      "Experience with Next.js, Redux, and modern frontend tools",
      "Understanding of responsive design and CSS frameworks",
      "Experience with Git and agile development"
    ],
    responsibilities: [
      "Develop and maintain React-based web applications",
      "Collaborate with designers and backend developers",
      "Write clean, maintainable, and testable code",
      "Participate in code reviews and technical discussions",
      "Mentor junior developers"
    ]
  },
  {
    title: "Full Stack Developer",
    department: "Development",
    location: "Remote / Bangalore",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join our team as a full stack developer working on both frontend and backend technologies.",
    requirements: [
      "2+ years of full stack development experience",
      "Proficiency in React, Node.js, and databases",
      "Experience with REST APIs and GraphQL",
      "Knowledge of cloud platforms (AWS preferred)",
      "Understanding of software development best practices"
    ],
    responsibilities: [
      "Build end-to-end web applications",
      "Design and implement RESTful APIs",
      "Work with databases and optimize queries",
      "Deploy applications to cloud platforms",
      "Collaborate with cross-functional teams"
    ]
  },
  {
    title: "Mobile App Developer",
    department: "Mobile Development",
    location: "Remote / Delhi",
    type: "Full-time",
    experience: "2-4 years",
    description: "Develop mobile applications using React Native and Flutter for iOS and Android platforms.",
    requirements: [
      "2+ years of mobile app development experience",
      "Experience with React Native or Flutter",
      "Knowledge of native iOS/Android development",
      "Understanding of mobile UI/UX principles",
      "Experience with app store deployment"
    ],
    responsibilities: [
      "Develop cross-platform mobile applications",
      "Integrate with backend APIs and services",
      "Optimize app performance and user experience",
      "Collaborate with design and product teams",
      "Maintain and update existing applications"
    ]
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Pune",
    type: "Full-time",
    experience: "3-5 years",
    description: "Help us build and maintain scalable cloud infrastructure and deployment pipelines.",
    requirements: [
      "3+ years of DevOps/Infrastructure experience",
      "Strong knowledge of AWS services",
      "Experience with Docker, Kubernetes",
      "Knowledge of CI/CD pipelines",
      "Scripting experience (Bash, Python)"
    ],
    responsibilities: [
      "Manage cloud infrastructure on AWS",
      "Build and maintain CI/CD pipelines",
      "Monitor system performance and reliability",
      "Implement security best practices",
      "Support development teams with infrastructure needs"
    ]
  }
];

const values = [
  "Innovation and continuous learning",
  "Open communication and transparency",
  "Work-life balance and flexibility",
  "Diversity and inclusion",
  "Customer-first mindset",
  "Quality and craftsmanship"
];

export default function CareersPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Be part of an innovative team that's building the future of software development. 
              We're always looking for talented individuals who share our passion for technology.
            </p>
            <a 
              href="#openings"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-secondary/5">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Work With Bitnex Infotech?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe that happy employees create exceptional work. Here's what makes Bitnex Infotech a great place to work.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background rounded-lg border p-6 text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Culture & Values</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Bitnex Infotech, we foster a culture of innovation, collaboration, and continuous learning. 
                Our team members are encouraged to experiment, take ownership, and grow both personally and professionally.
              </p>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 grid-cols-2">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
              </div>
              <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">4.8/5</div>
                <div className="text-sm text-muted-foreground">Glassdoor Rating</div>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">2 years</div>
                <div className="text-sm text-muted-foreground">Average Tenure</div>
              </div>
              <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Flexible Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-secondary/5">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore exciting opportunities to join our growing team and make an impact.
            </p>
          </div>
          
          <div className="space-y-8">
            {openings.map((job, index) => (
              <div key={index} className="bg-background rounded-lg border p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <a 
                    href={`/contact?position=${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 mt-4 lg:mt-0"
                  >
                    Apply Now
                  </a>
                </div>
                
                <p className="text-muted-foreground mb-6">{job.description}</p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Application Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our hiring process is designed to be transparent and help us get to know each other better.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Application", description: "Submit your application with resume and portfolio" },
              { step: "02", title: "Screening", description: "Initial phone/video call to discuss your background" },
              { step: "03", title: "Technical", description: "Technical interview and coding assessment" },
              { step: "04", title: "Final Interview", description: "Meet the team and discuss culture fit" }
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
      <section className="py-20 bg-secondary/5">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Match?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We're always interested in meeting talented individuals. Send us your resume and let's talk about future opportunities.
            </p>
            <a 
              href="/contact?subject=General Application"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
