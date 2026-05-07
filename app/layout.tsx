import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BSL | Engineering Reliable IT & Business Growth',
  description: 'Enterprise-grade IT Support, Managed Services, Infrastructure Solutions, and Training designed for scalable business growth.',
  openGraph: {
    title: 'BSL | Engineering Reliable IT & Business Growth',
    description: 'Enterprise-grade IT Support, Managed Services, Infrastructure Solutions, and Training designed for scalable business growth.',
    url: 'https://bsl.com',
    siteName: 'BiproSyncLogic',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida/ADBb0uhqmhlOM_5oT8gqroMvW3CBFyY0WJ0cJJMxpngpEUPTu-aRQxxits3dcZBMnn_pba9pEmg9283LLdb8cZWEqaUQqXce_qyDonQV1T2RL6RYAu1L9nfUdLJRrjHPT0n9kzWfR2atW0_K3GSdNBIi3e-kpML1MFDEG0tWfoUWZImuHMDm_FTlNz9zNHLXeUL-otTfkEoKm60qmJHkIFw8GtV4AU5EXUjTv7pkrkkV7hezOQ5yEI_SjzmPn238x-jJqYUW-aRCuXxGGw',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00658d',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
