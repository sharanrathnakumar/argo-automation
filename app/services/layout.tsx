import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Argo Automation',
  description: 'Comprehensive automation services including Industrial Automation, IoT Integration, Embedded Systems, and Smart Solutions.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
