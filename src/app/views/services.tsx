import Image from "next/image";
import React from "react";

const services = [
  { id: 1, title: "Planting", description: "Gravida sodales condimentum pellentesque accumsan orci quam sagittis sapien." },
  { id: 2, title: "Mulching", description: "Gravida sodales condimentum pellentesque accumsan orci quam sagittis sapien." },
  { id: 3, title: "Plowing", description: "Gravida sodales condimentum pellentesque accumsan orci quam sagittis sapien." },
  { id: 4, title: "Mowing", description: "Gravida sodales condimentum pellentesque accumsan orci quam sagittis sapien." },
  { id: 5, title: "Seeding", description: "Gravida sodales condimentum pellentesque accumsan orci quam sagittis sapien." },
  { id: 6, title: "Fresh Vegetable", description: "Gravida sodales condimentum pellentesque accumsan orci quam sagittis sapien." },
  { id: 7, title: "Watering", description: "Gravida sodales condimentum pellentesque accumsan orci quam sagittis sapien." },
  { id: 8, title: "Vegetable Selling", description: "Gravida sodales condimentum pellentesque accumsan orci quam sagittis sapien." },
];

export default function Services() {
  return (
    <>
      {/* Main Heading */}
      <div className="mt-12 text-center">
        <p className="font-semibold text-xl text-green-700">Services</p>
        <h1 className="font-bold text-2xl md:text-4xl text-gray-600 mt-6">
          Provide Fresh Food Every Single Day
        </h1>
      </div>

      {/* Services Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 border shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex justify-end text-gray-600">
              <p>{service.id.toString().padStart(2, "0")}</p>
            </div>
            <Image
              src="/plantimage.png"
              alt={service.title}
              width={80}
              height={80}
            />
            <h1 className="text-green-700 mt-4 font-semibold text-lg">
              {service.title}
            </h1>
            <p className="text-green-700 mt-2 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
