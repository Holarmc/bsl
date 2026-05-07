import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BSL | Engineering Reliable IT & Business Growth',
  description: 'Enterprise-grade IT Support, Managed Services, Infrastructure Solutions, and Training designed for scalable business growth.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface" id="home">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            alt="BSL Infrastructure"
            src="https://lh3.googleusercontent.com/aida/ADBb0ugPUOZYfGlfAKz9JbiCntCQgRPCZH1sBkIddbVZFob-Yh-SJ3Nhma5XyPHov1HqPQ1yhPUdnA46DFhH0sorPLS65OR2QLzx4KqU8C4YWqm-hU2qVLx7GtMHDUoKprMdQdI__-YjtNdYCY9x06aCjDEC2AUki2IeQ1ANR9elDtfihRFdw6DwurnXYu9nVDZMZvYoiyQjINFjWQ1MuoSA0y-Yord-c5RoicSBSoalyKqOttrAiTm0S5J-LMfGUkzJmLrBLghg3oqp"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <div className="space-y-stack-md">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-container/10 text-primary font-label-sm uppercase tracking-widest">
              Enterprise IT Solutions
            </span>
            <h1 className="font-h1 text-h1 text-on-background">
              Engineering Reliable IT. <span className="text-primary">Powering Business Growth.</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-xl">
              We deliver enterprise-grade IT Support, Managed Services, Infrastructure Solutions, Migration, and Training — designed to keep your business secure, scalable, and always operational.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:translate-y-[-2px] transition-all">
                Get a Free Consultation
              </button>
              <button className="border-2 border-on-background text-on-background px-8 py-4 rounded-xl font-bold hover:bg-on-background hover:text-white transition-all">
                Explore Our Services
              </button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 bg-white p-4">
              <Image
                src="https://lh3.googleusercontent.com/aida/ADBb0uhqmhlOM_5oT8gqroMvW3CBFyY0WJ0cJJMxpngpEUPTu-aRQxxits3dcZBMnn_pba9pEmg9283LLdb8cZWEqaUQqXce_qyDonQV1T2RL6RYAu1L9nfUdLJRrjHPT0n9kzWfR2atW0_K3GSdNBIi3e-kpML1MFDEG0tWfoUWZImuHMDm_FTlNz9zNHLXeUL-otTfkEoKm60qmJHkIFw8GtV4AU5EXUjTv7pkrkkV7hezOQ5yEI_SjzmPn238x-jJqYUW-aRCuXxGGw"
                alt="Digital Dashboard"
                width={500}
                height={400}
                className="rounded-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className="font-bold">Zero Disruption</span>
              </div>
              <p className="text-body-md text-on-surface-variant">Seamless migration with 100% data integrity and zero downtime strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Bento Style) */}
      <section className="py-section-padding bg-surface-container-low" id="about">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 flex flex-col justify-center space-y-stack-md">
              <h2 className="font-h2 text-h2 text-on-background">Stabilize, Optimize, Transform</h2>
              <p className="text-body-lg text-on-surface-variant">
                We are a technology solutions company focused on helping organizations build, manage, and scale resilient IT environments. From day-to-day IT support to complex infrastructure migrations, we combine deep technical expertise with practical execution to deliver measurable business outcomes.
              </p>
            </div>
            <div className="md:col-span-4 bg-primary text-on-primary p-10 rounded-3xl flex flex-col justify-between">
              <span className="material-symbols-outlined text-5xl opacity-40">rocket_launch</span>
              <div className="mt-8">
                <h3 className="font-h3 text-h3 mb-2">Our Vision</h3>
                <p className="text-body-md opacity-90">To become a leading technology partner in Africa, enabling businesses to thrive through resilient, innovative IT solutions.</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-white p-10 rounded-3xl shadow-sm border-b-4 border-secondary">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">track_changes</span>
              <h3 className="font-h3 text-h3 text-on-background mb-2">Our Mission</h3>
              <p className="text-body-md text-on-surface-variant">To deliver reliable, secure, and scalable technology services that empower organizations to adapt confidently to change.</p>
            </div>
            <div className="md:col-span-8 bg-surface-container-highest p-10 rounded-3xl flex flex-col md:flex-row gap-gutter items-center">
              <div className="flex-1">
                <h3 className="font-h3 text-h3 text-on-background mb-4">The RETIC Values</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 font-bold text-primary"><span className="w-2 h-2 rounded-full bg-primary"></span> Reliability</div>
                  <div className="flex items-center gap-2 font-bold text-primary"><span className="w-2 h-2 rounded-full bg-primary"></span> Excellence</div>
                  <div className="flex items-center gap-2 font-bold text-primary"><span className="w-2 h-2 rounded-full bg-primary"></span> Trust</div>
                  <div className="flex items-center gap-2 font-bold text-primary"><span className="w-2 h-2 rounded-full bg-primary"></span> Innovation</div>
                  <div className="flex items-center gap-2 font-bold text-primary"><span className="w-2 h-2 rounded-full bg-primary"></span> Customer-Centricity</div>
                </div>
              </div>
              <div className="w-32 h-32 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-primary font-h2 border-4 border-primary">RETIC</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-section-padding bg-white" id="services">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center max-w-3xl mx-auto mb-stack-lg">
            <h2 className="font-h2 text-h2 text-on-background mb-stack-md">Specialized IT Solutions</h2>
            <p className="text-body-lg text-on-surface-variant">Comprehensive enterprise services to manage your technology lifecycle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Managed Services */}
            <div className="group p-stack-lg rounded-3xl bg-surface-container-low hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary">
                <span className="material-symbols-outlined text-3xl">settings_remote</span>
              </div>
              <h3 className="font-h3 text-h3 mb-4">IT Managed Services</h3>
              <p className="text-body-md mb-6 opacity-80">Proactive, 24/7 monitoring and end-to-end management of your enterprise network and servers.</p>
              <ul className="space-y-2 mb-8 font-body-md opacity-70">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check</span> 24/7 NOC Support</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check</span> Backup &amp; DR</li>
              </ul>
              <a className="inline-flex items-center gap-2 font-bold underline group-hover:no-underline" href="#">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            {/* Migration Services */}
            <div className="group p-stack-lg rounded-3xl bg-surface-container-low hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary">
                <span className="material-symbols-outlined text-3xl">swap_calls</span>
              </div>
              <h3 className="font-h3 text-h3 mb-4">Migration Services</h3>
              <p className="text-body-md mb-6 opacity-80">Seamless transition of critical apps and infrastructure with zero data loss and minimal downtime.</p>
              <ul className="space-y-2 mb-8 font-body-md opacity-70">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check</span> Cloud &amp; DC Transition</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check</span> DB Modernization</li>
              </ul>
              <a className="inline-flex items-center gap-2 font-bold underline group-hover:no-underline" href="#">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            {/* Infrastructure */}
            <div className="group p-stack-lg rounded-3xl bg-surface-container-low hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary">
                <span className="material-symbols-outlined text-3xl">dns</span>
              </div>
              <h3 className="font-h3 text-h3 mb-4">Infrastructure Setup</h3>
              <p className="text-body-md mb-6 opacity-80">Design and deployment of robust network architecture, storage, and data center environments.</p>
              <ul className="space-y-2 mb-8 font-body-md opacity-70">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check</span> Network Architecture</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check</span> System Deployment</li>
              </ul>
              <a className="inline-flex items-center gap-2 font-bold underline group-hover:no-underline" href="#">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IT Training Section */}
      <section className="py-section-padding bg-surface-container-highest" id="training">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col lg:flex-row gap-stack-lg items-center">
            <div className="lg:w-1/2">
              <Image
                src="https://lh3.googleusercontent.com/aida/ADBb0uhSbeVZ4O50NS6K8j7eO1WDNv9eJRwOBRRdTo47aRurxb0jYZpsklysLIFy6IEINVTzon0STCKsD4nu-WM0TbpLYCmHJdQ8iHXjEefK8Er4G9JjlfDNOY6-LRbQjs3POUySfUGJTVPgUku4y-Nuxgo9kxYJhEKYOYHYHHHXgv4Qm43e-5_MnYOB0On9AM_sZTJq9FAcB3qSopqL5yCE7LDQmltyy5fZnTbCmKmpee55U_AuOMpcnBM_W0k5cga0WYL4Dy6Nm-MC"
                alt="IT Training Session"
                width={500}
                height={400}
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="lg:w-1/2 space-y-stack-md">
              <span className="text-secondary font-bold font-label-sm uppercase tracking-widest">Knowledge Transfer</span>
              <h2 className="font-h2 text-h2 text-on-background">Empowering High-Performing IT Teams</h2>
              <p className="text-body-lg text-on-surface-variant">
                Practical, outcome-driven training from foundational support to advanced cloud operations. We bridge the gap between classroom theory and real-world execution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">school</span>
                  <div>
                    <h4 className="font-bold">IT Foundations</h4>
                    <p className="text-sm text-on-surface-variant">Ticketing &amp; troubleshooting</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">cloud_done</span>
                  <div>
                    <h4 className="font-bold">Cloud &amp; Security</h4>
                    <p className="text-sm text-on-surface-variant">AWS, Azure &amp; EDR basics</p>
                  </div>
                </div>
              </div>
              <button className="bg-on-background text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all flex items-center gap-2">
                View Training Catalog <span className="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Closing Section */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <h2 className="font-h1 text-h2 mb-stack-md">Ready to transform your IT?</h2>
          <p className="text-body-lg mb-stack-lg opacity-90 max-w-2xl mx-auto">
            Partner with us to build a resilient, secure, and high-performing technology environment. Let&apos;s start with a free assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all">
              Schedule a Consultation
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
