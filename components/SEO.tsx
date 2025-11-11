import type { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonical?: string
}

export function generateMetadata({
  title = 'Argo Automation',
  description = 'Empowering Industries with Smart Automation. Leading provider of industrial automation, IoT integration, and embedded systems solutions.',
  keywords = 'automation, industrial automation, IoT, embedded systems, smart solutions, robotics, process automation',
  ogImage = '/og-image.jpg',
  canonical = 'https://argo-automation.vercel.app',
}: SEOProps): Metadata {
  const fullTitle = title === 'Argo Automation' ? title : `${title} | Argo Automation`

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: 'Argo Automation' }],
    creator: 'Argo Automation',
    publisher: 'Argo Automation',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(canonical),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: 'Argo Automation',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Argo Automation',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
  }
}
