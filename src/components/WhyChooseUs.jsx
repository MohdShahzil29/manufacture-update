import React from "react";

const points = [
  {
    number: "1",
    title: "CONSISTENT QUALITY AT ANY SCALE",
    description:
      "Every box—whether it's 500 or 500,000—meets our exacting standards.",
  },
  {
    number: "2",
    title: "CUSTOM PACKAGING, MADE EASY",
    description:
      "Your vision, realized. Our in-house team transforms ideas into standout packaging.",
  },
  {
    number: "3",
    title: "MORE THAN JUST A MANUFACTURER",
    description:
      "We solve packaging challenges—from transit protection to unboxing experiences.",
  },
  {
    number: "4",
    title: "FAST, DEPENDABLE TURNAROUNDS",
    description: "Swift delivery without compromising quality or finish.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-indigo-900 mb-4">
            WHY SkillWise?
          </h2>

          <div className="space-y-4">
            {points.map((point) => (
              <div key={point.number} className="flex items-start gap-2">
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-indigo-900 text-white flex items-center justify-center font-semibold text-xs md:text-sm">
                  {point.number}
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 underline">
                    {point.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 mt-1">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Packaging Process"
            className="rounded-md shadow-md object-cover w-full max-h-[180px] md:max-h-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
