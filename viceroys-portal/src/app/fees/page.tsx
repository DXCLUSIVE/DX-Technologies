'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CreditCard, Lock, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function FeePayment() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'School Fees (JSS1)', amount: 150000, quantity: 1 },
    { id: 2, name: 'Uniform & Books', amount: 25000, quantity: 1 },
  ])

  const [paymentMethod, setPaymentMethod] = useState('card')

  const total = cartItems.reduce((sum, item) => sum + (item.amount * item.quantity), 0)

  const handlePayment = () => {
    alert(`Processing payment of ₦${total.toLocaleString()} via ${paymentMethod}`)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-maroon text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">School Fee Payment</h1>
            <p className="text-xl">Secure Online Payment System</p>
          </div>
        </section>

        {/* Payment Page */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Cart */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-maroon-600 mb-4">Order Summary</h2>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center pb-4 border-b">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold text-maroon-600">₦{(item.amount * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-maroon-600 mb-4">Payment Method</h2>
                <div className="space-y-3">
                  {[
                    { value: 'card', label: '💳 Credit/Debit Card', desc: 'Visa, Mastercard, etc.' },
                    { value: 'bank', label: '🏦 Bank Transfer', desc: 'Direct bank deposit' },
                    { value: 'mobile', label: '📱 Mobile Money', desc: 'MTN Mobile Money, Airtel' },
                  ].map((method) => (
                    <label key={method.value} className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition hover:bg-maroon-50" style={{ borderColor: paymentMethod === method.value ? '#8B1538' : '#ddd' }}>
                      <input
                        type="radio"
                        name="payment"
                        value={method.value}
                        checked={paymentMethod === method.value}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-maroon-600"
                      />
                      <div className="ml-4">
                        <p className="font-medium">{method.label}</p>
                        <p className="text-sm text-gray-600">{method.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-maroon-600">
                  <CreditCard className="text-maroon-600" size={24} />
                  <h3 className="text-lg font-bold text-maroon-600">Payment Summary</h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium">₦{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Fee</span>
                    <span className="font-medium">₦500</span>
                  </div>
                  <div className="flex justify-between border-t-2 pt-3 font-bold text-lg">
                    <span>Total</span>
                    <span className="text-maroon-600">₦{(total + 500).toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  className="w-full bg-gradient-maroon text-white py-3 rounded-lg font-bold hover:opacity-90 transition flex items-center justify-center gap-2 mb-4"
                >
                  <Lock size={18} />
                  Pay Now
                </button>

                <div className="flex items-start gap-2 text-xs text-gray-600 p-3 bg-gray-50 rounded">
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-green-500" />
                  <span>Your payment is secured with 256-bit SSL encryption</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}