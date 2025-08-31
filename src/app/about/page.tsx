import { Metadata } from 'next';
import Layout from '@/components/Layout';
import { Users, Target, Award, Heart, Globe, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Bitnex Infotech | Software Development Company',
  description: 'Learn about Bitnex Infotech, our mission, values, and the experienced team behind innovative software solutions. We\'re passionate about building technology that makes a difference.',
  keywords: 'about bitnex infotech, software company, development team, mission, values, technology solutions',
};

const stats = [
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "10+" },
  { label: "Founded", value: "2024" },
  { label: "Team Members", value: "25+" }
];

const values = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex problems and drive digital transformation."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Collaboration",
    description: "We believe in the power of teamwork, both within our organization and in partnership with our clients."
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering high-quality solutions that exceed expectations."
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Passion",
    description: "We're passionate about technology and its potential to create positive impact in businesses and communities."
  }
];

const team = [
  {
    name: "Sunita",
    role: "Founder",
    description: "Founder overseeing vision, product strategy, and company culture.",
    image: "/placeholder.svg"
  },
  {
    name: "Mohit Soni",
    role: "CEO",
    description: "Leads operations, client relationships, and business growth across Bitnex Infotech.",
    image: "/placeholder.svg"
  },
  {
    name: "Rahul Kumar",
    role: "CTO",
    description: "Heads engineering, technical strategy, and architecture across web and mobile platforms.",
    image: "/placeholder.svg"
  },
  {
    name: "Dinesh Kumar",
    role: "Head HR",
    description: "Leads talent acquisition, people operations, and a high-performance culture.",
    image: "/placeholder.svg"
  }
];

const milestones = [
  { year: "2024", title: "Company Founded", description: "Bitnex Infotech was established with a vision to provide innovative software solutions." },
  { year: "2024", title: "First Major Client", description: "Secured our first enterprise client and delivered a successful e-commerce platform." },
  { year: "2024", title: "Team Expansion", description: "Grew our team to 25 members and expanded service offerings." },
  { year: "2024", title: "Cloud Expertise", description: "Launched cloud migration and DevOps services with strong AWS expertise." },
  { year: "2024", title: "Mobile Focus", description: "Expanded into mobile app development with React Native and Flutter." },
  { year: "2025", title: "20+ Projects", description: "Reached milestone of 20+ successful projects and 10+ satisfied clients." }
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              About <span className="gradient-text">Bitnex Infotech</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We are a passionate team of developers, designers, and innovators dedicated to 
              building exceptional software solutions that drive business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container-max section-padding">
          <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Bitnex Infotech, our mission is to empower businesses through innovative technology solutions. 
                We believe that well-crafted software can transform the way organizations operate, 
                communicate, and serve their customers.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We combine technical expertise with creative problem-solving to deliver solutions that 
                are not only functional but also scalable, maintainable, and future-ready.
              </p>
              <div className="flex items-center gap-4">
                <Globe className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Global Impact</h3>
                  <p className="text-sm text-muted-foreground">Building solutions that make a difference worldwide</p>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="h-24 w-24 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">Powered by Innovation</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our company culture.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-background rounded-lg p-6 border">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind Bitnex Infotech's success. We're a diverse team of experts 
              passionate about creating exceptional software solutions.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a small startup to a growing software development company, here's our story.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:-translate-x-0.5"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="absolute left-4 w-3 h-3 bg-primary rounded-full lg:left-1/2 lg:-translate-x-1.5"></div>
                  <div className={`flex-1 pl-12 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-background rounded-lg border p-6">
                      <div className="text-sm font-medium text-primary mb-1">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We'd love to learn about your project and discuss how we can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Start a Project
              </a>
              <a 
                href="/careers"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
