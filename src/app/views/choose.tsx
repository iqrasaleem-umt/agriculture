import React from "react";
import Image from "next/image";

export default function Choose() {
  return (
    <div>
      {/* First Section */}
      <section className="bg-green-800 w-full min-h-[600px] mt-32 relative py-12">
        <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-16 items-center">
          {/* Image Positioned Above Background */}
          <div className="relative -top-20 lg:static lg:mt-12 lg:ml-0 lg:mr-8">
            <Image
              src="/agriculturegirl.jpg"
              alt="Woman working in agriculture"
              height={400}
              width={400}
              className="object-cover rounded-md shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="text-white max-w-lg mt-12 lg:mt-16">
            <h1 className="text-3xl font-bold mb-4">Why Choose Us</h1>
            <h2 className="font-semibold text-xl mb-4">
              Over 50 Years of Experience in Agriculture
            </h2>
            <p className="leading-relaxed text-gray-200">
              With decades of experience, we bring innovation and tradition
              together to ensure sustainable and efficient agriculture solutions
              for a better tomorrow.
            </p>
            <ul className="mt-6 space-y-6">
              <li>
                <p className="font-medium">🌱 Plants need rain</p>
                <p className="text-gray-300">Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <p className="font-medium">🥗 Love organic foods</p>
                <p className="text-gray-300">Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <p className="font-medium">🥕 Sell fresh veggies</p>
                <p className="text-gray-300">Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-white w-full min-h-[600px] relative py-12 px-[6]">
        <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-16 items-center">
          {/* Text Content on Left */}
          <div className="text-black max-w-lg lg:mr-8 px">
            <h2 className="font-semibold text-xl mb-4 text-green-700">
              Plants Make Life Better
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Plants purify the air, reduce stress, and enhance well-being. They
              beautify spaces, create a calming environment, and promote a
              sustainable way of living. From mental health to ecosystem
              support, plants are vital for a thriving world.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-2">
                
                <Image
                  src="/tick.png"
                  alt="Tick"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <p className="text-gray-600">Plants need rain</p>
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/tick.png"
                  alt="Tick"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <p className="text-gray-600">Love organic foods</p>
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/tick.png"
                  alt="Tick"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <p className="text-gray-600">Sell fresh veggies</p>
              </li>
            </ul>
            <button className="px-6 py-3 rounded-sm text-white bg-green-700 mt-6 hover:bg-green-600 transition-all">
              Get In Touch
            </button>
          </div>

          {/* Image on Right */}
          <div className="mt-12 lg:mt-0">
            <Image
              src="/agriculturegirl2.jpg"
              alt="Woman working in agriculture field"
              height={400}
              width={400}
              className="object-cover rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

