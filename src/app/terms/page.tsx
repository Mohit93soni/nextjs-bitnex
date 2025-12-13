import { Metadata } from "next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Terms of Service - Bitnex Infotech",
  description:
    "Terms of Service for Bitnex Infotech. Read our terms and conditions for using our software development services.",
  keywords: "terms of service, terms and conditions, legal, bitnex infotech",
};

export default function TermsPage() {
  return (
    <Layout>
      <div className="container-max section-padding py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: January 1, 2024
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="mb-4">
                By accessing and using Bitnex Infotech's services, you accept
                and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                2. Services Description
              </h2>
              <p className="mb-4">
                Bitnex Infotech provides software development services including
                but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Web application development</li>
                <li>Mobile application development</li>
                <li>Cloud infrastructure and DevOps services</li>
                <li>Software consulting and technical advisory</li>
                <li>Maintenance and support services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Client Responsibilities
              </h2>
              <p className="mb-4">Clients agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Provide accurate and complete information for project
                  requirements
                </li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Pay all fees according to the agreed payment schedule</li>
                <li>Respect intellectual property rights</li>
                <li>Use our services in compliance with applicable laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
              <p className="mb-4">
                Payment terms will be specified in individual project
                agreements. Generally:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Invoices are due within 30 days of receipt</li>
                <li>Late payments may incur additional charges</li>
                <li>Projects may be suspended for non-payment</li>
                <li>All prices are exclusive of applicable taxes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                5. Intellectual Property
              </h2>
              <p className="mb-4">
                Upon full payment, clients will receive ownership of
                custom-developed code and materials, excluding pre-existing
                intellectual property and third-party components.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                6. Warranties and Disclaimers
              </h2>
              <p className="mb-4">
                We provide our services "as is" and make no warranties, express
                or implied, regarding the services. We do not warrant that our
                services will be uninterrupted or error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                7. Limitation of Liability
              </h2>
              <p className="mb-4">
                In no event shall Bitnex Infotech be liable for any indirect,
                incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use,
                goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                8. Confidentiality
              </h2>
              <p className="mb-4">
                We respect the confidentiality of client information and will
                not disclose proprietary information to third parties without
                consent, except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
              <p className="mb-4">
                Either party may terminate services with written notice. Upon
                termination, client remains responsible for payment of services
                rendered up to the termination date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance
                with the laws of the State of California, without regard to its
                conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                11. Contact Information
              </h2>
              <p className="mb-4">
                For questions about these Terms of Service, please contact us
                at:
              </p>
              <ul className="list-none mb-4">
                <li>Email: hr@bitnexinfotech.com</li>
                <li>Phone: (+91)978-501-8175</li>
                <li>Address: Jhotwara, Jaipur</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
