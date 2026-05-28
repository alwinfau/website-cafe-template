import {
  Coffee01Icon,
  CoffeeBeansIcon,
  Leaf01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";

function FourPointStar({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 0L21.8 18.2L40 20L21.8 21.8L20 40L18.2 21.8L0 20L18.2 18.2L20 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SealBadge() {
  return (
    <div className="relative w-[68px] h-[68px] flex items-center justify-center">
      <svg
        viewBox="0 0 68 68"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
      >
        <circle cx="34" cy="34" r="32" stroke="black" strokeWidth="1.5" />
        <circle
          cx="34"
          cy="34"
          r="26"
          stroke="black"
          strokeWidth="0.75"
          strokeDasharray="2 2"
        />
      </svg>
      <div className="text-center z-10">
        <p className="text-[5.5px] font-black uppercase tracking-[0.15em] leading-[1.6] text-black">
          SATISFACTION
          <br />• • •<br />
          100%
          <br />
          ORIGINAL
          <br />• • •<br />
          GUARANTEE
        </p>
      </div>
    </div>
  );
}

function CoffeeGlass() {
  return (
    <svg
      viewBox="0 0 180 340"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="coffeeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8813e" />
          <stop offset="30%" stopColor="#7c4b1a" />
          <stop offset="100%" stopColor="#2e1206" />
        </linearGradient>
        <linearGradient id="glassOverlay" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="45%" stopColor="white" stopOpacity="0.03" />
          <stop offset="100%" stopColor="white" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="iceGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.95" />
          <stop offset="100%" stopColor="white" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="creamGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f5e6d5" stopOpacity="0.92" />
          <stop offset="50%" stopColor="#edd8bf" stopOpacity="0.78" />
          <stop offset="100%" stopColor="#e5c9a4" stopOpacity="0.55" />
        </linearGradient>
        <clipPath id="glassShape">
          <path d="M22 32 L158 32 L143 328 L37 328 Z" />
        </clipPath>
      </defs>

      {/* Glass shadow */}
      <ellipse cx="90" cy="334" rx="50" ry="5" fill="black" opacity="0.12" />

      {/* Coffee fill */}
      <path d="M22 32 L158 32 L143 328 L37 328 Z" fill="url(#coffeeGrad)" />

      {/* Cream / foam swirl layer */}
      <g clipPath="url(#glassShape)">
        <ellipse cx="90" cy="90" rx="62" ry="22" fill="url(#creamGrad)" />
        <path
          d="M30 86 Q60 73 90 80 Q120 73 150 86 Q122 100 90 96 Q58 100 30 86Z"
          fill="#e8c8a0"
          opacity="0.55"
        />
      </g>

      {/* Ice cubes */}
      <g clipPath="url(#glassShape)">
        <rect
          x="38"
          y="104"
          width="50"
          height="40"
          rx="6"
          fill="url(#iceGrad)"
        />
        <rect
          x="38"
          y="104"
          width="50"
          height="40"
          rx="6"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.5"
        />
        <line
          x1="43"
          y1="109"
          x2="43"
          y2="128"
          stroke="white"
          strokeWidth="2"
          opacity="0.7"
          strokeLinecap="round"
        />

        <rect
          x="95"
          y="98"
          width="46"
          height="36"
          rx="6"
          fill="url(#iceGrad)"
          opacity="0.88"
        />
        <line
          x1="100"
          y1="103"
          x2="100"
          y2="120"
          stroke="white"
          strokeWidth="2"
          opacity="0.7"
          strokeLinecap="round"
        />

        <rect
          x="34"
          y="142"
          width="42"
          height="32"
          rx="5"
          fill="url(#iceGrad)"
          opacity="0.82"
        />
        <rect
          x="102"
          y="136"
          width="38"
          height="30"
          rx="5"
          fill="url(#iceGrad)"
          opacity="0.78"
        />
      </g>

      {/* Deep coffee beneath ice */}
      <g clipPath="url(#glassShape)">
        <path
          d="M36 172 L144 172 L143 328 L37 328 Z"
          fill="#2e1206"
          opacity="0.75"
        />
        <path
          d="M36 172 Q90 180 144 172"
          fill="none"
          stroke="#7c4b1a"
          strokeWidth="8"
          opacity="0.25"
        />
      </g>

      {/* Glass wall overlay */}
      <path d="M22 32 L158 32 L143 328 L37 328 Z" fill="url(#glassOverlay)" />

      {/* Left highlight streak */}
      <path
        d="M30 42 L36 310"
        stroke="white"
        strokeWidth="5"
        opacity="0.18"
        strokeLinecap="round"
      />
      <path
        d="M41 36 L46 305"
        stroke="white"
        strokeWidth="2.5"
        opacity="0.1"
        strokeLinecap="round"
      />

      {/* Glass rim */}
      <rect
        x="14"
        y="22"
        width="152"
        height="17"
        rx="7"
        fill="white"
        opacity="0.12"
      />
      <rect
        x="14"
        y="22"
        width="152"
        height="17"
        rx="7"
        stroke="white"
        strokeWidth="1.2"
        opacity="0.38"
      />

      {/* Left & right glass edges */}
      <path
        d="M22 39 L37 328"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.28"
      />
      <path
        d="M158 39 L143 328"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.28"
      />

      {/* Glass bottom */}
      <path
        d="M37 328 L143 328"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.22"
      />
    </svg>
  );
}

const features = [
  { icon: Leaf01Icon, label: "65% Less acidity" },
  { icon: CoffeeBeansIcon, label: "2x More Caffeine" },
  { icon: Coffee01Icon, label: "16-hour steeped" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background pt-16"
    >
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none">
        <span
          className="font-black text-foreground/[0.035] tracking-tighter whitespace-nowrap"
          style={{ fontSize: "22vw" }}
        >
          Bold Brew
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Tagline */}
        <p className="mt-14 text-cafe text-[0.7rem] sm:text-xs font-bold tracking-[0.22em] uppercase">
          Pure Caffeine Nothing Extra
        </p>

        {/* Giant title */}
        <div className="relative w-full text-center mt-3">
          {/* Star decoration */}
          <div className="absolute left-[3%] sm:left-[7%] top-1/2 -translate-y-1/2 text-black/20 hidden sm:block">
            <FourPointStar size={38} />
          </div>

          <h1
            className="font-black text-foreground leading-none tracking-tighter select-none"
            style={{ fontSize: "clamp(3.5rem, 16vw, 13.5rem)" }}
          >
            Cold Brew
          </h1>

          {/* Seal badge */}
          <div className="absolute right-[3%] sm:right-[6%] top-2 hidden md:block opacity-75">
            <SealBadge />
          </div>
        </div>

        {/* Three-column content */}
        <div
          className="relative z-10 w-full grid grid-cols-1 md:grid-cols-[1fr_240px_1fr] lg:grid-cols-[1fr_280px_1fr] gap-6 md:gap-10 pb-14"
          style={{ marginTop: "clamp(-2rem, -4vw, -5rem)" }}
        >
          {/* Left: description + CTA */}
          <div className="order-2 md:order-1 flex flex-col justify-end gap-5 pb-0 md:pb-12">
            <p className="text-[0.78rem] leading-relaxed text-muted-foreground max-w-[260px]">
              Cold brew is coffee in its rawest form — steeped slow, brewed
              cold, and packed with bold flavor. No heat, no bitterness, just
              smooth, high-caffeine energy that lasts.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button className="bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100 rounded-none h-11 px-7 text-sm font-semibold tracking-wide">
                Buy Now
              </Button>
              <a
                href="#menu"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                View Menu →
              </a>
            </div>
          </div>

          {/* Center: glass art */}
          <div className="order-1 md:order-2 flex flex-col items-center justify-end relative">
            {/* Orange glow */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden
            >
              <div
                className="rounded-full"
                style={{
                  width: "min(280px, 75vw)",
                  height: "min(280px, 75vw)",
                  background:
                    "radial-gradient(ellipse, oklch(0.63 0.22 40 / 0.28) 0%, oklch(0.76 0.16 40 / 0.12) 45%, transparent 72%)",
                }}
              />
            </div>

            {/* Glass */}
            <div
              className="relative z-10 drop-shadow-2xl"
              style={{ width: "min(200px, 50vw)", height: "min(310px, 78vw)" }}
            >
              <CoffeeGlass />
            </div>
          </div>

          {/* Right: features + price */}
          <div className="order-3 flex flex-col justify-end gap-3 pb-0 md:pb-12">
            <div className="flex flex-col gap-2.5 max-w-[220px]">
              {features.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-card border border-border rounded-2xl px-4 py-3 shadow-sm"
                >
                  <div className="size-8 rounded-full bg-cafe/[0.1] flex items-center justify-center text-cafe shrink-0">
                    <HugeiconsIcon icon={icon} size={15} strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold text-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2.5 mt-2 self-end">
              <span className="text-[0.65rem] font-semibold text-zinc-400 tracking-wider uppercase">
                Price
              </span>
              <div className="w-px h-5 bg-zinc-200" />
              <span
                className="font-black text-foreground"
                style={{ fontSize: "2rem", lineHeight: 1 }}
              >
                $14.99
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
