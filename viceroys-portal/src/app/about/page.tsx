'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Heart, BookOpen, Shield, Globe } from 'lucide-react'

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-maroon text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">About VISA</h1>
            <p className="text-xl">Viceroys Islamic Academy</p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-maroon-50 p-8 rounded-lg border-l-4 border-maroon-600">
              <h2 className="text-2xl font-bold text-maroon-600 mb-4">Our Mission</h2>
              <p className="text-gray-700">To provide quality Islamic and secular education in a safe, conducive environment where students learn, grow, and succeed with sound Islamic values and innovative teaching methods.</p>
            </div>
            <div className="bg-visa-pink/20 p-8 rounded-lg border-l-4 border-visa-darkpink">
              <h2 className="text-2xl font-bold text-maroon-600 mb-4">Our Vision</h2>
              <p className="text-gray-700">Honing the Intellect, Moulding the Future, and providing VISA to Global Success through academic excellence, moral development, and Islamic values.</p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-maroon-600">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: 'Character Building', desc: 'Nurturing honest and responsible citizens' },
                { icon: BookOpen, title: 'Islamic Education', desc: 'Sound Islamic & moral training' },
                { icon: Shield, title: 'Safety & Care', desc: 'Safe & conducive learning environment' },
                { icon: Globe, title: 'Global Excellence', desc: 'Academic & moral excellence' },
              ].map((value, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <value.icon className="w-12 h-12 text-maroon-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}