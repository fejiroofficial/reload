"use client";

import Badge from "@/app/component/Badge";
import TestimonialCard from "@/app/component/testimonial";
import React from "react";

// Main Component
const Testimonials = ({ testimonials }) => {
  return (
    <section className="text-white w-full pt-20 pb-12 px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-40 3xl:px-60">
      <div className="flex items-center justify-center flex-col ">
        <Badge text=' Testimonials'/>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-10">
          What Others Are Saying <br /> About Us
        </h2>
      </div>

      <div
        className="min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-6 w-full overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #000000 0%, rgba(17, 17, 17, 0.68) 52.84%, rgba(17, 17, 17, 0.92) 87.48%, #111111 100%)",
        }}
      >
        {/* Left Column - Bottom to Top */}
        <div className="overflow-hidden">
          <div className="flex flex-col gap-6">
            {testimonials?.slice(0, 5).map((t, i) => (
              <TestimonialCard
                key={`left-${i}`}
                testimonial={t}
                animationClass="animate-ladder-up"
                delay={i * 0.8}
              />
            ))}
          </div>
        </div>

        {/* Middle Column - Top to Bottom */}
        <div className="overflow-hidden">
          <div className="flex flex-col gap-6">
            {testimonials?.slice(2, 7).map((t, i) => (
              <TestimonialCard
                key={`middle-${i}`}
                testimonial={t}
                animationClass="animate-ladder-down"
                delay={i * 0.8}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Bottom to Top */}
        <div className="overflow-hidden">
          <div className="flex flex-col gap-6">
            {testimonials?.slice(4, 9).map((t, i) => (
              <TestimonialCard
                key={`right-${i}`}
                testimonial={t}
                animationClass="animate-ladder-up"
                delay={i * 0.8}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
