import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[80vh] items-center">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
        alt="A bright, modern home exterior at dusk"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-slate-900/55" />

      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find a Home You&apos;ll Love
          </h1>
          <p className="mt-6 text-lg text-slate-100 sm:text-xl">
            From first showings to final keys, our local agents guide you to the
            right home at the right price.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#listings"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Browse Homes
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white/95 px-6 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Talk to an Agent
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
