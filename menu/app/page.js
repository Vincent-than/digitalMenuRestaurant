'use client'

import { useState } from 'react';
import Link from 'next/link';
import menuData from './menu/menuData';

// File: app/page.js
// This is the main page of the digital menu restaurant application.
export default function HomePage() {
  const [menuItems] = useState(menuData);
  
  const mainItems = menuItems.filter(item => item.category === 'main');
  const dessertItems = menuItems.filter(item => item.category === 'dessert');
  const drinkItems = menuItems.filter(item => item.category === 'drink');

  // Function to render each section of the menu
  const renderSection = (title, items) => (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-center mb-6 uppercase">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {items.map(item => (
          <Link
            key={item.id} // key for React list rendering
            href={`/menu/${item.id}`} // Link to the individual menu item page
            className="w-full py-6 px-4 border rounded shadow-sm hover:shadow-md transition bg-white"
          >
            
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-60 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold mb-1">{item.name}</h2>  
            <p className="text-sm text-gray-600 mb-1">{item.description}</p>
            <p className="text-base font-semibold text-green-700">${item.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );

  // This includes the header, navigation, and sections for main courses, desserts, and drinks.
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 text-black px-4 py-8 sm:px-6 sm:py-12 font-sans">
      <header className="relative mb-10">
        <nav className="absolute top-4 right-4 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm uppercase">
          <a href="/files/Menu.pdf" className="text-blue-900 font-semibold hover:underline">Menu </a>
          <Link href="/reservation" className="text-red-800 font-semibold hover:underline">Reservations</Link>
          <Link href="/contact" className="text-red-800 font-semibold hover:underline">Contact</Link>
        </nav>
        <div className="flex flex-col justify-center items-center min-h-[30vh] text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wider uppercase">Vincent Cafe</h1>
          <p className="mt-4 text-sm sm:text-base">Please click link below for our sample menu</p>
        </div>
      </header>


      {renderSection('Main', mainItems)}
      {renderSection('Dessert', dessertItems)}
      {renderSection('Drink', drinkItems)}
    </div>
  );
}
