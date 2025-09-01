'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, FileText, Calendar, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPage = () => {
  const lastUpdated = 'January 15, 2024';

  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, phone number, shipping address)',
        'Payment information (credit card details, billing address)',
        'Order history and preferences',
        'Device information and IP address',
        'Cookies and usage data',
        'Communication preferences'
      ]
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: [
        'Process and fulfill your orders',
        'Communicate about orders and services',
        'Send marketing communications (with consent)',
        'Improve our website and services',
        'Prevent fraud and ensure security',
        'Comply with legal obligations'
      ]
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: [
        'We do not sell your personal information',
        'Share with trusted service providers',
        'Comply with legal requirements',
        'Protect our rights and safety',
        'Business transfers (with notice)',
        'With your explicit consent'
      ]
    },
    {
      icon: Shield,
      title: 'Data Security',
      content: [
        'Encryption of sensitive data',
        'Secure payment processing',
        'Regular security audits',
        'Access controls and monitoring',
        'Employee training on privacy',
        'Incident response procedures'
      ]
    }
  ];

  const rights = [
    'Access your personal information',
    'Correct inaccurate data',
    'Request deletion of your data',
    'Object to processing',
    'Data portability',
    'Withdraw consent',
    'Lodge a complaint'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Shield className="w-20 h-20 mx-auto text-blue-200" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </motion.p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-sm">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">
                Last Updated: {lastUpdated}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Introduction
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                At ShopHub ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              <p>
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
              <p>
                This policy applies to information we collect on our website, through our mobile applications, in email, text, and other electronic messages between you and us, and through any other means.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Sections */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Your Privacy Rights
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {rights.map((right, index) => (
                  <motion.div
                    key={right}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{right}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  To exercise any of these rights, please contact us using the information provided below.
                </p>
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Contact Us
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookies Policy */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cookies and Tracking Technologies
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from.
              </p>
              <p>
                <strong>Types of cookies we use:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
                <li><strong>Performance cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
              <p>
                You can control and manage cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our website.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Data Retention and Security
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Children's Privacy
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.
              </p>
              <p>
                If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information from our records.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* International Transfers */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              International Data Transfers
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place to protect your information.
              </p>
              <p>
                When we transfer your information internationally, we rely on adequacy decisions, standard contractual clauses, or other appropriate safeguards as required by applicable law.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Changes to This Privacy Policy
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our services after any changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">privacy@shophub.com</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">123 Shopping Street, E-Commerce City, EC 12345</p>
              </div>
            </div>

            <a
              href="/contact"
              className="btn-primary text-lg px-8 py-3 inline-flex items-center gap-2"
            >
              Get in Touch
              <FileText className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
