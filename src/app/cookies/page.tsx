import { Metadata } from "next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Cookie Policy - Bitnex Infotech",
  description:
    "Cookie Policy for Bitnex Infotech. Learn about how we use cookies and tracking technologies on our website.",
  keywords:
    "cookie policy, cookies, tracking, website analytics, bitnex infotech",
};

export default function CookiesPage() {
  return (
    <Layout>
      <div className="container-max section-padding py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: January 1, 2024
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small text files that are stored on your computer or
                mobile device when you visit a website. They help websites
                remember information about your visit, which can make your next
                visit easier and the site more useful to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                How We Use Cookies
              </h2>
              <p className="mb-4">
                We use cookies to improve your experience on our website and to
                help us understand how our site is being used. Specifically, we
                use cookies for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Essential website functionality</li>
                <li>Remembering your preferences and settings</li>
                <li>Analyzing website traffic and usage patterns</li>
                <li>Improving our website performance</li>
                <li>Personalizing content and advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Types of Cookies We Use
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  Essential Cookies
                </h3>
                <p className="mb-3">
                  These cookies are necessary for the website to function
                  properly. They cannot be disabled in our systems.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Session cookies for website functionality</li>
                  <li>Security cookies for fraud prevention</li>
                  <li>Load balancing cookies</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  Analytics Cookies
                </h3>
                <p className="mb-3">
                  These cookies help us understand how visitors interact with
                  our website by collecting and reporting information
                  anonymously.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Google Analytics cookies</li>
                  <li>Page view tracking</li>
                  <li>User behavior analysis</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  Functional Cookies
                </h3>
                <p className="mb-3">
                  These cookies allow the website to provide enhanced
                  functionality and personalization.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Language preferences</li>
                  <li>Theme settings</li>
                  <li>Form data retention</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  Marketing Cookies
                </h3>
                <p className="mb-3">
                  These cookies may be set through our site by our advertising
                  partners to build a profile of your interests.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Social media integration</li>
                  <li>Advertising targeting</li>
                  <li>Campaign effectiveness</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Third-Party Cookies
              </h2>
              <p className="mb-4">
                We may also use third-party services that set cookies on our
                website:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Google Analytics:</strong> For website traffic
                  analysis
                </li>
                <li>
                  <strong>Google reCAPTCHA:</strong> For spam protection on
                  forms
                </li>
                <li>
                  <strong>Social Media Plugins:</strong> For social sharing
                  functionality
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Managing Your Cookie Preferences
              </h2>
              <p className="mb-4">
                You have several options for managing cookies:
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Browser Settings</h3>
                <p className="mb-3">
                  Most web browsers allow you to control cookies through their
                  settings preferences:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies</li>
                  <li>Delete cookies when you close your browser</li>
                  <li>Get notifications when a cookie is set</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Opt-Out Links</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google Analytics Opt-out
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://optout.aboutads.info/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Network Advertising Initiative Opt-out
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookie Retention</h2>
              <p className="mb-4">
                Different cookies have different retention periods:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Session cookies:</strong> Deleted when you close your
                  browser
                </li>
                <li>
                  <strong>Persistent cookies:</strong> Remain for a set period
                  (usually 1-24 months)
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Typically retained for 2
                  years
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Updates to This Policy
              </h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. Please revisit this page regularly to stay
                informed about our use of cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies, please
                contact us at:
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
