import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export default function AboutAuthor() {
  return (
    <section className="py-16 px-6 text-text">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-accent group">
          <Image
            src="/images/siluet.webp"
            alt="Author Avatar"
            layout="fill"
            objectFit="cover"
            className="group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Text & Social Media */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-accent">About the Author</h2>
          <p className="mt-4 text-lg font-body">
            Writing this novel is a journey of bringing imagination to life,
            blending deep narratives, and sharing untold stories of a unique
            world.
          </p>

          <div className="flex justify-center md:justify-start mt-6 gap-4">
            <a
              href="#"
              className="text-2xl text-accent hover:text-text transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-2xl text-accent hover:text-text transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-2xl text-accent hover:text-text transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
