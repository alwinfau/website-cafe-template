"use client";

import {
  Add01Icon,
  BubbleTea01Icon,
  Coffee01Icon,
  Coffee02Icon,
  Coffee03Icon,
  CoffeeBeansIcon,
  Leaf01Icon,
  TeaIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  gradient: string;
  iconColor: string;
  badge: string | null;
  icon: IconSvgElement;
};

const products: Product[] = [
  {
    id: 1,
    name: "Signature Cold Brew",
    description: "16-hour slow steeped, ultra-smooth & bold",
    price: 14.99,
    category: "Cold Brew",
    gradient: "linear-gradient(160deg, #2e1206 0%, #7c4b1a 50%, #c8813e 100%)",
    iconColor: "#f5d4a8",
    badge: "Bestseller",
    icon: Coffee01Icon,
  },
  {
    id: 2,
    name: "Classic Espresso",
    description: "Rich double shot with velvety crema",
    price: 4.99,
    category: "Hot Coffee",
    gradient: "linear-gradient(160deg, #1a1a1a 0%, #3d2310 50%, #6b3d1e 100%)",
    iconColor: "#e5c9a4",
    badge: null,
    icon: Coffee02Icon,
  },
  {
    id: 3,
    name: "Vanilla Latte",
    description: "Smooth espresso, steamed milk & real vanilla",
    price: 6.99,
    category: "Hot Coffee",
    gradient: "linear-gradient(160deg, #5c3317 0%, #c8813e 55%, #f5d4a8 100%)",
    iconColor: "#fff8f0",
    badge: "New",
    icon: Coffee03Icon,
  },
  {
    id: 4,
    name: "Nitro Cold Brew",
    description: "Nitrogen-infused for silky-smooth texture",
    price: 7.99,
    category: "Cold Brew",
    gradient: "linear-gradient(160deg, #0d0d0d 0%, #2e1a07 50%, #7c4b1a 100%)",
    iconColor: "#d4b896",
    badge: null,
    icon: CoffeeBeansIcon,
  },
  {
    id: 5,
    name: "Matcha Latte",
    description: "Premium ceremonial grade Japanese matcha",
    price: 6.49,
    category: "Specialty",
    gradient: "linear-gradient(160deg, #0a2e0a 0%, #1a5e1a 50%, #4caf50 100%)",
    iconColor: "#c8f0c8",
    badge: "Popular",
    icon: Leaf01Icon,
  },
  {
    id: 6,
    name: "Caramel Macchiato",
    description: "Layered espresso with golden caramel drizzle",
    price: 7.49,
    category: "Hot Coffee",
    gradient: "linear-gradient(160deg, #4a2800 0%, #c87930 55%, #f5c842 100%)",
    iconColor: "#fff4cc",
    badge: null,
    icon: Coffee01Icon,
  },
  {
    id: 7,
    name: "Bubble Tea",
    description: "Taro milk tea with chewy tapioca pearls",
    price: 5.99,
    category: "Specialty",
    gradient: "linear-gradient(160deg, #2d0a3d 0%, #7c3d9e 55%, #c084e8 100%)",
    iconColor: "#f0d8ff",
    badge: null,
    icon: BubbleTea01Icon,
  },
  {
    id: 8,
    name: "Chamomile Honey",
    description: "Floral chamomile with raw organic honey",
    price: 4.49,
    category: "Tea",
    gradient: "linear-gradient(160deg, #4a3000 0%, #c8960a 55%, #f5d84a 100%)",
    iconColor: "#fff8cc",
    badge: null,
    icon: TeaIcon,
  },
];

const categories = ["All", "Hot Coffee", "Cold Brew", "Specialty", "Tea"];

function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden bg-white ring-1 ring-black/[0.07] hover:ring-black/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Gradient image area */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: product.gradient }}
      >
        {product.badge && (
          <Badge
            variant="default"
            className="absolute top-3 left-3 bg-white/20 text-white border-white/30 backdrop-blur-sm text-[0.6rem] px-2"
          >
            {product.badge}
          </Badge>
        )}
        <div
          className="size-16 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.12)" }}
        >
          <HugeiconsIcon
            icon={product.icon}
            size={32}
            color={product.iconColor}
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <div>
          <h3 className="text-sm font-bold text-black leading-snug">
            {product.name}
          </h3>
          <p className="text-[0.72rem] text-zinc-400 mt-0.5 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-base font-black text-black">
            ${product.price.toFixed(2)}
          </span>
          <Button
            size="icon-sm"
            className={cn(
              "rounded-full size-7 transition-all duration-200",
              added
                ? "bg-green-500 hover:bg-green-500 scale-110"
                : "bg-black hover:bg-zinc-700",
            )}
            onClick={handleAdd}
          >
            <HugeiconsIcon
              icon={Add01Icon}
              size={13}
              strokeWidth={2.5}
              color="white"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Menu() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="menu" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-cafe text-[0.7rem] font-bold tracking-[0.22em] uppercase mb-3">
            Our Menu
          </p>
          <h2
            className="font-black text-black tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Crafted With Passion
          </h2>
          <p className="text-sm text-zinc-400 mt-3 max-w-md mx-auto leading-relaxed">
            Every cup tells a story. From our signature cold brew to specialty
            drinks — there's something for every craving.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 pb-2 mb-10 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border",
                active === cat
                  ? "bg-black text-white border-black shadow-sm"
                  : "bg-white border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-800",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
