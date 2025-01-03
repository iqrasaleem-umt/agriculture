import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-8 bg-blue-900 text-white px-6 md:px-12 py-4 md:py-0">
        {/* Left Logo Section */}
        <div className="flex items-center space-x-1">
          <h3 className="text-lg md:text-xl">IQRASALEEMMADE</h3>
          <h3 className="text-lg md:text-xl text-sky-400">Made</h3>
        </div>

        {/* Center Title Section */}
        <div className="flex items-center space-x-1 mt-2 md:mt-0">
          <h1 className="font-bold text-lg md:text-xl">Agriculture</h1>
          <h1 className="font-bold text-lg md:text-xl text-sky-400">Website</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full h-auto md:h-20 border-b px-6 md:px-12 flex flex-col md:flex-row items-center mt-6 md:mt-9 space-y-4 md:space-y-0">
        {/* Image */}
        <div className="text-green-700 flex-shrink-0">
          <Image src="/tractorimage.jpg" width={60} height={60} alt="image" />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center md:items-start md:ml-4">
          <p className="text-green-700 font-bold text-center md:text-left">AGRI</p>
          <p className="font-bold text-green-700 text-center md:text-left">CULTURE</p>
        </div>

        {/* Title */}
        <div className="flex-grow mt-4 md:mt-0 text-center md:text-left">
          <h1 className="font-bold text-xl md:text-2xl text-gray-600 px-2 mt2">
            Let’s check out our agriculture services
          </h1>
        </div>
      </div>
    </div>
  );
}
