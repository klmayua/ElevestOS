import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";

async function submitContact(formData: FormData) {
  "use server";
}

export default function ContactPage() {
  return (
    <>
      <PublicNavbar />
      <main className="min-h-screen">
        <section className="pt-28 pb-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-display-lg font-bold text-on-surface tracking-tight mb-4">
              Contact Elevest Labs
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-3xl mx-auto">
              We respond to every inquiry within 24 hours. Whether you represent an NGO
              evaluating the platform, a funder exploring portfolio licensing, or a government
              programme requiring enterprise deployment, we are ready to talk.
            </p>
          </div>
        </section>

        <section className="px-6 pb-28">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <div className="bg-white border border-[#E2E8F0] rounded-lg p-8">
                <h2 className="text-heading-lg font-semibold text-on-surface mb-6">
                  Send us a message
                </h2>
                <form action={submitContact} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-body-md font-medium text-on-surface mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-outline-variant rounded-md text-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-body-md font-medium text-on-surface mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-outline-variant rounded-md text-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="you@organisation.org"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="organisation"
                      className="block text-body-md font-medium text-on-surface mb-2"
                    >
                      Organisation
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      required
                      className="w-full px-4 py-3 border border-outline-variant rounded-md text-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="Name of your NGO or institution"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-body-md font-medium text-on-surface mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-outline-variant rounded-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="demo">Platform Demo Request</option>
                      <option value="pricing">Pricing &amp; Licensing</option>
                      <option value="enterprise">Enterprise Deployment</option>
                      <option value="workshop">Workshop &amp; Training</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-body-md font-medium text-on-surface mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-outline-variant rounded-md text-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-y"
                      placeholder="Tell us about your organisation and what you need"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-surface-container-low border border-[#E2E8F0] rounded-lg p-8">
                <h2 className="text-heading-lg font-semibold text-on-surface mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-body-md font-semibold text-on-surface mb-1">Email</h3>
                      <a
                        href="mailto:hello@elevestos.com"
                        className="text-body-md text-primary hover:text-primary/80 transition-colors"
                      >
                        hello@elevestos.com
                      </a>
                      <p className="text-caption text-on-surface-variant mt-1">
                        General inquiries &amp; support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-body-md font-semibold text-on-surface mb-1">Location</h3>
                      <p className="text-body-md text-on-surface-variant leading-relaxed">
                        Operating globally with teams across Africa, Europe, and North America.
                      </p>
                      <p className="text-caption text-on-surface-variant mt-1">Headquarters: Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-body-md font-semibold text-on-surface mb-1">
                        Response Time
                      </h3>
                      <p className="text-body-md text-on-surface-variant leading-relaxed">
                        We respond to all inquiries within 24 hours during business days.
                      </p>
                      <p className="text-caption text-on-surface-variant mt-1">
                        Monday &ndash; Friday, 08:00 &ndash; 18:00 EAT
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#E2E8F0]">
                  <h3 className="text-body-md font-semibold text-on-surface mb-3">
                    What to Expect
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[11px] font-bold text-primary">1</span>
                      </span>
                      <p className="text-body-md text-on-surface-variant">
                        We acknowledge your message within a few hours.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[11px] font-bold text-primary">2</span>
                      </span>
                      <p className="text-body-md text-on-surface-variant">
                        A team member who understands your sector follows up with relevant
                        questions.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[11px] font-bold text-primary">3</span>
                      </span>
                      <p className="text-body-md text-on-surface-variant">
                        We schedule a call or product walkthrough if there is a genuine fit.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
