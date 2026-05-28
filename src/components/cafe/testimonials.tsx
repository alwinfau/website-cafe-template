import { QuoteUpIcon, StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const reviews = [
  {
    id: 1,
    name: "Sarah K.",
    role: "Coffee Enthusiast",
    initials: "SK",
    avatarBg: "#2e1206",
    avatarText: "#f5d4a8",
    rating: 5,
    text: "I've tried dozens of cold brews and Bold Brew is on another level. The smoothness is unreal — zero bitterness, just pure coffee. I order a case every two weeks without fail.",
  },
  {
    id: 2,
    name: "Marcus T.",
    role: "Barista & Roaster",
    initials: "MT",
    avatarBg: "#0a2e0a",
    avatarText: "#c8f0c8",
    rating: 5,
    text: "As someone who works with coffee professionally, I'm very selective. Bold Brew's 16-hour steep process genuinely extracts a flavor complexity I rarely see in commercial cold brew. Exceptional.",
  },
  {
    id: 3,
    name: "Priya M.",
    role: "Entrepreneur",
    initials: "PM",
    avatarBg: "#2d0a3d",
    avatarText: "#f0d8ff",
    rating: 5,
    text: "My morning ritual isn't complete without it. The 2x caffeine claim is real — I feel focused and calm, not jittery. It's replaced my afternoon slump entirely. Can't recommend enough.",
  },
  {
    id: 4,
    name: "James R.",
    role: "Software Engineer",
    initials: "JR",
    avatarBg: "#0a1a2e",
    avatarText: "#a8d4f5",
    rating: 5,
    text: "Replaced my morning espresso and never looked back. The caffeine hit is cleaner, lasts longer, and I don't get the afternoon crash I used to dread. Bold Brew is now a subscription.",
  },
  {
    id: 5,
    name: "Aiko T.",
    role: "Nutritionist",
    initials: "AT",
    avatarBg: "#1a2e0a",
    avatarText: "#d4f5a8",
    rating: 5,
    text: "The 65% less acidity claim is absolutely real. As a nutritionist with a sensitive stomach, I was skeptical — but Bold Brew is the first cold brew I can drink daily without discomfort.",
  },
  {
    id: 6,
    name: "Carlos M.",
    role: "Athlete",
    initials: "CM",
    avatarBg: "#2e1a06",
    avatarText: "#f5e4a8",
    rating: 5,
    text: "My pre-workout secret weapon. Clean energy with zero jitters, and the taste is incredible. I've recommended it to my entire training group and half of them are already subscribers.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {([1, 2, 3, 4, 5] as const).map((star) => (
        <HugeiconsIcon
          key={star}
          icon={StarIcon}
          size={13}
          color={star <= count ? "#f5a623" : "#d1d5db"}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  ariaHidden,
}: {
  review: (typeof reviews)[number];
  ariaHidden?: boolean;
}) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="w-80 shrink-0 flex flex-col gap-5 rounded-2xl p-6"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="text-cafe opacity-70">
        <HugeiconsIcon icon={QuoteUpIcon} size={24} strokeWidth={1.5} />
      </div>

      <p className="text-[0.82rem] text-white/70 leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-3 border-t border-white/10">
        <div
          className="size-10 rounded-full flex items-center justify-center text-[0.7rem] font-black shrink-0"
          style={{ background: review.avatarBg, color: review.avatarText }}
        >
          {review.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-white">{review.name}</p>
          <p className="text-[0.65rem] text-white/40">{review.role}</p>
        </div>
        <StarRating count={review.rating} />
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-black overflow-hidden relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="text-center mb-14 px-6">
          <p className="text-cafe text-[0.7rem] font-bold tracking-[0.22em] uppercase mb-3">
            Testimonials
          </p>
          <h2
            className="font-black text-white tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            What our customers say
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden group">
          {/* Left fade */}
          <div
            className="absolute left-0 inset-y-0 w-32 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgb(0,0,0) 0%, transparent 100%)",
            }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 inset-y-0 w-32 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, rgb(0,0,0) 0%, transparent 100%)",
            }}
          />

          {/* Scrolling track */}
          <div className="flex gap-5 w-max animate-marquee group-hover:paused py-2 px-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
            {/* Duplicate for seamless loop */}
            {reviews.map((review) => (
              <ReviewCard key={`dup-${review.id}`} review={review} ariaHidden />
            ))}
          </div>
        </div>

        {/* Aggregate rating */}
        <div className="mt-12 text-center flex flex-col items-center gap-2 px-6">
          <div className="flex items-center gap-1.5">
            {([1, 2, 3, 4, 5] as const).map((star) => (
              <HugeiconsIcon
                key={star}
                icon={StarIcon}
                size={20}
                color="#f5a623"
                strokeWidth={0}
              />
            ))}
          </div>
          <p className="text-white/50 text-xs">
            <span className="text-white font-bold">4.9 / 5</span> — based on
            2,400+ reviews
          </p>
        </div>
      </div>
    </section>
  );
}
