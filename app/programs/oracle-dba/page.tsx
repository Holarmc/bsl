import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oracle Enterprise DBA Certification | BSL Training',
  description: 'Comprehensive Oracle Database Administration training program with hands-on labs and certification.',
}

export default function OracleDBA() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-label-sm uppercase tracking-widest mb-4">Certification Program</span>
            <h1 className="font-h1 text-h1 mb-6">Oracle Enterprise DBA Certification</h1>
            <p className="text-body-lg opacity-90 mb-8">
              Master the fundamentals and advanced techniques of Oracle Database Administration. This 12-week intensive program covers architecture, performance tuning, backup & recovery, and security best practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all">
                Enroll Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all">
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-outline-variant">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">calendar_today</span>
              <h3 className="font-h3 text-h3 text-on-background mb-2">Duration</h3>
              <p className="text-on-surface-variant">12 weeks (40 hours per week)</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-outline-variant">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">verified</span>
              <h3 className="font-h3 text-h3 text-on-background mb-2">Certification</h3>
              <p className="text-on-surface-variant">Oracle Certified Associate DBA</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-outline-variant">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">school</span>
              <h3 className="font-h3 text-h3 text-on-background mb-2">Format</h3>
              <p className="text-on-surface-variant">Instructor-Led + Hands-On Labs</p>
            </div>
          </div>

          <div className="bg-surface-container-low p-12 rounded-2xl">
            <h2 className="font-h2 text-h2 text-on-background mb-8">Program Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-h3 text-h3 text-on-background mb-4">Foundation Modules</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <span className="text-on-surface-variant">Oracle Database Architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <span className="text-on-surface-variant">Installation and Configuration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <span className="text-on-surface-variant">Database Storage Structures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <span className="text-on-surface-variant">Memory Management</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-h3 text-h3 text-on-background mb-4">Advanced Modules</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <span className="text-on-surface-variant">Backup & Recovery Strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <span className="text-on-surface-variant">Performance Tuning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <span className="text-on-surface-variant">Database Security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                    <span className="text-on-surface-variant">High Availability Solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-section-padding bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <h2 className="font-h2 text-h2 text-on-background mb-12 text-center">What You&apos;ll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0">check_circle</span>
                <div>
                  <h3 className="font-bold text-on-background mb-2">Database Administration</h3>
                  <p className="text-on-surface-variant">Learn to install, configure, and manage Oracle databases in production environments.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0">check_circle</span>
                <div>
                  <h3 className="font-bold text-on-background mb-2">Performance Optimization</h3>
                  <p className="text-on-surface-variant">Master tuning techniques to optimize database performance and resource utilization.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0">check_circle</span>
                <div>
                  <h3 className="font-bold text-on-background mb-2">Backup & Recovery</h3>
                  <p className="text-on-surface-variant">Implement comprehensive backup strategies and disaster recovery solutions.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0">check_circle</span>
                <div>
                  <h3 className="font-bold text-on-background mb-2">Security Management</h3>
                  <p className="text-on-surface-variant">Secure your database with user management, encryption, and auditing techniques.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0">check_circle</span>
                <div>
                  <h3 className="font-bold text-on-background mb-2">High Availability</h3>
                  <p className="text-on-surface-variant">Design and implement HA solutions using Data Guard, RAC, and other technologies.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0">check_circle</span>
                <div>
                  <h3 className="font-bold text-on-background mb-2">Real-World Projects</h3>
                  <p className="text-on-surface-variant">Work on hands-on labs and real-world scenarios to build practical experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <h2 className="font-h2 text-h2 text-on-background mb-8">Prerequisites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="font-h3 text-h3 text-on-background mb-6">Minimum Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">info</span>
                  <span className="text-on-surface-variant">Basic understanding of relational databases</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">info</span>
                  <span className="text-on-surface-variant">Linux/Unix command-line familiarity</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">info</span>
                  <span className="text-on-surface-variant">1-2 years IT experience</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <h3 className="font-h3 text-h3 text-on-background mb-6">Technical Setup</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">info</span>
                  <span className="text-on-surface-variant">Laptop with 8GB RAM minimum</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">info</span>
                  <span className="text-on-surface-variant">VirtualBox or VMware installed</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">info</span>
                  <span className="text-on-surface-variant">Stable internet connection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-section-padding bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <h2 className="font-h2 text-h2 text-on-background mb-12 text-center">Pricing Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="p-8 rounded-xl border-2 border-outline-variant">
              <h3 className="font-h3 text-h3 text-on-background mb-4">Group Training</h3>
              <p className="text-3xl font-bold text-primary mb-4">Custom pricing</p>
              <p className="text-on-surface-variant mb-6">For organizations with 5+ participants</p>
              <button className="w-full bg-white border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary/10 transition-all">
                Request Quote
              </button>
            </div>
            <div className="p-8 rounded-xl border-2 border-primary bg-primary/5">
              <span className="inline-block px-3 py-1 rounded-full bg-primary text-on-primary text-label-sm font-bold mb-4">Most Popular</span>
              <h3 className="font-h3 text-h3 text-on-background mb-4">Individual Training</h3>
              <p className="text-3xl font-bold text-primary mb-4">Contact for pricing</p>
              <p className="text-on-surface-variant mb-6">Flexible scheduling and one-on-one support</p>
              <button className="w-full bg-primary text-on-primary px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <h2 className="font-h1 text-h2 mb-6">Ready to become an Oracle DBA?</h2>
          <p className="text-body-lg mb-10 opacity-90 max-w-2xl mx-auto">
            Join our next cohort and take your database administration skills to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all">
              Enroll Now
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
