"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-light py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-secondary md:text-4xl">
          联系我们
        </h2>
        <div className="rounded-xl bg-white p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Phone */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl">
                📞
              </div>
              <h3 className="mb-2 text-lg font-semibold text-secondary">电话</h3>
              <a
                href="tel:13800000000"
                className="text-lg text-blue-600 hover:text-blue-700 hover:underline"
              >
                13800000000
              </a>
            </div>

            {/* WeChat */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl">
                💬
              </div>
              <h3 className="mb-2 text-lg font-semibold text-secondary">微信</h3>
              <img
                src="https://placehold.co/200x200/e2e8f0/475569?text=微信二维码"
                alt="微信二维码"
                width={140}
                height={140}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Service area */}
          <div className="mt-8 text-center">
            <p className="text-sm text-text-muted">
              服务区域：任丘及周边乡镇
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <a
              href="tel:13800000000"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              📞 电话咨询
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
