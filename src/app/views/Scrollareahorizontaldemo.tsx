import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Artwork {
  artist: string;
  art: string;
}

const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "/image1.jpg", // Image from the public/images folder
  },
  {
    artist: "Tom Byrom",
    art: "/image2.jpg",
  },
  {
    artist: "Vladimir Malyavko",
    art: "/image3.jpg",
  },
  {
    artist: "Alex Johnson",
    art: "/image4.jpg",
  },
  {
    artist: "Sophia Adams",
    art: "/image5.jpg",
  },
];

export default function ScrollAreaHorizontalDemo() {
  return (
    <div className="px-4 mt-2">
      <h1 className="text-gray-600 font-bold text-2xl text-center">Our Services</h1>
      <ScrollArea className="w-full whitespace-nowrap rounded-md bg-black">
        <div className="flex w-max space-x-4 p-8">
          {works.map((artwork) => (
            <figure key={artwork.artist} className="shrink-0">
              <div className="overflow-hidden rounded-md group">
                <Image
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="aspect-[3/4] h-[300px] md:h-[400px] lg:h-[500px] w-[250px] md:w-[300px] lg:w-[375px] object-cover transition-transform duration-300 group-hover:scale-110"
                  width={375}
                  height={500}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Photo by{" "}
                <span className="font-semibold text-foreground text-white">
                  {artwork.artist}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
