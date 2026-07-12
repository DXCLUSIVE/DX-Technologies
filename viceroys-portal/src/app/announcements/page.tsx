'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Bell, Calendar, Award } from 'lucide-react'

export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: 'Admission 2026-2027 Now Open!',
      date: '2026-07-12',
      category: 'Admission',
      content: 'Enroll your ward in a Nurturing & Islamic Environment where they Learn, Grow and Succeed.',
      icon: Award
    },
    {
      id: 2,
      title: 'Entrance Assessment - 1st August 2026',
      date: '2026-07-10',
      category: 'Examination',
      content: 'All Pre-Basic and Basic classes entrance assessment will hold on 1st August 2026. Registration forms now available.',
      icon: Calendar
    },
    {
      id: 3,
      title: 'Mid-Term Break Announcement',
      date: '2026-07-08',
      category: 'Holiday',
      content: 'Mid-term break for all pupils starts from July 20th and resumes August 5th, 2026.',
      icon: Bell
    },
    {
      id: 4,
      title: 'Second Term Results Released',
      date: '2026-07-05',
      category: 'Results',
      content: 'Second term examination results are now available on the portal. Parents can access via the Results section.',
      icon: Award
    },
    {
      id: 5,
      title: 'Sports Day 2026',
      date: '2026-07-01',
      category: 'Event',
      content: 'Annual sports day will hold on July 28th, 2026. All pupils and parents are invited to participate.',
      icon: Bell
    },
    {
      id: 6,
      title: 'School Fee Payment Reminder',
      date: '2026-06-28',
      category: 'Finance',
      content: 'Dear Parents, kindly settle outstanding school fees before July 15th to avoid service disruption.',
      icon: Calendar
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-maroon text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">School Announcements</h1>
            <p className="text-xl">Latest updates and important information</p>
          </div>
        </section>

        {/* Announcements */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {announcements.map((announcement) => {
                const Icon = announcement.icon
                return (
                  <div key={announcement.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-maroon-600 p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-maroon-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-maroon-600">{announcement.title}</h3>
                            <div className="flex gap-4 text-sm text-gray-600 mt-1">
                              <span>{new Date(announcement.date).toLocaleDateString()}</span>
                              <span className="bg-visa-pink/30 px-3 py-1 rounded-full">{announcement.category}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">{announcement.content}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}