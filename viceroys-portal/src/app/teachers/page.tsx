'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Phone } from 'lucide-react'

export default function Teachers() {
  const teachers = [
    { id: 1, name: 'Mrs. Aisha Mohammed', subject: 'Islamic Studies', class: 'JSS1-3', email: 'aisha@visa.edu' },
    { id: 2, name: 'Mr. Emeka Okafor', subject: 'Mathematics', class: 'JSS1-3', email: 'emeka@visa.edu' },
    { id: 3, name: 'Ms. Zainab Hassan', subject: 'English Language', class: 'JSS1-3', email: 'zainab@visa.edu' },
    { id: 4, name: 'Dr. Abayomi Adeleye', subject: 'Science', class: 'JSS1-3', email: 'abayomi@visa.edu' },
    { id: 5, name: 'Mrs. Fatima Ibrahim', subject: 'Social Studies', class: 'JSS1-2', email: 'fatima@visa.edu' },
    { id: 6, name: 'Mr. David Ogbonna', subject: 'Physical Education', class: 'All Classes', email: 'david@visa.edu' },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-maroon text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Teachers</h1>
            <p className="text-xl">Qualified & Dedicated Educators</p>
          </div>
        </section>

        {/* Teachers Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((teacher) => (
                <div key={teacher.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden border-t-4 border-maroon-600">
                  <div className="w-full h-40 bg-gradient-maroon"></div>
                  <div className="p-6 -mt-12 relative">
                    <div className="w-20 h-20 bg-maroon-100 rounded-full border-4 border-white mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl">👨‍🏫</span>
                    </div>
                    <h3 className="text-lg font-bold text-center text-maroon-600 mb-2">{teacher.name}</h3>
                    <p className="text-sm text-gray-600 text-center mb-1">{teacher.subject}</p>
                    <p className="text-xs text-gray-500 text-center mb-4">Classes: {teacher.class}</p>
                    <div className="space-y-2 text-sm">
                      <a href={`mailto:${teacher.email}`} className="flex items-center gap-2 text-maroon-600 hover:underline">
                        <Mail size={16} />
                        {teacher.email}
                      </a>
                    </div>
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