'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Plus, Trash2, Edit2 } from 'lucide-react'
import { useState } from 'react'

export default function Dashboard() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aminat Adeyemi', class: 'JSS1', email: 'aminat@visa.edu' },
    { id: 2, name: 'Mohammed Hassan', class: 'JSS1', email: 'hassan@visa.edu' },
    { id: 3, name: 'Zainab Okafor', class: 'JSS2', email: 'zainab@visa.edu' },
  ])

  const [stats] = useState({
    totalStudents: 450,
    totalTeachers: 35,
    totalClasses: 18,
    totalFees: '₦15,230,000'
  })

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        {/* Header */}
        <section className="bg-gradient-maroon text-white py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-visa-pink">School Management System</p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Total Students', value: stats.totalStudents, color: 'bg-blue-500' },
              { label: 'Total Teachers', value: stats.totalTeachers, color: 'bg-green-500' },
              { label: 'Total Classes', value: stats.totalClasses, color: 'bg-yellow-500' },
              { label: 'Total Fees Collected', value: stats.totalFees, color: 'bg-maroon-600' },
            ].map((stat, i) => (
              <div key={i} className={`${stat.color} text-white p-6 rounded-lg shadow-lg`}>
                <p className="text-sm opacity-90 mb-2">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Student Management */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-maroon-600">Students Management</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-maroon-600 text-white rounded-lg hover:bg-maroon-700 transition">
                <Plus size={20} />
                Add Student
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b-2 border-maroon-600">
                  <tr>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Class</th>
                    <th className="px-6 py-3 text-left">Email</th>
                    <th className="px-6 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-3 font-medium">{student.name}</td>
                      <td className="px-6 py-3">{student.class}</td>
                      <td className="px-6 py-3">{student.email}</td>
                      <td className="px-6 py-3 text-center space-x-2">
                        <button className="p-1 text-blue-500 hover:bg-blue-100 rounded transition">
                          <Edit2 size={18} />
                        </button>
                        <button className="p-1 text-red-500 hover:bg-red-100 rounded transition">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}