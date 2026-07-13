"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  number: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { number: 1200, suffix: "+", label: "Homes Sold" },
  { number: 98, suffix: "%", label: "Client Satisfaction" },
  { number: 21, suffix: "", label: "Years in Business" },
  { number: 14, suffix: "", label: "Avg. Days on Market" },
];

const DURATION = 1500;

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setValue(stat.number);
      return;
    }

    let frame = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / DURATION, 1);
      setValue(Math.round(progress * stat.number));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, stat.number]);

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-white sm:text-5xl">
        {value.toLocaleString("en-US")}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-emerald-100">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-emerald-800 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} start={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
