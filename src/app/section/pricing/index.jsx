"use client";

import React, { useState } from "react";
import Image from "next/image";
import Line from "../../assets/png/Line 4.png";
import tick from '../../assets/png/tick.png';
import Badge from "@/app/component/Badge";

const plans = {
  monthly: [
    {
      title: "Free",
      price: "$0",
      span: "/month",
      features: [
        "1 active project",
        "1 user seat",
        "Basic CI/CD pipeline",
        "Community support",
        "500 MB storage & bandwidth cap",
      ],
    },
    {
      title: "Pro",
      price: "$24.99",
      span: "/month",
      features: [
        "Up to 10 projects",
        "Up to 5 team members",
        "Automated deployments & rollback",
        "Custom domain + HTTPS",
        "Email + chat support",
      ],
    },
    {
      title: "Enterprise",
      price: "$34.99",
      span: "/month",
      features: [
        "Unlimited projects and users",
        "Dedicated account manager",
        "Private cloud & VPC support",
        "Advanced security (SSO, RBAC)",
        "SLA-backed 24/7 support",
      ],
    },
  ],
  yearly: [
    {
      title: "Starter",
      price: "$0",
      span: "/yr",
      features: [
        "10GB secure vault storage",
        "Up to 100 credentials per month",
        "Invite up to 4 users",
        "Share access via secure links",
        "Manage up to 10 vaults/projects",
      ],
    },
    {
      title: "Pro",
      price: "$39.99",
      span: "/yr",
      features: [
        "500GB secure vault storage",
        "Unlimited credential sharing",
        "Invite up to 50 users",
        "Share access via secure links",
        "Manage up to 50 vaults/projects",
      ],
    },
    {
      title: "Enterprise",
      price: "$69.99",
      span: "/yr",
      features: [
        "1TB secure vault storage",
        "Unlimited credential sharing",
        "Unlimited team invites",
        "Share access via secure links",
        "Manage up to 100 vaults/projects",
      ],
    },
  ],
};

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);

  return (
    <section className="flex flex-col items-center justify-center gap-4 mx-auto px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-40 pt-16 md:pb-4 w-full mt-10">
  <Badge text='Pricing'/>
      <h2 className="text-[32px] md:text-[40px] lg:text-[56px] font-semibold text-center mb-6">
        Flexible Pricing That <br />
        Grows With You
      </h2>

      {/* Tabs for Monthly and Yearly */}
      <div className="flex justify-center mb-10 border border-[#AAAAAA] rounded-full overflow-hidden">
        {["monthly", "yearly"].map((option) => (
          <button
            key={option}
          onClick={() => {
  if (option === "monthly" || option === "yearly") {
    setBilling(option);
  }
          }}
            className={`px-6 py-2 transition-all duration-200 ${
              billing === option
                ? "bg-black text-white"
                : "bg-[#F3F3F3] text-[#111111]"
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      {/* Plan Cards */}
      <div className="grid gap-6 lg:grid-cols-3 w-full max-w-7xl">
        {plans[billing].map((plan, index) => {
          const isSelected = selectedPlanIndex === index;

          return (
            <div
              key={index}
              onClick={() => setSelectedPlanIndex(index)}
              className={`w-full cursor-pointer bg-[#282828] border p-4 rounded-xl shadow-lg flex flex-col justify-between transition-all duration-200 ${
                isSelected
                  ? "border-[#00FF44] ring-2 ring-[#00FF44]"
                  : "border-[#444444]"
              }`}
            >
              <div>
                <h3 className="text-[#F3F3F3] text-[14px] md:text-base lg:text-[18px] font-semibold mb-2">
                  {plan.title}
                </h3>
                <p className="text-[40px] font-normal mb-4">
                  {plan.price}
                  <span className="text-[#aaa] text-[14px] md:text-base lg:text-[18px]">
                    {plan.span}
                  </span>
                </p>
                <p className="text-[#aaa] font-normal text-base md:text-[18px] lg:text-[20px] pb-4">
                  Perfect for you.
                </p>
                <div className="w-full flex justify-center">
                  <button
                    className={`w-full px-8 py-3 rounded-[8px] transition-all duration-200 ${
                      index === 1
                        ? "bg-[#0064E0] text-black hover:bg-black hover:text-white"
                        : "bg-white text-black hover:bg-white"
                    }`}
                  >
                    {isSelected ? "Try for Free" : "Try for Free"}
                  </button>
                </div>

                <Image src={Line} alt="Line" className="py-6" />

                <p className="text-[#aaa] text-[13px] md:text-base pt-2 pb-4">
                  Features
                </p>
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-[14px] md:text-base lg:text-[18px] text-[#F3F3F3] flex items-center gap-2"
                    >
                      <Image
                        src={tick}
                        alt="tick"
                        width={20}
                        height={20}
                        className="w-4 h-4"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
