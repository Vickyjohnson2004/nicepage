"use client";

import Image from "next/image";

export default function SaveTheWorldSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f3] py-24">
      {/* Background Trees */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2000')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-serif text-[56px] leading-none text-black">
            Save The World!
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-24 bg-[#87a93d]" />

          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-gray-700">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero
          </p>
        </div>

        {/* Main Grid */}
        <div className="relative mt-20 h-[760px]">
          {/* Quote */}
          <div className="absolute left-20 top-8 w-[380px]">
            <h3 className="font-serif text-[34px] leading-[1.15] text-black">
              "Though We Travel The World Over To Find The Beautiful, We Must
              Carry It With Us, Or We Find It Not."
            </h3>

            <p className="mt-10 text-[18px] text-black">
              – Ralph Waldo Emerson
            </p>
          </div>

          {/* Large Image */}
          <div className="absolute right-12 top-0 h-[520px] w-[575px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80"
              alt="Nature"
              fill
              className="object-cover"
            />
          </div>

          {/* Left Card */}
          <div className="absolute bottom-8 left-0 h-[260px] w-[470px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1000&q=80"
              alt="Forest"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 p-8 text-white">
              <h3 className="font-serif text-5xl leading-tight">
                The air smells sweeter
              </h3>

              <p className="mt-8 text-[17px] leading-8">
                Whether you call it nature travel, sustainable travel or
                responsible ecotourism, there's something incredibly potent,
                powerful, and cleansing about getting away from the hustle and
                bustle of the city.
              </p>

              <button className="mt-8 border-b border-white pb-1 text-lg">
                read more
              </button>
            </div>
          </div>

          {/* Right Floating Card */}
          <div className="absolute bottom-0 right-16 w-[420px] bg-white p-10 shadow-xl">
            <h3 className="font-serif text-5xl leading-tight text-black">
              With Earth Day
            </h3>

            <p className="mt-8 text-[17px] leading-8 text-gray-700">
              With Earth Day coming up April 22, people tend to start thinking
              and talking about nature conservation more and more at this time
              of year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}