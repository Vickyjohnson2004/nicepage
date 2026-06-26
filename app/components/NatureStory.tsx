import Image from "next/image";

export default function NatureStory() {
  return (
    <section className="bg-white py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top Content */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-[520px] w-[480px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200"
                alt="Nature"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="max-w-lg pt-10">
            <h2 className="font-serif text-[30px] leading-tight text-black">
              the sky, the mountain,
              <br />
              the tree...
            </h2>

            <div className="mt-6 h-[2px] w-16 bg-lime-500" />

            <p className="mt-8 text-[16px] leading-8 text-gray-700">
              “I declare this world is so beautiful that I can hardly believe
              it exists.” The beauty of nature can have a profound effect upon
              our senses, those gateways from the outer world to the inner,
              whether it results in disbelief in its very existence as Emerson
              notes, or feelings such as awe, wonder, or amazement.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-[-60px]">
          {/* Quote */}
          <div className="absolute left-10 top-32 max-w-sm">
            <div className="text-[120px] font-serif leading-none text-gray-300">
              “
            </div>

            <p className="-mt-14 ml-6 font-serif text-[16px] leading-snug text-black">
              I declare this world is so beautiful that I can hardly believe it
              exists
            </p>
          </div>

          {/* Bottom Image */}
          <div className="ml-auto mr-52 mt-20 h-[430px] w-[560px] overflow-hidden shadow-2xl">
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200"
                alt="Forest"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-14 right-0 w-[360px] bg-[#f7f7f7] p-10 shadow-lg">
            <h3 className="font-serif text-[42px] text-black">
              Unseen beauty
            </h3>

            <div className="mt-4 h-[2px] w-14 bg-lime-500" />

            <p className="mt-8 text-lg italic leading-9 text-gray-700">
              My work explores and reveals the invisible, inviting the viewer
              to look beyond the seen to appreciate the beauty and mystery of
              the unseen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}