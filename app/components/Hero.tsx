import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=2000&q=80"
        alt="Nature Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="relative w-full max-w-5xl bg-green-900/35 px-8 py-20 backdrop-blur-sm md:px-20">
          {/* Top Right Border */}
          <div className="absolute right-4 top-4 h-32 w-32 border-r-4 border-t-4 border-white" />

          {/* Bottom Left Border */}
          <div className="absolute bottom-4 left-4 h-24 w-24 border-b-4 border-l-4 border-white" />

          <div className="flex flex-col items-center text-center">
            <p className="mb-6 text-lg text-white md:text-2xl">
             Crafting the future experience the world needs NEXT
            </p>

            <h1 className="font-serif leading-tight text-white text-2xl md:text-4xl">
             Empowering business towards designing the most advantageous pathway to a sustainable net-zero circular future for all
              
            </h1>

            <button className="mt-12 bg-lime-500 px-10 py-4 text-sm font-semibold uppercase tracking-[4px] text-white transition duration-300 hover:bg-lime-600">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}