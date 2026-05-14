import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "施工案例 | 任丘李磊自建房",
  description: "任丘李磊自建房施工案例展示，包括农村自建房、旧房翻新、室内外装修等真实完工案例。",
};

export default function CasesPage() {
  return (
    <>
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-xl font-bold text-primary">
            任丘李磊自建房
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
          >
            返回首页
          </Link>
        </div>
      </header>
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="mb-2 text-center text-3xl font-bold text-secondary md:text-4xl">
            施工案例
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
            以下展示部分完工案例，更多案例欢迎联系我们现场查看
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
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
                  <h2 className="mb-1 text-lg font-semibold text-secondary">
                    {item.title}
                  </h2>
                  <p className="mb-3 text-sm text-text-muted">{item.location}</p>
                  <p className="text-sm leading-relaxed text-text-body">
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
        </div>
      </main>
      <footer className="bg-secondary py-8 text-center text-sm text-white/60">
        <p>Copyright &copy; 任丘李磊自建房</p>
      </footer>
    </>
  );
}
