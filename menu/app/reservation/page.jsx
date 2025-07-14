'use client';

import { useState } from 'react';
import Link from 'next/link';

// This page allows users to make a reservation.
// It includes a form for name, email, date, time, and number of guests, and handles submission.

export default function ReservationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prevent default form submission behavior
    // Collect form data
    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      date: e.target[2].value,
      time: e.target[3].value,
      guests: e.target[4].value,
    };

    try {
      const response = await fetch('http://localhost:5000/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Reservation failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-100 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Reservation</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="time"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="number"
            placeholder="Number of Guests"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Reserve Now
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-green-700 font-semibold text-center">
            Your reservation request has been submitted. We'll contact you to confirm.
          </p>
        )}
        <div className="mt-6 text-center">
          <Link href="/" className="text-green-600 hover:underline">
            ← Back to Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
