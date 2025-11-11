export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Argo Automation',
    description: 'Leading provider of industrial automation, IoT integration, and embedded systems solutions.',
    url: 'https://argo-automation.vercel.app',
    logo: 'https://argo-automation.vercel.app/og-image.jpg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-890',
      contactType: 'Customer Service',
      email: 'info@argoautomation.com',
      areaServed: 'Worldwide',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'Innovation City',
      addressRegion: 'IC',
      postalCode: '12345',
      addressCountry: 'US',
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
