import Image from "next/image";

export default function EnvironmentSection() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-4 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="max-w-md">
            <h2 className="font-serif text-[40px] leading-[1.08] text-black">
              9 Things You Can Do
              <br />
              to Save the
              <br />
              Environment
            </h2>

            <div className="mt-4 h-[2px] w-14 bg-lime-500" />

            <p className="mt-8 text-[16px] leading-8 text-gray-700">
              By no means am I suggesting that I am the next superhero of the
              environment (although that would make for an excellent Halloween
              costume). However, I like to believe that many of us, when
              equipped with information, will do the right thing. Here are the
              top 9 things you can do to save the planet, with or without a
              green cape:
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative mx-auto h-[720px] w-full max-w-[700px]">
            {/* Decorative Background Box */}
            <div className="absolute right-20 top-40 h-[350px] w-[380px] bg-gray-100" />

            {/* Large Image */}
            <div className="absolute right-0 top-0 h-[500px] w-[330px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200"
                alt="Mountain"
                fill
                className="object-cover"
              />
            </div>

            {/* Small Image */}
            <div className="absolute bottom-0 left-0 h-[260px] w-[380px] overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200"
                alt="Forest"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}