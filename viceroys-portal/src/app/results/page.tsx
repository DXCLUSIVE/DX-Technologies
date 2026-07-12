'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Download, Search } from 'lucide-react'
import { useState } from 'react'

export default function Results() {
  const [selectedClass, setSelectedClass] = useState('JSS1')
  const [searchName, setSearchName] = useState('')

  const results = [
    { id: 1, name: 'Aminat Adeyemi', class: 'JSS1', term: 'Second Term', ca: 45, exam: 65, total: 110, grade: 'A', remark: 'Excellent' },
    { id: 2, name: 'Mohammed Hassan', class: 'JSS1', term: 'Second Term', ca: 38, exam: 58, total: 96, grade: 'B', remark: 'Good' },
    { id: 3, name: 'Zainab Okafor', class: 'JSS1', term: 'Second Term', ca: 42, exam: 72, total: 114, grade: 'A', remark: 'Excellent' },
    { id: 4, name: 'Toyin Oluwaseun', class: 'JSS1', term: 'Second Term', ca: 35, exam: 55, total: 90, grade: 'B', remark: 'Good' },
  ]

  const filteredResults = results.filter(r => 
    r.class === selectedClass && 
    r.name.toLowerCase().includes(searchName.toLowerCase())
  )

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-maroon text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Academic Results</h1>
            <p className="text-xl">CA & Termly Report Sheets</p>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search student name..."
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-600"
                />
              </div>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-600"
              >
                <option value="JSS1">JSS 1</option>
                <option value="JSS2">JSS 2</option>
                <option value="JSS3">JSS 3</option>
                <option value="SS1">SS 1</option>
                <option value="SS2">SS 2</option>
              </select>
            </div>
          </div>
        </section>

        {/* Results Table */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {filteredResults.length > 0 ? (
              <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-maroon-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Student Name</th>
                      <th className="px-6 py-4 text-center">C.A</th>
                      <th className="px-6 py-4 text-center">Exam</th>
                      <th className="px-6 py-4 text-center">Total</th>
                      <th className="px-6 py-4 text-center">Grade</th>
                      <th className="px-6 py-4 text-center">Remark</th>
                      <th className="px-6 py-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredResults.map((result, index) => (
                      <tr key={result.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} >
                        <td className="px-6 py-4 font-medium">{result.name}</td>
                        <td className="px-6 py-4 text-center">{result.ca}</td>
                        <td className="px-6 py-4 text-center">{result.exam}</td>
                        <td className="px-6 py-4 text-center font-bold text-maroon-600">{result.total}</td>
                        <td className="px-6 py-4 text-center font-bold text-green-600">{result.grade}</td>
                        <td className="px-6 py-4 text-center">{result.remark}</td>
                        <td className="px-6 py-4 text-center">
                          <button className="flex items-center justify-center gap-2 px-3 py-1 bg-maroon-600 text-white rounded hover:bg-maroon-700 transition">
                            <Download size={16} />
                            <span className="text-sm">PDF</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-600 text-lg">No results found for the selected criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}