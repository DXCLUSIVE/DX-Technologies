'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { BookOpen, Users, Shield, Award, ChevronRight, Bell, FileText, CreditCard } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="gradient-maroon text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Viceroys Islamic Academy</h1>
            <p className="text-xl mb-2">"Honing the Intellect, Moulding the Future"</p>
            <p className="text-visa-pink font-semibold mb-8">Your Secure Gateway to Academic Excellence</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/auth/signin" className="px-8 py-3 bg-white text-maroon-600 font-bold rounded-lg hover:bg-visa-pink">
                Sign In
              </Link>
              <Link href="/programs" className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10">
                Explore Programs
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-maroon-600">Portal Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FileText, title: 'Online Results', desc: 'Check exam results instantly' },
                { icon: CreditCard, title: 'Fee Payment', desc: 'Secure online payment system' },
                { icon: Bell, title: 'Announcements', desc: 'Stay updated with school news' },
                { icon: Users, title: 'Profiles', desc: 'Student & teacher directories' },
              ].map((feature, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-maroon-600">
                  <feature.icon className="w-12 h-12 text-maroon-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-maroon-600">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { name: 'Daycare', color: 'bg-green-500', icon: '🏠' },
                { name: 'Kindergarten', color: 'bg-pink-500', icon: '👶' },
                { name: 'Pre-Basic', color: 'bg-yellow-500', icon: '📚' },
                { name: 'Basic (Primary)', color: 'bg-blue-500', icon: '📖' },
                { name: 'Madrasah', color: 'bg-indigo-600', icon: '🕌' },
              ].map((program, i) => (
                <Link key={i} href="/programs">
                  <div className={`${program.color} text-white p-6 rounded-lg text-center font-bold hover:scale-105 transition cursor-pointer shadow-lg`}>
                    <div className="text-3xl mb-2">{program.icon}</div>
                    {program.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-visa-pink/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-maroon-600">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: '✅ Qualified & Caring Teachers', desc: 'Expert educators dedicated to student success' },
                { title: '✅ Sound Islamic Training', desc: 'Quality Islamic & secular education' },
                { title: '✅ Safe Environment', desc: 'Secure & conducive learning spaces' },
                { title: '✅ Affordable Fees', desc: 'Flexible payment options' },
                { title: '✅ Quality Education', desc: 'Academic excellence & moral development' },
                { title: '✅ Transparent System', desc: 'Secure online portal for all services' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-maroon-600">
                  <h3 className="font-bold text-lg mb-2 text-maroon-600">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 bg-maroon-600 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Announcements', href: '/announcements' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Teachers', href: '/teachers' },
                { label: 'Contact', href: '/contact' },
              ].map((link, i) => (
                <Link key={i} href={link.href}>
                  <div className="bg-white/20 hover:bg-white/30 p-4 rounded-lg text-center font-semibold transition">
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}