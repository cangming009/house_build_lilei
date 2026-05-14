import { cases } from "@/lib/cases";
import Link from "next/link";

export default function CasesSection() {
  const displayed = cases.slice(0, 3);

  return (
    <section id="cases" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-secondary md:text-4xl">
          施工案例
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
          以下展示部分完工案例，更多案例欢迎联系我们现场查看
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[3/2] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {item.content}
                </span>
                <h3 className="mb-1 text-lg font-semibold text-secondary">
                  {item.title}
                </h3>
                <p className="mb-3 text-sm text-text-muted">{item.location}</p>
                <p className="line-clamp-2 text-sm leading-relaxed text-text-body">
                  {item.description}
                </p>
                <div className="mt-3 flex gap-4 text-xs text-text-muted">
                  <span>面积：{item.area}</span>
                  <span>周期：{item.duration}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/cases"
            className="inline-block rounded-lg border-2 border-primary px-8 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            查看全部案例
          </Link>
        </div>
      </div>
    </section>
  );
}
