import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | BiproSyncLogic',
  description: 'Get in touch with our team. We&apos;re here to help with your IT infrastructure and business needs.',
}

export default function Contacts() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-section-padding bg-gradient-to-br from-primary to-primary-container text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="max-w-3xl">
            <h1 className="font-h1 text-h1 mb-6">Let&apos;s Start a Conversation</h1>
            <p className="text-body-lg opacity-90">
              Whether you have questions about our services, need a consultation, or want to discuss your IT challenges, we&apos;re here to help. Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-h2 text-h2 text-on-background mb-8">Contact Information</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl">phone</span>
                    <h3 className="font-bold text-on-background">Phone</h3>
                  </div>
                  <a href="tel:+2349058788143" className="text-on-surface-variant hover:text-primary transition-colors">
                    +234 905 878 8143
                  </a>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                    <h3 className="font-bold text-on-background">Email</h3>
                  </div>
                  <a href="mailto:info@bsl.com" className="text-on-surface-variant hover:text-primary transition-colors">
                    info@bsl.com
                  </a>
                </div>

                {/* Address */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                    <h3 className="font-bold text-on-background">Office Location</h3>
                  </div>
                  <address className="not-italic text-on-surface-variant">
                    11 Coachwood Street<br />
                    Northern Foreshore Estate<br />
                    Chevron, Lagos<br />
                    Nigeria
                  </address>
                </div>

                {/* Business Hours */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
                    <h3 className="font-bold text-on-background">Business Hours</h3>
                  </div>
                  <p className="text-on-surface-variant">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form className="space-y-6">
                <div>
                  <label className="block text-on-background font-bold mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-white text-on-background placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-on-background font-bold mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-white text-on-background placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-on-background font-bold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+234 905 878 8143"
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-white text-on-background placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-on-background font-bold mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-white text-on-background placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-on-background font-bold mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-white text-on-background focus:outline-none focus:border-primary transition-colors">
                    <option value="">Select a subject</option>
                    <option value="managed-services">Managed Services Inquiry</option>
                    <option value="migration">Migration Services</option>
                    <option value="training">Training Programs</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-on-background font-bold mb-2">Message</label>
                  <textarea
                    placeholder="Tell us about your IT needs..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-white text-on-background placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="privacy" className="w-4 h-4" />
                  <label htmlFor="privacy" className="text-sm text-on-surface-variant">
                    I agree to the privacy policy and terms of service
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <h2 className="font-h2 text-h2 text-on-background mb-8 text-center">Find Us</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7454532577307!2d3.4254653!3d6.4262341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNi40MjYyMzQxJTIwTiAzLjQyNTQ2NTMlMjBF!5e0!3m2!1sen!2sng!4v0"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <h2 className="font-h2 text-h2 text-on-background mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="p-6 rounded-lg bg-white border border-outline-variant cursor-pointer group">
              <summary className="flex items-center justify-between font-bold text-on-background">
                What services does BSL offer?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-on-surface-variant mt-4">
                We offer IT Managed Services, Cloud Migration, Infrastructure Solutions, IT Support, and Professional Training programs designed for enterprise clients.
              </p>
            </details>

            <details className="p-6 rounded-lg bg-white border border-outline-variant cursor-pointer group">
              <summary className="flex items-center justify-between font-bold text-on-background">
                How quickly can you respond to support requests?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-on-surface-variant mt-4">
                We guarantee a response time of less than 30 minutes for critical issues and maintain 24/7 monitoring for all managed service clients.
              </p>
            </details>

            <details className="p-6 rounded-lg bg-white border border-outline-variant cursor-pointer group">
              <summary className="flex items-center justify-between font-bold text-on-background">
                Do you offer custom training programs?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-on-surface-variant mt-4">
                Yes, we offer customized training solutions tailored to your organization&apos;s specific needs. Contact our training team for more information.
              </p>
            </details>

            <details className="p-6 rounded-lg bg-white border border-outline-variant cursor-pointer group">
              <summary className="flex items-center justify-between font-bold text-on-background">
                What is your migration process like?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-on-surface-variant mt-4">
                Our migration process includes discovery & assessment, execution with automated tools, and post-migration validation & optimization to ensure zero downtime.
              </p>
            </details>

            <details className="p-6 rounded-lg bg-white border border-outline-variant cursor-pointer group">
              <summary className="flex items-center justify-between font-bold text-on-background">
                Do you provide SLA guarantees?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-on-surface-variant mt-4">
                Yes, we provide comprehensive SLA guarantees with 99.5% uptime assurance and maintain 100% SLA compliance records.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <h2 className="font-h1 text-h2 mb-6">Ready to partner with BSL?</h2>
          <p className="text-body-lg mb-10 opacity-90 max-w-2xl mx-auto">
            Schedule a free consultation with our team to discuss your IT infrastructure and business goals.
          </p>
          <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all">
            Schedule Consultation
          </button>
        </div>
      </section>
    </>
  )
}
