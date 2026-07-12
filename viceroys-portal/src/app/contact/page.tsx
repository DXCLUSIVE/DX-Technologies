'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert('Message sent! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-maroon text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">We'd love to hear from you</p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-maroon-600 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '+234 805 357 2474 / +234 813 624 8892',
                    subtext: 'Call us during office hours'
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'visaacademy01@gmail.com',
                    subtext: 'We respond within 24 hours'
                  },
                  {
                    icon: MapPin,
                    title: 'Location',
                    content: 'BOSCO Building, Alangua Close',
                    subtext: 'Off Oko-Erin Okada, Ilorin, Kwara State, Nigeria'
                  },
                  {
                    icon: Clock,
                    title: 'Working Hours',
                    content: 'Monday - Friday: 7:30 AM - 4:00 PM',
                    subtext: 'Saturday: 8:00 AM - 1:00 PM'
                  },
                ].map((contact, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-maroon-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-maroon-600">{contact.title}</h3>
                      <p className="font-medium text-gray-800">{contact.content}</p>
                      <p className="text-sm text-gray-600">{contact.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-maroon-600 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-600 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-maroon text-white py-2 rounded-lg font-bold hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}