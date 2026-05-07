'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { href: '/about-us', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/training', label: 'Training' },
    { href: '/contacts', label: 'Contact' },
  ]

  const logoSrc = 'https://lh3.googleusercontent.com/aida/ADBb0uhqmhlOM_5oT8gqroMvW3CBFyY0WJ0cJJMxpngpEUPTu-aRQxxits3dcZBMnn_pba9pEmg9283LLdb8cZWEqaUQqXce_qyDonQV1T2RL6RYAu1L9nfUdLJRrjHPT0n9kzWfR2atW0_K3GSdNBIi3e-kpML1MFDEG0tWfoUWZImuHMDm_FTlNz9zNHLXeUL-otTfkEoKm60qmJHkIFw8GtV4AU5EXUjTv7pkrkkV7hezOQ5yEI_SjzmPn238x-jJqYUW-aRCuXxGGw'

  return (
    <header className="w-full top-0 sticky z-50 bg-surface shadow-sm">
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop py-4">
        {/* Logo */}
        <div className="flex items-center gap-md">
          <Link href="/">
            <Image
              alt="BiproSyncLogic Logo"
              src={logoSrc}
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-stack-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-lg font-bold hover:opacity-80 transition-all shadow-sm">
            Get Started
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-on-surface"
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-[32px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-[340px] bg-surface shadow-2xl transition-transform duration-300 z-50 flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-outline-variant">
          <Image
            alt="BSL Logo"
            src={logoSrc}
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface"
            aria-label="Close mobile menu"
          >
            <span className="material-symbols-outlined text-[30px]">close</span>
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-4 rounded-xl hover:bg-primary/10 transition-colors text-on-surface"
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </aside>
    </header>
  )
}

export default Header
