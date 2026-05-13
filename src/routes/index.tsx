import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroCurry from "@/assets/hero-curry.jpg";
import serviceEvent from "@/assets/service-event.jpg";
import servicePrivate from "@/assets/service-private-chef.jpg";
import serviceHealthy from "@/assets/service-healthy.jpg";
import serviceVegan from "@/assets/service-vegan.jpg";
import serviceFreezer from "@/assets/service-freezer.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import dishAlooTikki from "@/assets/dish-aloo-tikki.jpg";
import dishMeduVada from "@/assets/dish-medu-vada.jpg";
import dishChickenTikka from "@/assets/dish-chicken-tikka.jpg";
import dishChana from "@/assets/dish-chana.jpg";
import dishSaag from "@/assets/dish-saag-aloo.jpg";
import dishSamosa from "@/assets/dish-samosa.jpg";
import dishDahl from "@/assets/dish-dahl.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";
import aboutHands from "@/assets/about-hands.jpg";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import galleryHome from "@/assets/gallery-home.jpg";
import galleryStreet from "@/assets/gallery-street.jpg";
import galleryPrivate from "@/assets/gallery-private.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

type Allergen = "Vegan" | "Gluten Free" | "Contains Milk" | "Contains Wheat" | "Contains Sesame" | "Contains Nuts";

const ALLERGEN_STYLES: Record<Allergen, string> = {
  "Vegan": "border-olive/30 text-olive",
  "Gluten Free": "border-olive/30 text-olive",
  "Contains Milk": "border-charcoal/15 text-charcoal/55",
  "Contains Wheat": "border-charcoal/15 text-charcoal/55",
  "Contains Sesame": "border-charcoal/15 text-charcoal/55",
  "Contains Nuts": "border-charcoal/15 text-charcoal/55",
};

type Dish = {
  name: string;
  blurb: string;
  image: string;
  allergens: Allergen[];
  ingredients: string[];
};

const DISHES: Dish[] = [
  {
    name: "Aloo Tikki",
    blurb: "Crispy spiced potato medallions, tamarind glaze, pomegranate pearls.",
    image: dishAlooTikki,
    allergens: ["Vegan", "Gluten Free"],
    ingredients: ["Heritage potatoes", "Fresh ginger", "Green chili", "Cumin seed", "Tamarind", "Mint", "Himalayan salt"],
  },
  {
    name: "Medu Vada",
    blurb: "South Indian lentil donuts, coconut chutney and tempered sambar.",
    image: dishMeduVada,
    allergens: ["Vegan", "Gluten Free"],
    ingredients: ["Urad dal", "Curry leaves", "Black pepper", "Asafoetida", "Coconut", "Mustard seed"],
  },
  {
    name: "Charcoal Chicken Tikka",
    blurb: "Slow-marinated chicken in Kashmiri chili and hung curd, charcoal-finished.",
    image: dishChickenTikka,
    allergens: ["Contains Milk", "Gluten Free"],
    ingredients: ["Free-range chicken", "Greek yogurt", "Kashmiri chili", "Garam masala", "Mustard oil", "Lemon"],
  },
  {
    name: "Smoked Chana Curry",
    blurb: "Chickpeas in a slow-cooked tomato base, finished with hand-blended garam masala.",
    image: dishChana,
    allergens: ["Vegan", "Gluten Free"],
    ingredients: ["Kabuli chickpeas", "Vine tomatoes", "Red onion", "Ginger-garlic", "Coriander stem", "Cassia bark"],
  },
  {
    name: "Saag Aloo",
    blurb: "Wilted spinach folded with roasted heritage potato and cumin temper.",
    image: dishSaag,
    allergens: ["Vegan", "Gluten Free"],
    ingredients: ["Organic spinach", "Maris piper potato", "Cumin", "Garlic", "Green chili", "Cold-pressed oil"],
  },
  {
    name: "Hand-Folded Samosa",
    blurb: "Flaky pastry parcels, spiced potato and pea, served with date chutney.",
    image: dishSamosa,
    allergens: ["Contains Wheat", "Contains Sesame"],
    ingredients: ["Wheat pastry", "Potato", "Garden peas", "Black mustard", "Sesame", "Date jaggery"],
  },
  {
    name: "Heritage Dahl",
    blurb: "Twenty-four hour slow-cooked black lentils, finished with cultured butter.",
    image: dishDahl,
    allergens: ["Contains Milk", "Gluten Free"],
    ingredients: ["Urad dal", "Vine tomato", "Ginger", "Cultured butter", "Smoked paprika", "Coriander"],
  },
];

