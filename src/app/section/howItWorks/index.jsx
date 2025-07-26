import React from "react";
import Badge from "@/app/component/Badge";
import { steps } from "@/app/component/data";

export default function HowItWorks() {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-12 px-4 py-16">
      {/* Left side */}
      <div className="">
        <Badge text="How it Works" />
        <h1 className="text-[#F9F9F9] text-[36px] md:text-[48px] font-semibold leading-snug mt-4 ">
          Get started in just 3 Easy Steps
        </h1>
      </div>

      {/* Right side (Steps) */}
      <div className="flex gap-8 flex-wrap ">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center lg:items-start gap-4 space-y-2">
            {/* Step Number Circle */}
            <div className="w-[32px] h-[32px] min-w-[32px] bg-[#282828] text-[#F9F9F9] rounded-full flex items-center justify-center font-semibold">
              {step.number}
            </div>

            {/* Step Content */}
            <div className="space-y-3">
              <h2 className="text-[18px] font-bold text-white">{step.title}</h2>
              <p className="text-base text-[#BBBBBB] mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
