import Image from "next/image";
import Button from "../Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-10 text-center bg-gradient-to-b from-background to-primary">
      <h2 className="text-4xl md:text-6xl max-w-2xl font-title px-5">
        The Three who rule:{" "}
        <span className="font-hightlight text-accent">
          Strength, Authority, Knowledge
        </span>
      </h2>
      <h3 className="max-w-lg text-lg mt-3 px-5">
        Forged in battle, crowned in command, enlightened by wisdom.
      </h3>
      <div className="relative w-full max-w-[450px] h-auto aspect-[3/2] mx-auto">
        <Image
          src="/images/cover.png"
          alt="Illustration of Strength, Authority, and Knowledge in a heroic theme"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
          priority
          className="object-contain"
        />
      </div>
    </section>
  );
}
