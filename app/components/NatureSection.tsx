"use client";

import { FaQuoteLeft } from "react-icons/fa";

export default function NatureSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Images */}
          <div className="lg:col-span-7 space-y-6">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200"
              alt="Mountain Lake"
              className="h-[350px] w-full rounded-lg object-cover shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
              alt="Forest"
              className="ml-auto h-[260px] w-[75%] rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
              the sky, the mountain, the tree...
            </h2>

            <div className="mb-6 h-1 w-24 bg-lime-500"></div>

            <p className="text-lg leading-8 text-gray-600">
              "I declare this world is so beautiful that I can hardly believe it
              exists." The beauty of nature can have a profound effect upon our
              senses, those gateways from the outer world to the inner, whether
              it results in disbelief in its very existence as Emerson notes, or
              feelings such as awe, wonder, or amazement.
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Quote Card */}
          <div className="rounded-xl bg-gray-900 p-10 text-white shadow-xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-gray-900">
              <FaQuoteLeft />
            </div>

            <h3 className="text-2xl font-semibold leading-relaxed">
              I declare this world is so beautiful that I can hardly believe it
              exists.
            </h3>
          </div>

          {/* Info Card */}
          <div className="rounded-xl bg-gray-100 p-10 shadow-xl">
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900">
              Unseen beauty
            </h2>

            <div className="mb-6 h-1 w-20 bg-lime-500"></div>

            <p className="text-lg leading-8 text-gray-600">
              My work explores and reveals the invisible, inviting the viewer to
              look beyond the seen to appreciate the beauty and mystery of the
              unseen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}