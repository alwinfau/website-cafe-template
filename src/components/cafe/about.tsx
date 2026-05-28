import {
  Award01Icon,
  CoffeeBeansIcon,
  StarIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const stats = [
  { icon: UserGroupIcon, value: "10K+", label: "Happy Customers" },
  { icon: CoffeeBeansIcon, value: "50+", label: "Coffee Blends" },
  { icon: Award01Icon, value: "16", label: "Awards Won" },
  { icon: StarIcon, value: "8 Yrs", label: "Of Excellence" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <div className="relative order-2 lg:order-1">
            {/* Main visual block */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #2e1206 0%, #7c4b1a 45%, #c8813e 100%)",
                aspectRatio: "4/5",
                maxHeight: "520px",
              }}
            >
              {/* Noise texture overlay */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  backgroundSize: "150px 150px",
                }}
              />

              {/* Large coffee bean decoration */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <HugeiconsIcon
                  icon={CoffeeBeansIcon}
                  size={280}
                  color="white"
                  strokeWidth={0.6}
                />
              </div>

              {/* Bold text overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white/90 font-black text-4xl leading-tight tracking-tight">
                  Brewed
                  <br />
                  with soul.
                </p>
              </div>

              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-card rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-xs font-black text-card-foreground">Since 2016</p>
                <p className="text-[0.65rem] text-muted-foreground font-medium">
                  Est. Bold Brew
                </p>
              </div>
            </div>

            {/* Decorative dot grid */}
            <div
              className="absolute -bottom-6 -left-6 w-28 h-28 opacity-30"
              aria-hidden
            >
              <svg
                viewBox="0 0 80 80"
                fill="none"
                aria-hidden="true"
                className="w-full h-full"
              >
                {[0, 1, 2, 3].flatMap((row) =>
                  [0, 1, 2, 3].map((col) => (
                    <circle
                      key={`${row}-${col}`}
                      cx={col * 20 + 10}
                      cy={row * 20 + 10}
                      r="2.5"
                      className="fill-foreground"
                    />
                  )),
                )}
              </svg>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div>
              <p className="text-cafe text-[0.7rem] font-bold tracking-[0.22em] uppercase mb-4">
                Our Story
              </p>
              <h2
                className="font-black text-foreground tracking-tight leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Obsessed with coffee since day one.
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Bold Brew started in a tiny garage in 2016 with one obsession:
                making the purest, boldest cold brew coffee on the planet. We
                spent years perfecting our 16-hour steeping process to extract
                every last note of flavor — without bitterness.
              </p>
              <p>
                Today, we source only single-origin beans from small-batch farms
                in Ethiopia, Colombia, and Guatemala. Every batch is brewed with
                the same care and precision as day one. No shortcuts. No
                compromises.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border">
              {stats.map(({ icon, value, label }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <div className="text-cafe">
                    <HugeiconsIcon icon={icon} size={18} strokeWidth={1.8} />
                  </div>
                  <p className="text-2xl font-black text-foreground leading-none">
                    {value}
                  </p>
                  <p className="text-[0.7rem] text-muted-foreground font-medium leading-snug">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 text-sm font-bold text-black border-b-2 border-cafe pb-0.5 hover:text-cafe transition-colors"
              >
                Explore Our Blends
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