const SERVICES = [
  { title: "Event Catering", blurb: "Weddings and celebrations of up to 200 guests, served with grace.", image: serviceEvent, eyebrow: "01" },
  { title: "Private Chef Experiences", blurb: "An intimate journey through regional flavours, prepared in your home.", image: servicePrivate, eyebrow: "02" },
  { title: "Healthy Meal Plans", blurb: "Nutrient-dense Indian bowls designed for the modern weekday.", image: serviceHealthy, eyebrow: "03" },
  { title: "Vegan Catering", blurb: "Plant-forward menus that never compromise on depth of flavour.", image: serviceVegan, eyebrow: "04" },
  { title: "Freezer Curries", blurb: "Slow-cooked, gently packed and delivered, ready when you are.", image: serviceFreezer, eyebrow: "05" },
  { title: "Corporate Catering", blurb: "Considered menus for office gatherings, launches and away days.", image: serviceCorporate, eyebrow: "06" },
];

const GALLERY: { src: string; cat: GalleryCat; aspect: string }[] = [
  { src: galleryWedding, cat: "Weddings", aspect: "aspect-[4/5]" },
  { src: galleryPrivate, cat: "Private Events", aspect: "aspect-square" },
  { src: galleryHome, cat: "Home Dining", aspect: "aspect-[4/3]" },
  { src: serviceCorporate, cat: "Corporate Catering", aspect: "aspect-[3/4]" },
  { src: galleryStreet, cat: "Street Food", aspect: "aspect-[4/5]" },
  { src: serviceHealthy, cat: "Healthy Meals", aspect: "aspect-square" },
  { src: dishChickenTikka, cat: "Private Events", aspect: "aspect-[4/3]" },
  { src: dishSamosa, cat: "Street Food", aspect: "aspect-square" },
  { src: dishDahl, cat: "Home Dining", aspect: "aspect-[3/4]" },
];

type GalleryCat = "Weddings" | "Private Events" | "Home Dining" | "Corporate Catering" | "Street Food" | "Healthy Meals";
const CATEGORIES: ("All" | GalleryCat)[] = ["All", "Weddings", "Private Events", "Home Dining", "Corporate Catering", "Street Food", "Healthy Meals"];

const TESTIMONIALS = [
  {
    quote: "Namaste Nima brought our wedding to life. Every guest spoke about the food for weeks — it tasted like a memory of home.",
    name: "Priya & James",
    event: "Wedding · 140 guests · Cotswolds",
  },
  {
    quote: "An evening of quiet luxury. The chef arrived, the kitchen filled with scent, and our table was transformed.",
    name: "The Mehta Family",
    event: "Private Dining · London",
  },
  {
    quote: "Easily the best catering we've had at the office. Considered, beautiful, and genuinely delicious.",
    name: "Lena Holt, Studio Director",
    event: "Corporate Lunch · Shoreditch",
  },
];

