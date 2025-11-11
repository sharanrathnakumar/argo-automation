import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Argo Automation',
  description: 'Get in touch with Argo Automation. We\'re here to help transform your business with intelligent automation solutions.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
