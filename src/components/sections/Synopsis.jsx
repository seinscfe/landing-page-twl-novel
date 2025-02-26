import Image from "next/image";
import Button from "../Button";

export default function Synopsis() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-6 py-8 px-6">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/images/bg-section.webp"
          alt="background"
          fill
          className="object-cover"
          quality={80}
          priority
        />
      </div>

      <div className="absolute inset-0 -z-[5] bg-gradient-to-t from-blue-900/30 to-black w-full h-full"></div>

      <div className="w-full md:w-1/2 max-w-3xl bg-primary/30 backdrop-blur-md rounded-lg border border-secondary/20 shadow-lg p-6">
        <h2 className="font-title text-3xl font-bold text-accent text-center md:text-left">
          Synopsis
        </h2>
        <p className="mt-5 text-center md:text-left leading-relaxed">
          In a world ruled by three incarnated symbols—{" "}
          <span className="font-bold text-accent">Strength</span>,{" "}
          <span className="font-bold text-accent">Authority</span>, and{" "}
          <span className="font-bold text-accent">Knowledge</span>—a boy who was
          born under <span className="font-bold text-accent">Authority</span>{" "}
          dares to challenge its leader,{" "}
          <span className="underline">losing countless times</span>, until one
          day, he begins his journey to hunt him down and win!
        </p>
        <div className="mt-5 flex justify-center md:justify-start">
          <Button className="relative px-6 py-3 rounded-lg bg-red-500 text-white shadow-lg shadow-red-500/50 transition duration-300 hover:shadow-red-600 hover:scale-105">
            Read First Chapter
          </Button>
        </div>
      </div>

      <div className="flex justify-center w-full md:w-1/2">
        <Image
          src="/images/siluet.webp"
          width={300}
          height={500}
          alt="the true hero"
          className="w-auto max-h-[80vh] object-cover"
        />
      </div>
    </section>
  );
}
