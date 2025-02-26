"use client";
import { useState } from "react";
import Image from "next/image";

export default function ThreePillars() {
  const [expanded, setExpanded] = useState(null);

  const pillars = [
    {
      id: 1,
      title: "Strength",
      image: "/images/strength.webp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed urna eu elit commodo.",
    },
    {
      id: 2,
      title: "Authority",
      image: "/images/authority.webp",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 3,
      title: "Knowledge",
      image: "/images/knowledge.webp",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <section className="py-10 px-5 flex flex-col justify-center text-center">
      <h2 className=" text-3xl w-1/4 mx-auto text-title text-accent font-bold">
        The Three Pillars: Strength, Authority, Knowledge
      </h2>
      <div className="flex gap-x-5 mt-10 justify-center">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="relative w-[250px] h-[200px] group cursor-pointer"
            onClick={() =>
              setExpanded(expanded === pillar.id ? null : pillar.id)
            }
          >
            <Image
              src={pillar.image}
              width={500}
              height={300}
              alt={`Three of pillars - ${pillar.title}`}
              className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out 
                        group-hover:brightness-125 group-hover:scale-105"
            />

            <div
              className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center text-lg 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            >
              {pillar.title}
            </div>

            {expanded === pillar.id && (
              <div className="mt-3 p-3 bg-primary text-text text-sm rounded-lg shadow-lg transition-all duration-300">
                {pillar.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
