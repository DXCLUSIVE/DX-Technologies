'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BookOpen, Users, Trophy, Sparkles } from 'lucide-react'

export default function Programs() {
  const programs = [
    {
      id: 1,
      name: 'Daycare',
      icon: '🏠',
      color: 'bg-green-500',
      description: 'Nurturing care for a safe and happy start',
      ageGroup: '0-3 years',
      features: ['Safe environment', 'Play-based learning', 'Qualified caregivers', 'Nutritious meals']
    },
    {
      id: 2,
      name: 'Kindergarten',
      icon: '👧',
      color: 'bg-pink-500',
      description: 'Building strong foundations through play and learning',
      ageGroup: '3-5 years',
      features: ['Social skills', 'Early literacy', 'Creative play', 'Islamic values']
    },
    {
      id: 3,
      name: 'Pre-Basic',
      icon: '📚',
      color: 'bg-yellow-500',
      description: 'Preparing young minds for a bright future',
      ageGroup: '5-6 years',
      features: ['Academic foundation', 'Life skills', 'Character building', 'Interactive learning']
    },
    {
      id: 4,
      name: 'Basic (Primary)',
      icon: '📖',
      color: 'bg-blue-500',
      description: 'Quality education for academic excellence',
      ageGroup: '6-12 years',
      features: ['Core subjects', 'STEM education', 'Sports & culture', 'Moral development']
    },
    {
      id: 5,
      name: 'Madrasah Section',
      icon: '🕌',
      color: 'bg-indigo-600',
      description: 'Sound Islamic & moral training for lifelong success',
      ageGroup: 'All ages',
      features: ['Quranic studies', 'Islamic jurisprudence', 'Arabic language', 'Prophetic teachings']
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-maroon text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
            <p className="text-xl">Quality education from Daycare to Secondary</p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className={`${program.color} text-white p-8 text-center`}>
                    <div className="text-5xl mb-2">{program.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                    <p className="text-sm opacity-90">{program.ageGroup}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    <div className="space-y-2">
                      {program.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-2 h-2 bg-maroon-600 rounded-full"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Programs */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-maroon-600">Why Choose Our Programs?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: 'Qualified Teachers', desc: 'Expert educators with proven track records' },
                { icon: Trophy, title: 'Excellence', desc: 'High academic achievement rates' },
                { icon: BookOpen, title: 'Holistic Education', desc: 'Academic & moral development' },
                { icon: Sparkles, title: 'Modern Facilities', desc: 'State-of-the-art learning environment' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <item.icon className="w-12 h-12 text-maroon-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
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