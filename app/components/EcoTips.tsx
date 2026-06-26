const tips = [
  {
    id: "1",
    title: "Change your driving habits",
    description:
      "We don’t all have the luxury of walking everywhere, but vehicles are the biggest compromise to our air. Those tailpipes are at street level",
  },
  {
    id: "2",
    title: "Notice how you use water",
    description:
      "We have a lot of water in Canada, but we also use a lot of water, and 65% of what we use is in the bathroom. Have shorter showers.",
  },
  {
    id: "3",
    title: "Reduce paper in your life.",
    description:
      "Do you know that 40% of the world's commercially cut timber is used for paper? This endangers natural habitats and uses a ton of water.",
  },
  {
    id: "4",
    title: "Use a refillable water bottle",
    description:
      "Bottled water and throw away packaging is wasteful. Landfills are overfilling with water bottles alone. It is also estimated that 3 litres",
  },
  {
    id: "5",
    title: "Borrow or fix rather than buy",
    description:
      "Buying throwaway fashion is detrimental for the environment - 1 kg of fabric generates 23 kg of greenhouse gases! Start thinking about",
  },
  {
    id: "6",
    title: "Stop eating So Many meat",
    description:
      "The Environmental Working Group found that red meat is responsible for 10 to 40 times as many greenhouse emissions as common vegetables",
  },
];

export default function EcoTips() {
  return (
    <section
      className="relative py-20 px-5"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* White faded overlay */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white/80 backdrop-blur-sm p-8 min-h-[380px] transition-all duration-300 hover:bg-white hover:-translate-y-2"
            >
              {/* Header */}
              <div className="flex items-start gap-5 mb-10">
                <span className="text-[92px] leading-none font-light text-[#3d6f83]">
                  {tip.id}
                </span>

                <h3 className="font-serif text-[26px] leading-[1.05] font-normal text-black mt-4">
                  {tip.title}
                </h3>
              </div>

              {/* Body */}
              <p className="text-[18px] leading-10 text-gray-800 mb-10">
                {tip.description}
              </p>

              {/* Link */}
              <button className="uppercase tracking-wide text-lg font-bold border-b border-black hover:text-[#3d6f83] hover:border-[#3d6f83] transition">
                More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}