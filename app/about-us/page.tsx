import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | BiproSyncLogic (BSL)',
  description: 'Learn about BiproSyncLogic, our mission, vision, and core values in delivering enterprise-grade IT infrastructure and managed services.',
}

const valueItems = [
  {
    icon: 'verified',
    title: 'Reliability',
    description: 'We deliver consistent, dependable solutions that businesses can trust.',
  },
  {
    icon: 'workspace_premium',
    title: 'Excellence',
    description: 'We uphold high standards in execution, performance, and service delivery.',
  },
  {
    icon: 'handshake',
    title: 'Trust',
    description: 'We operate with transparency, honesty, and accountability.',
  },
  {
    icon: 'lightbulb',
    title: 'Innovation',
    description: 'We embrace modern technologies and continuously improve our solutions.',
  },
  {
    icon: 'person_pin_circle',
    title: 'Customer Centricity',
    description: 'We prioritize our clients&apos; success and align our services to their goals.',
  },
]

export default function AboutUs() {
  return (
    <>
      {/* Hero Section / Header */}
      <section className="relative bg-on-primary py-section-padding overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center relative z-10">
          <div className="space-y-stack-md">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider">Our Identity</span>
            <h1 className="font-h1 text-h1 text-on-background">
              Empowering Enterprise with <span className="text-primary">Resilient IT</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              We are a technology solutions company focused on helping organizations build, manage, and scale resilient IT environments.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="https://lh3.googleusercontent.com/aida/ADBb0ugPUOZYfGlfAKz9JbiCntCQgRPCZH1sBkIddbVZFob-Yh-SJ3Nhma5XyPHov1HqPQ1yhPUdnA46DFhH0sorPLS65OR2QLzx4KqU8C4YWqm-hU2qVLx7GtMHDUoKprMdQdI__-YjtNdYCY9x06aCjDEC2AUki2IeQ1ANR9elDtfihRFdw6DwurnXYu9nVDZMZvYoiyQjINFjWQ1MuoSA0y-Yord-c5RoicSBSoalyKqOttrAiTm0S5J-LMfGUkzJmLrBLghg3oqp"
                alt="Enterprise IT Environment"
                width={500}
                height={375}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-container p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-on-primary font-h3 text-h3 font-bold">15+ Years</p>
              <p className="text-on-primary/80 font-body-md text-body-md">Combined Expertise</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -skew-x-12 translate-x-1/2 -z-0"></div>
      </section>

      {/* About Section (Contextual Text) */}
      <section className="bg-surface py-section-padding">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-gutter items-start">
            <div className="md:w-1/2">
              <h2 className="font-h2 text-h2 text-on-surface mb-stack-md">Engineering Reliable IT.</h2>
              <div className="w-20 h-1.5 bg-primary mb-stack-lg"></div>
            </div>
            <div className="md:w-1/2 space-y-stack-md">
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                From day-to-day IT support to complex infrastructure migrations, we combine deep technical expertise with practical execution to deliver measurable business outcomes.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our approach is simple: <span className="font-bold text-primary">stabilize, optimize, and transform</span> your IT systems — so you can focus on growth. We act as a technology partner that bridges the gap between complex legacy systems and future-ready digital platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Bento Grid */}
      <section className="bg-surface-container-low py-section-padding">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Vision */}
            <div className="md:col-span-5 bg-on-primary p-10 rounded-xl shadow-sm border-b-4 border-secondary flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-secondary text-5xl mb-4">visibility</span>
                <h3 className="font-h2 text-h2 text-on-surface mb-4">Our Vision</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  To become a leading technology partner in Africa, enabling businesses to thrive through resilient, innovative, and future-ready IT solutions.
                </p>
              </div>
            </div>
            {/* Mission */}
            <div className="md:col-span-7 bg-primary text-on-primary p-10 rounded-xl shadow-lg relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-on-primary text-5xl mb-4">rocket_launch</span>
                <h3 className="font-h2 text-h2 text-on-primary mb-4">Our Mission</h3>
                <p className="font-body-lg text-body-lg text-on-primary/90">
                  To deliver reliable, secure, and scalable technology services that empower organizations to operate efficiently, grow sustainably, and adapt confidently to change.
                </p>
              </div>
              <div className="absolute -right-20 -bottom-20 opacity-10">
                <span className="material-symbols-outlined text-[300px]">hub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values (RETIC) */}
      <section className="bg-surface py-section-padding">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-stack-lg">
            <h2 className="font-h2 text-h2 text-on-surface">Our Core Values</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 italic">Defined by the RETIC acronym</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-stack-md">
            {valueItems.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-surface-variant hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">{value.icon}</span>
                </div>
                <h4 className="font-h3 text-h3 text-on-surface mb-2">{value.title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-container-highest py-section-padding">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <div className="max-w-3xl mx-auto space-y-stack-md">
            <h2 className="font-h1 text-h1 text-on-background">Ready to transform your IT?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Partner with us to build a resilient, secure, and high-performing technology environment. Our experts are ready to assess your current infrastructure and map out your digital future.
            </p>
            <div className="flex flex-wrap justify-center gap-stack-md pt-4">
              <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-md">
                Schedule a Consultation
              </button>
              <button className="border-2 border-on-background text-on-background px-8 py-3 rounded-lg font-bold hover:bg-on-background hover:text-white active:scale-95 transition-all">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
