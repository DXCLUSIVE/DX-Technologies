'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-maroon-600 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-visa-gold">About VISA</h3>
            <p className="text-sm text-gray-100">Viceroys Islamic Academy - Honing the Intellect, Moulding the Future and VISA to global success.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-visa-gold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-visa-gold transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-visa-gold transition">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-visa-gold transition">Programs</Link></li>
              <li><Link href="/announcements" className="hover:text-visa-gold transition">Announcements</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-visa-gold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/results" className="hover:text-visa-gold transition">Check Results</Link></li>
              <li><Link href="/fees" className="hover:text-visa-gold transition">Pay Fees Online</Link></li>
              <li><Link href="/gallery" className="hover:text-visa-gold transition">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-visa-gold transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-visa-gold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p>+234 805 357 2474</p>
                  <p>+234 813 624 8892</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p>visaacademy01@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <p>BOSCO Building, Alangua Close, Ilorin, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-maroon-500 pt-8">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
            <div className="flex gap-4">
              <a href="https://www.facebook.com/viceroysacademy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-visa-gold transition">
                <Facebook size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-200">© 2024 Viceroys Islamic Academy. All rights reserved.</p>
          </div>
          <p className="text-center text-xs text-gray-300 mt-4">
            "And say, 'My Lord, increase me in knowledge.'" (Qur'an 20:114)
          </p>
        </div>
      </div>
    </footer>
  )
}