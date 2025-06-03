"use client";
import TypewriterEffect from "../UI/TypeEffect";

export default function TypewriterEffectSmooth() {
  const words = [
    { text: "Startup" },
    {
      text: " Valuation",
      className: "text-blue-500 dark:text-blue-400",
    },
    { text: " Made" },
    { text: " Simple" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[36rem] px-6 text-center space-y-8 transition-all duration-500 ease-in-out">

      <div className="text-3xl sm:text-4xl md:text-5xl font-semibold transition-all duration-700 ease-in-out">
        <TypewriterEffect words={words} />
      </div>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl">
        Understand, explore, and calculate startup valuations with our comprehensive suite of tools. 
        From seed to Series C, we help founders and investors make sense of the numbers.
      </p>

      <div className="flex flex-col md:flex-row gap-4 pt-4">
        <button className="w-48 h-12 rounded-2xl bg-black text-white border border-transparent hover:scale-105 transition-transform duration-300 text-sm md:text-base">
          Calculate Your Valuation
        </button>
        <button className="w-48 h-12 rounded-2xl bg-white text-black border border-black hover:scale-105 transition-transform duration-300 text-sm md:text-base">
          Explore Valuation Concepts
        </button>
      </div>
    </div>
  );
}
