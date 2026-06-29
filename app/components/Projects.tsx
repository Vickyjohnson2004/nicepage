"use client";

import Image from "next/image";

const projects = [
  {
    title: "ECO-LANDSCAPING",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
  },
  {
    title: "FOREST CLEANUP",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
  },
  {
    title: "NATIONAL PARKS",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
  },
  {
    title: "CLEAN WATERS",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900">
            Current projects
          </h2>

          <div className="mx-auto mt-4 sm:mt-6 h-[2px] w-24 bg-green-500" />

          <p className="mx-auto mt-6 sm:mt-8 max-w-3xl text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-gray-700">
            Implementing phosphorus management best practices (such as
            replacing chemical fertilizers with compost, properly disposing of
            pet waste)
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden shadow-md"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

              <div className="absolute left-1/2 top-1/2 w-[180px] sm:w-[200px] lg:w-[220px] -translate-x-1/2 -translate-y-1/2 bg-white py-4 sm:py-5 text-center shadow-lg">
                <h3 className="text-sm sm:text-base lg:text-lg tracking-[2px] sm:tracking-[3px] text-gray-900">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <button className="border border-gray-700 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-xs sm:text-sm tracking-[2px] sm:tracking-[4px] uppercase text-gray-800 transition hover:bg-gray-900 hover:text-white">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
}