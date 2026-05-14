"use client";

const reasons = [
  {
    icon: "📍",
    title: "本地施工经验",
    description:
      "熟悉任丘及周边地区施工规范和风俗习惯，施工过程顺畅，邻里关系协调有经验。",
  },
  {
    icon: "📋",
    title: "报价清楚",
    description:
      "费用透明，无隐藏收费，报价单详细可查，每个项目明码标价，让您心中有数。",
  },
  {
    icon: "🤝",
    title: "现场沟通方便",
    description:
      "本地队伍随时到场沟通，及时解决问题，无需担心远程协调带来的延误和误会。",
  },
  {
    icon: "✅",
    title: "重视细节和交付",
    description:
      "注重施工细节，按时交付不拖延，每个环节严格把关，确保工程质量达标。",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-bg-light py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-secondary md:text-4xl">
          为什么选择我们
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xl">
                {item.icon}
              </div>
              <div>
                <h3 className="mb-1.5 text-lg font-semibold text-secondary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-body">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
