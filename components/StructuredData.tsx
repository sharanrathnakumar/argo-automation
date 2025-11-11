export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Argo Automation',
    description: 'Leading provider of electrical panel design, PLC/HMI/SCADA software support, automation products supply, and vision systems.',
    url: 'https://argo-automation.vercel.app',
    logo: 'https://argo-automation.vercel.app/og-image.jpg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9652461664',
      contactType: 'Customer Service',
      email: 'argoautomation2025@outlook.com',
      areaServed: 'IN',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'India',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://linkedin.com/company/argoautomation',
      'https://twitter.com/argoautomation',
      'https://github.com/argoautomation',
    ],
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Argo Automation',
    description: 'Empowering Industries with Smart Automation',
    url: 'https://argo-automation.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://argo-automation.vercel.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateServiceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'Organization',
      name: 'Argo Automation',
    },
    description,
    areaServed: 'Worldwide',
  }
}
