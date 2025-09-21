"use client";


import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });
import {
  ArrowRight,
  Code,
  Smartphone,
  Cloud,
  Users,
  Star,
  CheckCircle,
  Globe,
  Zap,
  Shield,
} from "lucide-react";

export default function HomePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [captchaReset, setCaptchaReset] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if reCAPTCHA is completed
    if (!recaptchaToken) {
      toast({
        title: "Please complete the reCAPTCHA",
        description: "We need to verify that you're not a robot.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quick-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        const err = await response.text().catch(() => null);
        throw new Error(err || `Server responded ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Quote request sent!",
          description:
            result.message ||
            "We'll send you a custom proposal within 24 hours.",
        });

        setFormData({ name: "", email: "", message: "" });

        // Reset reCAPTCHA
        setRecaptchaToken(null);
        setCaptchaReset((c) => c + 1);
      } else {
        toast({
          title: "Error sending request",
          description: result.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Quick quote error:", error);
      toast({
        title: "Error sending request",
        description: "Please try again later.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Modern, responsive websites built with React, Next.js, and cutting-edge technologies.",
      features: [
        "React & Next.js",
        "Responsive Design",
        "Performance Optimized",
        "SEO Ready",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile apps using React Native and Flutter.",
      features: ["React Native", "Flutter", "iOS & Android", "Cross-platform"],
    },
    // {
    //   icon: Cloud,
    //   title: "DevOps & Cloud",
    //   description:
    //     "Scalable cloud infrastructure and CI/CD pipelines on AWS and other platforms.",
    //   features: ["AWS Services", "CI/CD Pipelines", "Docker", "Kubernetes"],
    // },
    {
      icon: Users,
      title: "Staffing Solutions",
      description:
        "Skilled developers and IT professionals to augment your team and accelerate project delivery.",
      features: [
        "Developer Outsourcing",
        "Team Augmentation",
        "Remote Teams",
        "Flexible Contracts",
      ],
    },
  ];

  const projects = [
    {
      title: "Dukan E-Commerce",
      description:
        "A comprehensive e-commerce platform with advanced inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-Commerce",
      image: "/placeholder.svg",
    },
    {
      title: "Jewel Website",
      description:
        "Elegant jewelry showcase website with virtual try-on features and seamless online ordering system.",
      technologies: ["Next.js", "Three.js", "PostgreSQL", "AWS"],
      category: "Luxury Retail",
      image: "/placeholder.svg",
    },
    {
      title: "MyClean Drycleaner App",
      description:
        "Mobile app connecting customers with local dry cleaning services, featuring real-time tracking and scheduling.",
      technologies: ["React Native", "Firebase", "Google Maps", "Stripe"],
      category: "Service Platform",
      image: "/placeholder.svg",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart Inc.",
      content:
        "Bitnex Infotech transformed our vision into a scalable platform that exceeded all expectations. Their technical expertise and attention to detail is unmatched.",
      rating: 5,
      avatar: "/placeholder.svg",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO, InnovateCorp",
      content:
        "Working with Bitnex Infotech was a game-changer. They delivered a robust mobile app that helped us scale our business 10x in just 6 months.",
      rating: 5,
      avatar: "/placeholder.svg",
    },
    {
      name: "Emily Johnson",
      role: "Founder, CreativeStudio",
      content:
        "The team at Bitnex Infotech understood our requirements perfectly and delivered a beautiful, functional website that truly represents our brand.",
      rating: 5,
      avatar: "/placeholder.svg",
    },
  ];

  const techStack = [
    "React",
    "Next.js",
    "React Native",
    "Flutter",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
    "TypeScript",
  ];

  const stats = [
    { label: "Projects Delivered", value: "20+" },
    { label: "Happy Clients", value: "10+" },
    { label: "Founded", value: "2024" },
    { label: "Team Members", value: "25+" },
  ];

  const partnerships = [
    {
      name: "DesignRush",
      href: "https://www.designrush.com/agency/profile/bitnex-infotech",
      imageSrc: "/images/designrush-badge.png",
      alt: "Featured on the DesignRush list of top Web Development Companies",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding py-20 lg:py-32">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                🚀 Cutting-edge Software Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Building the
                <span className="gradient-text"> Future </span>
                of Software
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                We create innovative digital solutions that transform businesses
                and drive growth through cutting-edge technology and expert
                craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
                >
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-20"></div>
              <Card className="relative backdrop-blur">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-8">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold gradient-text">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding py-20 bg-muted/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive{" "}
              <span className="gradient-text">Tech Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From web development to mobile apps, cloud infrastructure, and
              staffing solutions, we provide end-to-end solutions for your
              digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding py-20">
        <div className="container-max">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Technology Stack
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powered by{" "}
              <span className="gradient-text">Modern Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest and most reliable technologies to build
              scalable, secure, and high-performance applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding py-20 bg-muted/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover some of our recent projects that showcase our expertise
              and commitment to delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding py-20">
        <div className="container-max">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Client Feedback
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with Bitnex Infotech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent mr-3"></div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="section-padding py-20">
        <div className="container-max">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Partnerships
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partnership <span className="gradient-text">With</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We’re proud to partner with industry leaders.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerships.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-xl border bg-background p-6 hover:shadow-lg transition"
                aria-label={`${p.name} partnership`}
              >
                <img
                  src={p.imageSrc}
                  alt={p.alt}
                  className="h-24 w-auto object-contain"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Contact Form */}
      <section className="section-padding py-20 bg-muted/50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Get Started
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your
                <span className="gradient-text"> Business?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your project and explore how our expertise can
                help you achieve your goals. Get a free consultation today.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Secure & Reliable</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Global Reach</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
                <CardDescription>
                  Tell us about your project and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    required
                    rows={4}
                  />
                  <div className="space-y-4">
                    <ReCAPTCHA
                      key={captchaReset}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                      onChange={(token: any) => setRecaptchaToken(token)}
                      onExpired={() => setRecaptchaToken(null)}
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting || !recaptchaToken}
                    >
                      {isSubmitting ? "Sending..." : "Get Free Quote"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
