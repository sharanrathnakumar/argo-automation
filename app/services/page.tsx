'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    id: 'industrial',
    title: 'Industrial Automation',
    description: 'Transform your manufacturing processes with state-of-the-art automation solutions designed for efficiency and scalability.',
    features: [
      'PLC Programming & Integration',
      'SCADA Systems',
      'Robotic Process Automation',
      'Production Line Optimization',
      'Quality Control Systems',
      'Predictive Maintenance',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    id: 'iot',
    title: 'IoT Integration',
    description: 'Connect, monitor, and control your devices from anywhere with our comprehensive IoT solutions.',
    features: [
      'Sensor Networks',
      'Real-time Monitoring',
      'Cloud Integration',
      'Data Analytics',
      'Remote Device Management',
      'Edge Computing Solutions',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: 'embedded',
    title: 'Embedded Systems',
    description: 'Custom embedded solutions tailored to your specific hardware and software requirements.',
    features: [
      'Microcontroller Programming',
      'FPGA Development',
      'Real-Time Operating Systems',
      'Hardware-Software Co-design',
      'Custom Board Design',
      'Firmware Development',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    id: 'smart',
    title: 'Smart Solutions',
    description: 'AI-powered intelligent systems that learn, adapt, and optimize performance over time.',
    features: [
      'Machine Learning Integration',
      'Computer Vision Systems',
      'Natural Language Processing',
      'Intelligent Decision Making',
      'Automated Optimization',
      'Pattern Recognition',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

const additionalServices = [
  'System Integration & Migration',
  'Consulting & Strategy',
  'Training & Documentation',
  'Maintenance & Support',
  'Performance Optimization',
  'Security & Compliance',
]

export default function Services() {
  return (
    <div className="bg-dark-950">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive automation solutions designed to transform your business
              and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center text-white mb-6 shadow-glow">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-300 mb-6">{service.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    Get Started
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-dark-900 rounded-2xl p-8 border border-dark-700">
                    <h3 className="text-2xl font-semibold text-white mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                          <svg
                            className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive support throughout your automation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-dark-950 rounded-xl p-6 border border-dark-700 hover:border-primary-500 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-primary-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                    {service}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our automation solutions can transform your business.
                Contact us today for a free consultation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Contact Us Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
