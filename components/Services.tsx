"use client";

import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-secondary md:text-4xl">
          服务范围
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-light/10 text-2xl">
                {service.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-secondary">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-body">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
