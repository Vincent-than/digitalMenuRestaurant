'use client';
// use params to access the dynamic route parameter
import { useParams } from 'next/navigation';
import Link from 'next/link';
import menuData from '../menuData';


// This page displays the details of a specific menu item based on its ID.
export default function MenuItemPage() {
  const params = useParams();
  const item = menuData.find(i => i.id === parseInt(params.id));

  if (!item) {
    return <p className="text-center mt-10 text-red-600">Menu item not found.</p>;
  }

  const descriptions = [item.description1, item.description2, item.description3].filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-100 to-pink-100 text-gray-900 px-4 py-8 sm:px-6 sm:py-12">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full max-h-[400px] object-cover rounded-xl shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4 uppercase tracking-wide">{item.name}</h1>

        <div className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto space-y-2">
          {descriptions.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <p className="text-2xl font-bold text-green-600 mb-6">${item.price}</p>

        <div className="flex justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 shadow-md transition duration-300 text-center"
          >
            ← Back to Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
