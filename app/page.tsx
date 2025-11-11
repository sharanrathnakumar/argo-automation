'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { generateOrganizationSchema, generateWebsiteSchema } from '@/components/StructuredData'

const services = [
  {
    title: 'Electrical Panel Design',
    description: 'Custom control panels designed and manufactured to meet your specific automation needs',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Software Support - PLC, HMI, SCADA',
    description: 'Expert programming and support for all major industrial automation platforms',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Automation Products Supply',
    description: 'Comprehensive supply of quality automation components from trusted manufacturers',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Vision System',
    description: 'Advanced machine vision solutions for quality inspection and process control',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteSchema()),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
        {/* Hero Background Image */}
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/automation-hero.svg" 
            alt="Industrial Automation Control System" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-white mb-2">Argo Automation</span>
              <span className="block text-gradient">
                Empowering Industries with Smart Automation
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your operations with cutting-edge automation solutions.
            We deliver intelligent systems that drive efficiency and innovation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-glow hover:shadow-glow-lg transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-dark-800 text-white rounded-lg font-semibold hover:bg-dark-700 transition-all duration-200 border border-dark-700 hover:border-primary-500"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive automation solutions tailored to your industry needs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500 transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center mb-4 text-white group-hover:shadow-glow transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 text-primary-500 hover:text-primary-400 font-medium transition-colors"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Innovation Meets Excellence
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At Argo Automation, we're pioneering the future of industrial automation.
                Our team of experts combines decades of experience with cutting-edge technology
                to deliver solutions that transform businesses.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From small-scale operations to enterprise-level systems, we provide
                scalable automation solutions that drive efficiency, reduce costs,
                and unlock new possibilities for growth.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Image Showcase */}
              <div className="col-span-2 bg-dark-800 rounded-xl overflow-hidden border border-dark-700 mb-4">
                <img 
                  src="/vision-system.svg" 
                  alt="Vision System Quality Inspection" 
                  className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
                <div className="text-4xl font-bold text-gradient mb-2">15+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
                <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
                <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Technology Showcase */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-48 bg-dark-900 rounded-xl overflow-hidden border border-dark-700 group">
              <img 
                src="/electrical-panel.svg" 
                alt="Electrical Panel Design" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent flex items-end p-4">
                <h3 className="text-white font-semibold">Electrical Panel Design</h3>
              </div>
            </div>
            <div className="relative h-48 bg-dark-900 rounded-xl overflow-hidden border border-dark-700 group">
              <img 
                src="/plc-programming.svg" 
                alt="PLC Programming" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent flex items-end p-4">
                <h3 className="text-white font-semibold">PLC/HMI/SCADA Solutions</h3>
              </div>
            </div>
            <div className="relative h-48 bg-dark-900 rounded-xl overflow-hidden border border-dark-700 group">
              <img 
                src="/vision-system.svg" 
                alt="Vision System" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent flex items-end p-4">
                <h3 className="text-white font-semibold">Machine Vision Systems</h3>
              </div>
            </div>
          </motion.div>
          
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
                Let's Automate Your Future
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Ready to transform your operations? Get in touch with our team
                for a free consultation and discover how we can help you achieve your goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Start Your Journey
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
