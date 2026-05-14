"use client";

import { useScrollAnimation } from "@/lib/useScrollAnimation";

const steps = [
  { number: "01", title: "沟通需求", description: "了解您的建房需求和想法" },
  { number: "02", title: "现场测量", description: "实地勘察，准确测量尺寸" },
  { number: "03", title: "报价确认", description: "提供详细报价单，确认方案" },
  { number: "04", title: "签订协议", description: "签订施工协议，明确权责" },
  { number: "05", title: "进场施工", description: "按计划组织施工，把控质量" },
  { number: "06", title: "验收交付", description: "完工验收，交付使用" },
];

function StepItem({
  step,
  index,
}: {
  step: { number: string; title: string; description: string };
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-border text-xs font-medium text-text-muted">
        {step.number}
      </span>
      <div>
        <h3 className="text-sm font-medium text-primary">{step.title}</h3>
        <p className="mt-0.5 text-sm text-text-muted">{step.description}</p>
      </div>
    </div>
  );
}

export default function Process() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="process" className="bg-surface-alt py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="text-2xl font-bold text-primary md:text-3xl">施工流程</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-text-muted">
            从沟通到交付，每一步都 认真对待
          </p>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden grid-cols-6 gap-6 md:grid">
          {steps.map((step) => (
            <div
              key={step.number}
              className="text-center"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-sm font-medium text-text-muted">
                {step.number}
              </div>
              <h3 className="mb-1 text-sm font-medium text-primary">{step.title}</h3>
              <p className="text-xs text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="space-y-5 md:hidden">
          {steps.map((step, index) => (
            <StepItem key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
