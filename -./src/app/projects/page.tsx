"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Vortex } from "@/components/ui/vortex";


export default function TracingBeamDemo() {
  return (

    

      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>



              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>



  );
}

const dummyContent = [
  {


    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          An avid runner, they find joy in the great outdoors, relishing the thrill of hitting the trails and exploring new landscapes. Each run is an adventure, a chance to connect with nature while pushing personal limits. Whether navigating serene forest paths or challenging mountain terrains, the experience invigorates both body and spirit.
        </p>
      </>
    ),
    badge: "About Me",
    image:
      "/Mountain.jpeg",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Beyond running, their passion for adventure extends to coding and computing. They love tackling new projects that challenge their creativity and problem-solving skills. For them, programming is an exploration in its own right, where every line of code opens up new possibilities and learning opportunities.
        </p>
      </>
    ),
    badge: "Outdoor",
    image:
      "/Sunset.jpeg",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          When it’s time to unwind, they know how to relax and recharge. Whether lounging with a good book, enjoying a quiet day at home, or taking in the beauty of nature, they find balance in both activity and tranquility. This blend of adventure and relaxation fuels their drive to embrace life fully, ready for whatever comes next.
        </p>
      </>
    ),
    badge: "Adventure",
    image:
      "/beach1.jpeg",
  },

  

];
