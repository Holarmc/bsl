import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | BiproSyncLogic - Managed IT & Cloud Migration',
  description: 'Enterprise-grade IT Managed Services, Cloud Migration, Infrastructure Solutions, and 24/7 Support.',
}

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-section-padding border-b border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
          <div>
            <span className="text-primary font-bold tracking-widest text-label-sm uppercase mb-4 block">Enterprise Solutions</span>
            <h1 className="font-h1 text-h1 text-on-background mb-6">Seamless Migration &amp; Managed Excellence</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
              Transition critical applications and infrastructure with zero data loss. We provide 24/7 proactive monitoring designed for enterprise-grade reliability and mission-critical uptime.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold shadow-lg hover:translate-y-[-2px] transition-transform">
                Free Readiness Assessment
              </button>
              <button className="border-2 border-on-background text-on-background px-8 py-4 rounded-lg font-bold hover:bg-surface-container transition-colors">
                Service Catalog
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              alt="Modern server room"
              src="https://lh3.googleusercontent.com/aida/ADBb0ugPUOZYfGlfAKz9JbiCntCQgRPCZH1sBkIddbVZFob-Yh-SJ3Nhma5XyPHov1HqPQ1yhPUdnA46DFhH0sorPLS65OR2QLzx4KqU8C4YWqm-hU2qVLx7GtMHDUoKprMdQdI__-YjtNdYCY9x06aCjDEC2AUki2IeQ1ANR9elDtfihRFdw6DwurnXYu9nVDZMZvYoiyQjINFjWQ1MuoSA0y-Yord-c5RoicSBSoalyKqOttrAiTm0S5J-LMfGUkzJmLrBLghg3oqp"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-xl border border-outline-variant/30 hidden lg:block">
              <div className="flex items-center gap-4 mb-2">
                <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <div>
                  <p className="font-h3 text-h3 text-on-background">99.5%</p>
                  <p className="text-label-sm text-on-surface-variant uppercase">Uptime Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Services Bento Section */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-h2 text-on-background mb-4">IT Managed Services</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
              Proactive, end-to-end management of your IT infrastructure. We act as your outsourced IT department, freeing you to focus on business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-surface-container-lowest p-stack-lg rounded-xl shadow-sm border-b-4 border-primary hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">monitoring</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-background mb-4">24/7 NOC Monitoring</h3>
              <p className="text-on-surface-variant mb-6">Proactive monitoring of networks, servers, and endpoints to detect and resolve issues before they impact operations.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-on-surface text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                  Real-time alerting
                </li>
                <li className="flex items-center gap-2 text-on-surface text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                  Performance tracking
                </li>
              </ul>
            </div>
            {/* Feature 2 */}
            <div className="bg-surface-container-lowest p-stack-lg rounded-xl shadow-sm border-b-4 border-secondary hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">cloud_sync</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-background mb-4">Server &amp; Virtualization</h3>
              <p className="text-on-surface-variant mb-6">Expert management of VMware, Hyper-V, and Linux environments to ensure peak efficiency and stability.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-on-surface text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                  Resource optimization
                </li>
                <li className="flex items-center gap-2 text-on-surface text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                  Hypervisor hardening
                </li>
              </ul>
            </div>
            {/* Feature 3 */}
            <div className="bg-surface-container-lowest p-stack-lg rounded-xl shadow-sm border-b-4 border-primary-container hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary-container">security</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-background mb-4">Backup &amp; Disaster Recovery</h3>
              <p className="text-on-surface-variant mb-6">Robust off-site, cloud, and hybrid replication strategies to protect your mission-critical data assets.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-on-surface text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                  RPO/RTO optimization
                </li>
                <li className="flex items-center gap-2 text-on-surface text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                  Regular recovery testing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Services Detail */}
      <section className="py-section-padding bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm space-y-4">
                  <div className="bg-surface-container p-2 rounded-lg w-fit">
                    <Image
                      alt="Migration logo 1"
                      src="https://lh3.googleusercontent.com/aida/ADBb0uhqmhlOM_5oT8gqroMvW3CBFyY0WJ0cJJMxpngpEUPTu-aRQxxits3dcZBMnn_pba9pEmg9283LLdb8cZWEqaUQqXce_qyDonQV1T2RL6RYAu1L9nfUdLJRrjHPT0n9kzWfR2atW0_K3GSdNBIi3e-kpML1MFDEG0tWfoUWZImuHMDm_FTlNz9zNHLXeUL-otTfkEoKm60qmJHkIFw8GtV4AU5EXUjTv7pkrkkV7hezOQ5yEI_SjzmPn238x-jJqYUW-aRCuXxGGw"
                      width={40}
                      height={40}
                      className="h-10 object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-primary">Cloud Hybrid</h4>
                  <p className="text-label-sm text-on-surface-variant">Seamless cross-cloud transitions between AWS, Azure, and Google Cloud.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm space-y-4 mt-8">
                  <div className="bg-surface-container p-2 rounded-lg w-fit">
                    <Image
                      alt="Migration logo 2"
                      src="https://lh3.googleusercontent.com/aida/ADBb0uhSbeVZ4O50NS6K8j7eO1WDNv9eJRwOBRRdTo47aRurxb0jYZpsklysLIFy6IEINVTzon0STCKsD4nu-WM0TbpLYCmHJdQ8iHXjEefK8Er4G9JjlfDNOY6-LRbQjs3POUySfUGJTVPgUku4y-Nuxgo9kxYJhEKYOYHYHHHXgv4Qm43e-5_MnYOB0On9AM_sZTJq9FAcB3qSopqL5yCE7LDQmltyy5fZnTbCmKmpee55U_AuOMpcnBM_W0k5cga0WYL4Dy6Nm-MC"
                      width={40}
                      height={40}
                      className="h-10 object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-secondary">Virtualization</h4>
                  <p className="text-label-sm text-on-surface-variant">Zero-disruption migration from legacy IBM and Oracle infrastructure.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="bg-secondary/10 text-secondary px-4 py-1 rounded-full text-label-sm font-bold mb-4 inline-block">Migration Services</span>
              <h2 className="font-h2 text-h2 text-on-background mb-6">Enterprise Infrastructure Transition</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                We help enterprise organizations seamlessly migrate critical applications and infrastructure with minimal downtime and zero data loss. Our engineers leverage specialized domain expertise across complex environments.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-label-sm">1</div>
                  <div>
                    <h4 className="font-bold text-on-background">Discovery &amp; Assessment</h4>
                    <p className="text-on-surface-variant">Mapping dependencies and performance baselines to mitigate operational risk.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-label-sm">2</div>
                  <div>
                    <h4 className="font-bold text-on-background">Execution Discipline</h4>
                    <p className="text-on-surface-variant">Controlled migration using automated tools across IBM, Oracle, and VMware.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-label-sm">3</div>
                  <div>
                    <h4 className="font-bold text-on-background">Validation &amp; Optimization</h4>
                    <p className="text-on-surface-variant">Post-migration tuning to ensure faster time-to-value for new infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact / Delivery Stats */}
      <section className="py-section-padding bg-on-background text-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-md">
              <h2 className="font-h2 text-h2 mb-4">The BSL Business Impact</h2>
              <p className="text-outline-variant font-body-lg">Measurable outcomes that drive corporate efficiency and long-term cost reduction.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <p className="text-primary-container text-h1 font-h1">Zero</p>
                <p className="text-label-sm uppercase tracking-widest text-outline-variant">Data Loss Recorded</p>
              </div>
              <div>
                <p className="text-secondary-fixed text-h1 font-h1">&lt;30m</p>
                <p className="text-label-sm uppercase tracking-widest text-outline-variant">Critical Response Time</p>
              </div>
              <div>
                <p className="text-primary-container text-h1 font-h1">24/7</p>
                <p className="text-label-sm uppercase tracking-widest text-outline-variant">Global Monitoring</p>
              </div>
              <div>
                <p className="text-secondary-fixed text-h1 font-h1">100%</p>
                <p className="text-label-sm uppercase tracking-widest text-outline-variant">SLA Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver (Detailed List) */}
      <section className="py-section-padding">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="bg-surface-container-low p-stack-lg md:p-12 rounded-3xl border border-outline-variant/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-h2 text-h2 text-on-background mb-8">What we deliver</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-primary">
                    <span className="material-symbols-outlined text-primary mt-1">task_alt</span>
                    <div>
                      <p className="font-bold text-on-background">End-to-end migration management</p>
                      <p className="text-label-sm text-on-surface-variant">Planning, execution, and 24/7 post-migration support.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-primary">
                    <span className="material-symbols-outlined text-primary mt-1">task_alt</span>
                    <div>
                      <p className="font-bold text-on-background">Application Modernization</p>
                      <p className="text-label-sm text-on-surface-variant">Rehosting, replatforming, or refactoring monoliths to microservices.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-primary">
                    <span className="material-symbols-outlined text-primary mt-1">task_alt</span>
                    <div>
                      <p className="font-bold text-on-background">Data Integrity Validation</p>
                      <p className="text-label-sm text-on-surface-variant">Ensuring consistency and accuracy through replication tools.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary text-white p-10 rounded-2xl flex flex-col justify-center">
                <h3 className="font-h3 text-h3 mb-6">Why BSL?</h3>
                <p className="mb-8 text-on-primary/80">Our local delivery model combined with international best practices ensures your IT operations remain resilient while controlling costs.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed">verified</span>
                    Expertise across IBM, Oracle &amp; VMware
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed">verified</span>
                    Proven Enterprise-grade Track Record
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed">verified</span>
                    Focus on Uptime &amp; Predictable ROI
                  </li>
                </ul>
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold w-full md:w-fit hover:bg-opacity-90 transition-all">
                  Request Discovery Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Teaser */}
      <section className="pb-section-padding">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-secondary-container p-stack-lg rounded-3xl">
            <div className="md:w-1/3">
              <Image
                alt="Training session"
                src="https://lh3.googleusercontent.com/aida/ADBb0uhSbeVZ4O50NS6K8j7eO1WDNv9eJRwOBRRdTo47aRurxb0jYZpsklysLIFy6IEINVTzon0STCKsD4nu-WM0TbpLYCmHJdQ8iHXjEefK8Er4G9JjlfDNOY6-LRbQjs3POUySfUGJTVPgUku4y-Nuxgo9kxYJhEKYOYHYHHHXgv4Qm43e-5_MnYOB0On9AM_sZTJq9FAcB3qSopqL5yCE7LDQmltyy5fZnTbCmKmpee55U_AuOMpcnBM_W0k5cga0WYL4Dy6Nm-MC"
                width={400}
                height={300}
                className="rounded-2xl w-full aspect-video md:aspect-square object-cover"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="font-h3 text-h3 text-on-secondary-fixed mb-4">Empower Your Technical Team</h3>
              <p className="text-on-secondary-container mb-6 font-body-md">Build high-performing teams with our practical, hands-on training programs in Cloud, Cybersecurity, and Infrastructure Management. Certifiable courses tailored for C-Suite and technical staff.</p>
              <a className="inline-flex items-center gap-2 text-on-secondary-fixed font-bold border-b-2 border-on-secondary-fixed pb-1 hover:opacity-70 transition-all" href="/training">
                View Course Catalog
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section-padding bg-surface-container-highest">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <h2 className="font-h1 text-h1 mb-6 text-on-background">Ready to transform your IT?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Partner with us to build a resilient, secure, and high-performing technology environment. Let&apos;s start with a free readiness assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
              Schedule Consultation
            </button>
            <button className="bg-white border-2 border-outline text-on-surface px-10 py-5 rounded-xl font-bold text-lg hover:bg-surface-container transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
