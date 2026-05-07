import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Training Programs | BiproSyncLogic',
  description: 'Professional IT training programs covering Cloud, Cybersecurity, Infrastructure Management, and Database Administration.',
}

const courses = [
  {
    icon: 'school',
    title: 'IT Foundations',
    description: 'Ticketing, troubleshooting, and frontline IT support essentials.',
  },
  {
    icon: 'cloud_done',
    title: 'Cloud & Security',
    description: 'AWS, Azure, and EDR basics for modern infrastructure.',
  },
  {
    icon: 'database',
    title: 'Database Administration',
    description: 'Oracle DBA, SQL Server, and data management fundamentals.',
  },
  {
    icon: 'vpn_lock',
    title: 'Cybersecurity',
    description: 'Security best practices and threat mitigation strategies.',
  },
]

export default function Training() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-on-primary py-section-padding overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-label-sm uppercase tracking-widest mb-6">Professional Development</span>
            <h1 className="font-h1 text-h1 mb-6">Empower Your IT Team with Expert Training</h1>
            <p className="text-body-lg mb-8 opacity-90 max-w-2xl">
              Practical, hands-on training programs designed to upskill your team in cloud infrastructure, security, and enterprise IT management. Our instructors are certified professionals with real-world experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">
                Explore Courses
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-h2 text-on-background mb-4">Our Training Catalog</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              From foundational IT support to advanced cloud architectures, we offer certifiable programs tailored to your team&apos;s needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white border border-outline-variant hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">{course.icon}</span>
                </div>
                <h3 className="font-h3 text-h3 text-on-background mb-3">{course.title}</h3>
                <p className="text-body-md text-on-surface-variant mb-6">{course.description}</p>
                <a href="#" className="inline-flex items-center gap-2 font-bold text-primary hover:opacity-70 transition-opacity">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Delivery Method */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <h2 className="font-h2 text-h2 text-on-background mb-12 text-center">How We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">groups</span>
              <h3 className="font-h3 text-h3 text-on-background mb-3">Instructor-Led</h3>
              <p className="text-body-md text-on-surface-variant">
                Real-time, interactive sessions with certified instructors who bring hands-on expertise and personalized guidance.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">ondemand_video</span>
              <h3 className="font-h3 text-h3 text-on-background mb-3">Self-Paced Online</h3>
              <p className="text-body-md text-on-surface-variant">
                Flexible courses you can complete at your own pace with lifetime access to materials and ongoing support.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">diversity_3</span>
              <h3 className="font-h3 text-h3 text-on-background mb-3">Blended Learning</h3>
              <p className="text-body-md text-on-surface-variant">
                Combination of instructor-led sessions, hands-on labs, and self-paced modules for maximum retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-section-padding bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold text-label-sm uppercase tracking-widest mb-4 block">Flagship Program</span>
              <h2 className="font-h2 text-h2 text-on-background mb-6">Oracle Enterprise DBA Certification</h2>
              <p className="text-body-lg text-on-surface-variant mb-8">
                Master Oracle database administration with our comprehensive, hands-on training program. Suitable for beginner to intermediate DBAs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="text-on-background">12-week intensive program</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="text-on-background">Real-world lab environments</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="text-on-background">Certification included</span>
                </div>
              </div>
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all">
                Enroll Now
              </button>
            </div>
            <div>
              <Image
                src="https://lh3.googleusercontent.com/aida/ADBb0uhSbeVZ4O50NS6K8j7eO1WDNv9eJRwOBRRdTo47aRurxb0jYZpsklysLIFy6IEINVTzon0STCKsD4nu-WM0TbpLYCmHJdQ8iHXjEefK8Er4G9JjlfDNOY6-LRbQjs3POUySfUGJTVPgUku4y-Nuxgo9kxYJhEKYOYHYHHHXgv4Qm43e-5_MnYOB0On9AM_sZTJq9FAcB3qSopqL5yCE7LDQmltyy5fZnTbCmKmpee55U_AuOMpcnBM_W0k5cga0WYL4Dy6Nm-MC"
                alt="DBA Training"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-section-padding bg-surface-container-highest">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <h2 className="font-h2 text-h2 text-on-background mb-12 text-center">What Our Trainees Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10"></div>
                  <div>
                    <p className="font-bold text-on-background">Professional {i}</p>
                    <p className="text-sm text-on-surface-variant">IT Department</p>
                  </div>
                </div>
                <p className="text-body-md text-on-surface-variant mb-4">
                  &quot;The training was practical and immediately applicable to my role. The instructors were knowledgeable and supportive throughout the program.&quot;
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-primary">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <h2 className="font-h1 text-h2 mb-6">Ready to upskill your team?</h2>
          <p className="text-body-lg mb-10 opacity-90 max-w-2xl mx-auto">
            Contact us today to discuss custom training solutions tailored to your organization&apos;s needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all">
              Get Training Brochure
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
