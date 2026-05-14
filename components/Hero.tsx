"use client";

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-primary to-primary-dark px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          任丘李磊自建房
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 md:text-lg">
          任丘及周边自建房 · 农村别墅 · 主体施工 · 旧房翻新 · 室内外装修
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-md bg-white px-6 py-3 font-medium text-primary transition-colors hover:bg-gray-100"
          >
            电话咨询
          </a>
          <a
            href="#cases"
            className="rounded-md border-2 border-white/80 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
          >
            查看案例
          </a>
        </div>
      </div>
    </section>
  );
}
