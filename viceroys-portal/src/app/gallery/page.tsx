'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Grid2x2, Play } from 'lucide-react'
import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    { id: 1, title: 'Classroom Activity', type: 'image', category: 'Learning' },
    { id: 2, title: 'Sports Day 2026', type: 'image', category: 'Events' },
    { id: 3, title: 'Religious Activity', type: 'image', category: 'Islamic' },
    { id: 4, title: 'Students Group Photo', type: 'image', category: 'Group' },
    { id: 5, title: 'School Ceremony', type: 'video', category: 'Events' },
    { id: 6, title: 'Graduation 2025', type: 'image', category: 'Milestone' },
    { id: 7, title: 'Science Experiment', type: 'image', category: 'Learning' },
    { id: 8, title: 'Annual Concert', type: 'video', category: 'Events' },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-maroon text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">School Gallery</h1>
            <p className="text-xl">Moments from our school community</p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-maroon-400 to-visa-pink flex items-center justify-center">
                    <div className="text-center">
                      {item.type === 'video' ? (
                        <Play className="w-12 h-12 text-white mx-auto mb-2" />
                      ) : (
                        <Grid2x2 className="w-12 h-12 text-white mx-auto mb-2" />
                      )}
                      <p className="text-white font-medium text-sm">{item.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{item.category}</span>
                  </div>
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