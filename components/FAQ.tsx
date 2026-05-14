"use client";

import { useState } from "react";

const faqs = [
  {
    q: "任丘周边能不能施工？",
    a: "可以。我们的服务范围覆盖任丘及周边乡镇，如出岸镇、石门桥镇、梁召镇、辛中驿镇、长丰镇等，距离不是问题。",
  },
  {
    q: "自建房可以只做主体吗？",
    a: "可以。我们支持主体框架施工、室内装修分开做，也可以整体承包，根据您的需求和预算灵活安排。",
  },
  {
    q: "旧房翻新能不能做？",
    a: "可以做。旧房翻新是我们的主要服务之一，包括墙体改造、水电重铺、厨卫翻新等项目，欢迎咨询。",
  },
  {
    q: "报价需要提供什么信息？",
    a: "提供宅基地或房屋的大致面积、施工类型（新建/翻新/装修）、位置等信息，我们可以安排现场测量并给出详细报价。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-secondary md:text-4xl">
          常见问题
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-gray-50"
                >
                  <span className="pr-4 text-sm font-medium text-secondary md:text-base">
                    Q: {faq.q}
                  </span>
                  <svg
                    className={`h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-text-body">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
