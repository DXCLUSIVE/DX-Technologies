'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import { Eye, EyeOff, Check, X } from 'lucide-react'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '', role: 'parent' })
  const [passwordStrength, setPasswordStrength] = useState(0)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    if (name === 'password') {
      let strength = 0
      if (value.length >= 8) strength++
      if (/[A-Z]/.test(value)) strength++
      if (/[0-9]/.test(value)) strength++
      if (/[^A-Za-z0-9]/.test(value)) strength++
      setPasswordStrength(strength)
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Sign Up:', formData)
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 1) return 'bg-red-500'
    if (passwordStrength === 2) return 'bg-yellow-500'
    if (passwordStrength === 3) return 'bg-blue-500'
    return 'bg-green-500'
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-maroon-600 mb-2">Create Account</h1>
            <p className="text-gray-600">Join the VISA community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your Name"
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
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-600"
              >
                <option value="parent">Parent</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-600"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {formData.password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-2">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className={`h-2 flex-1 rounded ${i < passwordStrength ? getPasswordStrengthColor() : 'bg-gray-200'}`} />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">
                    {passwordStrength === 0 && 'Weak password'}
                    {passwordStrength === 1 && 'Fair password'}
                    {passwordStrength === 2 && 'Good password'}
                    {passwordStrength === 3 && 'Strong password'}
                    {passwordStrength === 4 && 'Very strong password'}
                  </p>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-maroon text-white py-2 rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
              disabled={passwordStrength < 2}
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">Already have an account? <Link href="/auth/signin" className="text-maroon-600 font-bold hover:underline">Sign In</Link></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}