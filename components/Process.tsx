"use client";

const steps = [
  {
    number: 1,
    title: "沟通需求",
    description: "了解您的建房需求和想法",
  },
  {
    number: 2,
    title: "现场测量",
    description: "实地勘察，准确测量尺寸",
  },
  {
    number: 3,
    title: "报价确认",
    description: "提供详细报价单，确认方案",
  },
  {
    number: 4,
    title: "签订协议",
    description: "签订施工协议，明确权责",
  },
  {
    number: 5,
    title: "进场施工",
    description: "按计划组织施工，把控质量",
  },
  {
    number: 6,
    title: "验收交付",
    description: "完工验收，交付使用",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-bg-light py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-secondary md:text-4xl">
          施工流程
        </h2>

        {/* Desktop: horizontal layout */}
        <div className="hidden items-start justify-between md:flex">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-1 flex-col items-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+28px)] top-6 h-0.5 w-[calc(100%-56px)] bg-primary/20" />
              )}
              {/* Circle with number */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-sm">
                {step.number}
              </div>
              <h3 className="mt-4 text-center text-base font-semibold text-secondary">
                {step.title}
              </h3>
              <p className="mt-1 text-center text-sm text-text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative md:hidden">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-primary/20" />
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="relative flex items-start gap-4">
                {/* Circle */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {step.number}
                </div>
                <div className="pt-1.5">
                  <h3 className="text-base font-semibold text-secondary">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