function Home() {
  return (
    <main className="bg-ivory text-charcoal font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <SignatureDishes />
      <Story />
      <Gallery />
      <Testimonials />
      <Instagram />
      <Enquiry />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex justify-between items-center mix-blend-difference text-ivory">
      <a href="#top" className="font-serif text-xl md:text-2xl tracking-tight italic">Namaste Nima</a>
      <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.22em] font-medium">
        <a href="#services" className="hover:text-copper transition-colors">Services</a>
        <a href="#dishes" className="hover:text-copper transition-colors">Dishes</a>
        <a href="#story" className="hover:text-copper transition-colors">Our Story</a>
        <a href="#gallery" className="hover:text-copper transition-colors">Gallery</a>
        <a href="#enquire" className="hover:text-copper transition-colors">Enquire</a>
      </div>
      <a href="#enquire" className="hidden md:inline-flex border border-ivory/30 px-5 py-2 text-[10px] uppercase tracking-[0.2em] hover:bg-ivory hover:text-charcoal transition-colors">
        Book a Table
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full flex items-end overflow-hidden">
      <img
        src={heroCurry}
        alt="Steam rising from a copper pot of slow-cooked Indian curry"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-fade-in"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/70" />

      <div className="absolute top-[42%] -translate-y-1/2 left-0 right-0 px-6 md:px-12 z-10">
        <div className="max-w-5xl">
          <span className="inline-flex items-center gap-3 text-ivory/70 text-[10px] uppercase tracking-[0.35em] mb-6 animate-fade-up">
            <span className="h-px w-10 bg-ivory/40" /> Indian Catering · United Kingdom
          </span>
          <h1 className="font-serif text-ivory text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight max-w-[18ch] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Authentic Indian Catering for <span className="italic font-light">Modern Gatherings.</span>
          </h1>
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-20 w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <p className="text-ivory/85 text-base md:text-lg font-light max-w-md leading-relaxed animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Private dining, event catering, freezer curries and healthy Indian meals — crafted with authentic family recipes for the discerning host.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="#enquire" className="bg-ivory text-charcoal px-9 py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-copper hover:text-ivory transition-colors text-center">
              Enquire Now
            </a>
            <a href="#services" className="border border-ivory/40 text-ivory px-9 py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-ivory/10 backdrop-blur-sm transition-colors text-center">
              View Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:right-12 z-10 text-ivory/60 text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 animate-float">
        Scroll <span className="h-8 w-px bg-ivory/40" />
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Family Recipes", "Slow Cooked", "British-Sourced", "Hand-Blended Spice", "Private Dining", "Editorial Plating"];
  const loop = [...items, ...items];
  return (
    <div className="border-y border-charcoal/10 py-5 overflow-hidden bg-ivory">
      <div className="flex gap-16 whitespace-nowrap animate-marquee">
        {loop.map((t, i) => (
          <span key={i} className="font-serif italic text-2xl md:text-3xl text-charcoal/70 flex items-center gap-16">
            {t} <span className="text-copper">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
        <div className="max-w-2xl">
          <span className="text-olive uppercase tracking-[0.3em] text-[10px] font-semibold mb-5 block">Curated Experiences</span>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Elevated Indian hospitality, <span className="italic">tailored to your occasion.</span>
          </h2>
        </div>
        <a href="#enquire" className="text-[10px] uppercase tracking-[0.25em] border-b border-charcoal pb-1 hover:text-copper hover:border-copper transition-colors whitespace-nowrap">
          Discuss your event →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SERVICES.map((s) => (
          <article key={s.title} className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-cream mb-5 relative">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <span className="absolute top-4 left-4 text-ivory text-[10px] uppercase tracking-[0.25em] font-medium mix-blend-difference">{s.eyebrow}</span>
            </div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="font-serif text-2xl md:text-[1.7rem] leading-tight">{s.title}</h3>
              <span className="text-copper text-lg group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <p className="text-charcoal/60 text-sm leading-relaxed max-w-sm">{s.blurb}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SignatureDishes() {
  return (
    <section id="dishes" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-olive uppercase tracking-[0.3em] text-[10px] font-semibold mb-5 block">The Collection</span>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-2xl">
            Signature <span className="italic">creations.</span>
          </h2>
        </div>
        <p className="text-charcoal/60 text-sm max-w-xs">Drag, scroll, or tap a dish to reveal its ingredients — every plate built around family recipes.</p>
      </div>

      <div className="flex gap-6 md:gap-8 overflow-x-auto pb-12 px-6 md:px-12 no-scrollbar snap-x snap-mandatory">
        {DISHES.map((d) => (
          <DishCard key={d.name} dish={d} />
        ))}
        <div className="min-w-4 md:min-w-12 flex-shrink-0" />
      </div>
    </section>
  );
}

function DishCard({ dish }: { dish: Dish }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="snap-start flex-shrink-0 w-[85vw] sm:w-[420px] bg-ivory rounded-3xl overflow-hidden border border-charcoal/5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]">
      <div className="aspect-[5/4] overflow-hidden bg-cream">
        <img src={dish.image} alt={dish.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1200ms]" />
      </div>
      <div className="p-7 md:p-8">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="font-serif text-2xl md:text-[1.6rem] leading-tight">{dish.name}</h3>
          <div className="flex flex-wrap justify-end gap-1.5 max-w-[55%]">
            {dish.allergens.map((a) => (
              <span key={a} className={`px-2 py-1 rounded-full border ${ALLERGEN_STYLES[a]} text-[9px] font-medium uppercase tracking-[0.1em] whitespace-nowrap`}>
                {a}
              </span>
            ))}
          </div>
        </div>
        <p className="text-charcoal/60 text-sm leading-relaxed mb-6">{dish.blurb}</p>

        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center pt-5 border-t border-charcoal/10 text-[10px] uppercase tracking-[0.25em] font-semibold text-copper"
        >
          <span>{open ? "Hide Ingredients" : "View Ingredients"}</span>
          <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>↓</span>
        </button>
        <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-charcoal/65 italic">
              {dish.ingredients.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-copper" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

function Story() {
  return (
    <section id="story" className="grid grid-cols-1 md:grid-cols-12 min-h-[80vh]">
      <div className="md:col-span-6 relative">
        <img src={aboutPortrait} alt="Founder of Namaste Nima in her kitchen" loading="lazy" className="w-full h-full object-cover min-h-[400px]" />
      </div>
      <div className="md:col-span-6 bg-charcoal text-ivory flex items-center px-6 md:px-16 lg:px-24 py-20 md:py-28 relative">
        <div className="max-w-lg">
          <span className="text-copper uppercase tracking-[0.3em] text-[10px] font-semibold mb-6 block">The Nima Philosophy</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8">
            Recipes passed through generations, <span className="italic">refined for the modern table.</span>
          </h2>
          <div className="space-y-5 text-ivory/75 leading-relaxed text-[15px]">
            <p>
              Namaste Nima began at a kitchen table in the West Midlands — three generations of women, copper pots, and the unhurried rhythm of slow cooking. Every recipe in our kitchen is a small inheritance.
            </p>
            <p>
              We blend our spices in-house, source from local British growers, and cook the way our family always has: gently, patiently, with care. Hospitality, for us, is the warmth of the room and the memory you carry home.
            </p>
          </div>
          <a href="#enquire" className="inline-block mt-10 text-[10px] uppercase tracking-[0.3em] border-b border-ivory pb-1 hover:text-copper hover:border-copper transition-colors">
            Cook with us →
          </a>
        </div>

        <img src={aboutHands} alt="Hands kneading dough" loading="lazy" className="hidden lg:block absolute -left-20 bottom-12 w-44 h-56 object-cover rounded-lg shadow-2xl border-4 border-charcoal" />
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState<"All" | GalleryCat>("All");
  const items = active === "All" ? GALLERY : GALLERY.filter((g) => g.cat === active);
  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <span className="text-olive uppercase tracking-[0.3em] text-[10px] font-semibold mb-5 block">From Our Kitchen</span>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">A visual <span className="italic">journal.</span></h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium border transition-colors ${
                active === c
                  ? "bg-charcoal text-ivory border-charcoal"
                  : "bg-transparent text-charcoal/70 border-charcoal/15 hover:border-charcoal"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="columns-2 md:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
        {items.map((g, i) => (
          <figure key={`${g.src}-${i}`} className="mb-4 md:mb-6 break-inside-avoid group overflow-hidden rounded-xl bg-cream relative">
            <img src={g.src} alt={g.cat} loading="lazy" className={`w-full ${g.aspect} object-cover transition-transform duration-[1200ms] group-hover:scale-105`} />
            <figcaption className="absolute bottom-3 left-3 text-ivory text-[10px] uppercase tracking-[0.2em] mix-blend-difference">{g.cat}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section className="bg-cream py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-olive uppercase tracking-[0.3em] text-[10px] font-semibold mb-8 block">In Their Words</span>
        <blockquote className="font-serif text-3xl md:text-5xl leading-[1.2] italic text-charcoal/90 mb-10">
          “{t.quote}”
        </blockquote>
        <div className="text-[11px] uppercase tracking-[0.25em] text-charcoal mb-2 font-medium">{t.name}</div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-charcoal/50">{t.event}</div>

        <div className="flex justify-center gap-2 mt-12">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-px transition-all ${i === idx ? "w-12 bg-charcoal" : "w-6 bg-charcoal/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Instagram() {
  const tiles = [dishAlooTikki, dishChickenTikka, galleryStreet, dishDahl, galleryHome, dishSamosa];
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div>
          <span className="text-olive uppercase tracking-[0.3em] text-[10px] font-semibold mb-5 block">Follow Along</span>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">@namastenima</h2>
        </div>
        <a href="#" className="text-[10px] uppercase tracking-[0.25em] border-b border-charcoal pb-1 hover:text-copper hover:border-copper transition-colors">Visit Instagram →</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
        {tiles.map((src, i) => (
          <a key={i} href="#" className="aspect-square overflow-hidden bg-cream group relative rounded-md">
            <img src={src} alt={`Instagram post ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors flex items-center justify-center text-ivory text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100">View</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Enquiry() {
  return (
    <section id="enquire" className="bg-charcoal text-ivory py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-5">
          <span className="text-copper uppercase tracking-[0.3em] text-[10px] font-semibold mb-6 block">Begin the Conversation</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            Let's curate your <span className="italic">next gathering.</span>
          </h2>
          <p className="text-ivory/65 leading-relaxed mb-12 max-w-md">
            Whether it's an intimate dinner for two or a celebration for two hundred, share your vision and we'll respond within 24 hours.
          </p>

          <div className="space-y-5">
            <a href="#" className="flex items-center gap-5 group">
              <span className="size-12 rounded-full bg-ivory/5 border border-ivory/15 grid place-items-center group-hover:bg-copper group-hover:border-copper transition-colors text-copper group-hover:text-ivory">W</span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-ivory/50">Quick Enquiry</div>
                <div className="text-base">WhatsApp · +44 7700 900123</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-5 group">
              <span className="size-12 rounded-full bg-ivory/5 border border-ivory/15 grid place-items-center group-hover:bg-copper group-hover:border-copper transition-colors text-copper group-hover:text-ivory">@</span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-ivory/50">Email</div>
                <div className="text-base">studio@namastenima.co.uk</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-5 group">
              <span className="size-12 rounded-full bg-ivory/5 border border-ivory/15 grid place-items-center group-hover:bg-copper group-hover:border-copper transition-colors text-copper group-hover:text-ivory">IG</span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-ivory/50">Instagram</div>
                <div className="text-base">@namastenima</div>
              </div>
            </a>
          </div>
        </div>

        <form className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8" onSubmit={(e) => e.preventDefault()}>
          <Field label="Event Type">
            <select className="enquiry-input">
              <option>Private Dining</option>
              <option>Wedding</option>
              <option>Corporate</option>
              <option>Freezer Curries</option>
              <option>Healthy Meal Plan</option>
            </select>
          </Field>
          <Field label="Guest Count">
            <input type="text" placeholder="e.g. 24" className="enquiry-input" />
          </Field>
          <Field label="Preferred Date">
            <input type="date" className="enquiry-input" />
          </Field>
          <Field label="Budget">
            <select className="enquiry-input">
              <option>£500 – £1,500</option>
              <option>£1,500 – £5,000</option>
              <option>£5,000 – £15,000</option>
              <option>£15,000+</option>
            </select>
          </Field>
          <Field label="Dietary Requirements" className="md:col-span-2">
            <input type="text" placeholder="Vegan, gluten-free, allergies…" className="enquiry-input" />
          </Field>
          <Field label="Tell Us About Your Event" className="md:col-span-2">
            <textarea rows={4} placeholder="Venue, vibe, anything we should know…" className="enquiry-input resize-none" />
          </Field>
          <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-ivory/40">We respond within 24 hours.</p>
            <button type="submit" className="bg-ivory text-charcoal px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-copper hover:text-ivory transition-colors">
              Send Enquiry
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .enquiry-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid rgb(255 255 255 / 0.15);
          padding: 0.6rem 0;
          color: var(--ivory);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .enquiry-input:focus { border-color: var(--copper); }
        .enquiry-input::placeholder { color: rgb(255 255 255 / 0.3); }
        select.enquiry-input option { background: var(--charcoal); color: var(--ivory); }
      `}</style>
    </section>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[10px] uppercase tracking-[0.25em] text-ivory/45 mb-2 block">{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-ivory py-14 px-6 md:px-12 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-serif text-2xl italic">Namaste Nima</span>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.25em] font-medium">
          <a href="#" className="hover:text-copper transition-colors">Instagram</a>
          <a href="#" className="hover:text-copper transition-colors">WhatsApp</a>
          <a href="#" className="hover:text-copper transition-colors">Email</a>
        </div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal/40">© 2026 · Crafted in the UK</p>
      </div>
    </footer>
  );
}
