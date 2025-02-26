"use client";
import { FaDragon, FaShieldAlt, FaGlobe } from "react-icons/fa";

export default function WhyRead() {
  const features = [
    {
      id: 1,
      title: "Dark Fantasy & Political",
      icon: (
        <FaDragon className="text-5xl text-accent group-hover:brightness-150" />
      ),
      description:
        "A world of deep political intrigue and dark fantasy mysteries.",
    },
    {
      id: 2,
      title: "Epic Battles & Personal Growth",
      icon: (
        <FaShieldAlt className="text-5xl text-accent group-hover:brightness-150" />
      ),
      description:
        "Experience grand battles and compelling character development.",
    },
    {
      id: 3,
      title: "A Unique World-Building Experience",
      icon: (
        <FaGlobe className="text-5xl text-accent group-hover:brightness-150" />
      ),
      description:
        "Dive into a richly crafted world filled with intricate details.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-primary via-secondary to-background text-text text-center">
      <h2 className="text-4xl font-bold text-accent text-title mb-10">
        Why Read This Story?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="group flex flex-col items-center p-6 rounded-lg bg-primary shadow-lg 
                      transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-4 rounded-full bg-secondary bg-opacity-20 transition duration-300 group-hover:shadow-lg group-hover:shadow-accent">
              {feature.icon}
            </div>

            <h3 className="mt-4 text-xl font-bold text-accent">
              {feature.title}
            </h3>

            <p className="mt-2 text-sm text-text">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
