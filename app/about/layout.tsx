import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Argo Automation',
  description: 'Learn about Argo Automation - our mission, vision, and the expert team driving innovation in industrial automation.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
