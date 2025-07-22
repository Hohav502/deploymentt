'use client'

import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { incrementQty, decrementQty, removeItem } from '@/features/cart/cartSlice'
import Image from 'next/image'
import { Trash } from 'lucide-react'
import React from 'react'
import Button from '@/components/buttons/Button'

export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.items)
  const dispatch = useAppDispatch()

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = +(subtotal * 0.08).toFixed(2)
  const total = +(subtotal + tax).toFixed(2)

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border p-4 rounded-xl">
              <div className="flex items-center gap-4">
                <Image src={item.image} alt={item.title} width={80} height={80} className="rounded" />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={() => dispatch(decrementQty(item.id))} className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementQty(item.id))} className="px-2 py-1 bg-gray-200 rounded">+</button>
                <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                <Button onClick={() => dispatch(removeItem(item.id))} className="text-red-500 hover:text-red-700">
                  <Trash size={20} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal ({cartItems.length} items)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax}</span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>
          <ul className="text-xs text-gray-500 mt-4 space-y-1">
            <li>✓ Secure checkout</li>
            <li>✓ 30-day return policy</li>
            <li>✓ Customer support</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
