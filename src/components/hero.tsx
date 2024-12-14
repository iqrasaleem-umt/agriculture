import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      <div className="relative w-full h-[450px]">
        {/* Background Image */}
        <Image
          className="object-cover"
          src="/p1.jpg"
          alt="Farming Background"
          layout="fill"
          objectFit="cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center transform transition-transform duration-500 hover:scale-105">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Farming is the Best Solution to World Starvation
          </h1>
          <p className="text-white text-lg md:text-xl mt-4">
            Sow the seeds with care, and nature will do the rest.
          </p>
        </div>
      </div>
    </div>
  );
}
