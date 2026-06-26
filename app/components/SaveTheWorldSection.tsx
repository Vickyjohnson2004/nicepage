"use client";

import {
  FaBullhorn,
  FaClipboardList,
  FaHeadset,
  FaMountain,
} from "react-icons/fa";

const features = [
  {
    title: "DISCOVER",
    icon: FaMountain,
  },
  {
    title: "PROMOTE",
    icon: FaBullhorn,
  },
  {
    title: "INVESTIGATE",
    icon: FaClipboardList,
  },
  {
    title: "SUPPORT",
    icon: FaHeadset,
  },
];

export default function SaveTheWorld() {
  return (
    <section className="bg-white py-10 sm:py-13">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[40px] font-normal text-black">
            Save The World!
          </h2>

          <div className="mx-auto mt-2 h-[2px] w-16 bg-lime-500" />

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-7 sm:leading-8 text-gray-700">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit
            esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero
          </p>
        </div>

        {/* Icons */}
        <div className="mt-10 grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4 md:gap-y-16">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center text-center"
              >
                <Icon
                  size={38}
                  className="text-lime-500 transition duration-300 hover:scale-110"
                />

                <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl md:text-[30px] font-light tracking-wide text-black">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}