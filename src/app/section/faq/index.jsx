"use client";

import React, { useState, useRef, useEffect } from "react";
import arrow from "../../assets/svg/chevron-down.svg";
import Image from "next/image";
import Badge from "@/app/component/Badge";

const FAQs = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (!contentRefs.current) return;
    contentRefs.current = contentRefs.current.slice(0, faqs.length);
  }, [faqs]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 mx-auto px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-40 3xl:px-60 pt-16 md:pb-4 w-full mt-10 bg-[#0F0F0F] text-[#f3f3f3]">
    <Badge text="FAQs"/>
      <h2 className="text-[32px] md:text-[40px] lg:text-[56px] font-semibold text-center mb-6 leading-tight">
      Quick Answers Before You <br/> Get Started
      </h2>

      <div className="max-w-4xl mx-auto space-y-4 w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#F3F3F3] rounded-[12px] transition-all duration-300 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full cursor-pointer flex items-center justify-between gap-2 sm:gap-4 px-6 py-4 text-left focus:outline-none"
            >
              <span className="text-base lg:text-[20px] font-medium">
                {faq.question}
              </span>
              <Image
                src={arrow}
                alt="Toggle arrow"
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className={`px-6 transition-all duration-500 ease-in-out`}
              style={{
                maxHeight:
                  openIndex === index
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : "0px",
              }}
            >
              <div className="pb-4 pt-2 text-[#aaa]">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
