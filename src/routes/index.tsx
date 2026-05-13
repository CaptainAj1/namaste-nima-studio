import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import logoMark from "@/assets/namaste-nima-logo.png";
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

const INSTAGRAM_URL = "https://www.instagram.com/namastenimauk/";

const PROFILE_SIGNALS = [
  "Based in the North East",
  "Party and event catering",
  "Private chef experiences",
  "Healthy meal plans",
  "Vegan options",
  "Freezer curries",
  "Cookery lessons",
  "5-star hygiene",
] as const;

const OFFERINGS = [
  {
    id: "events",
    title: "Party and Event Catering",
    summary:
      "Feasts with colour, warmth and proper hospitality for birthdays, weddings, pop-ups and celebrations.",
    details:
      "Build a menu around street-food favourites, sharing trays and crowd-pleasing mains, with service shaped to your venue and guest flow.",
    image: serviceEvent,
    accent: "Large gatherings",
  },
  {
    id: "private-chef",
    title: "Private Chef",
    summary:
      "An at-home experience that brings the pace, aromas and theatre of a live kitchen into your evening.",
    details:
      "Ideal for intimate dinners, milestone birthdays and smaller occasions where you want restaurant-level care without leaving home.",
    image: servicePrivate,
    accent: "Hosted at home",
  },
  {
    id: "meal-plans",
    title: "Healthy Meal Plans",
    summary:
      "Balanced weekday meals built around bold spice, comfort and practical prep for busy schedules.",
    details:
      "Expect flavour-forward bowls, lighter curries and thoughtful vegetarian or vegan choices that still feel generous and satisfying.",
    image: serviceHealthy,
    accent: "Weekly rhythm",
  },
  {
    id: "freezer-curries",
    title: "Freezer Curries",
    summary:
      "Slow-cooked staples prepared in batches so you can keep proper, home-style food close at hand.",
    details:
      "A flexible option for households that want quick dinners without losing the depth and comfort of a long-cooked dish.",
    image: serviceFreezer,
    accent: "Ready when you are",
  },
  {
    id: "vegan",
    title: "Vegan Menus",
    summary: "Plant-led dishes with the same richness, colour and texture as the rest of the menu.",
    details:
      "From chana and saag to street-food snacks and vibrant sides, vegan offerings are treated as headline dishes, not add-ons.",
    image: serviceVegan,
    accent: "Plant-forward",
  },
  {
    id: "lessons",
    title: "Cookery Lessons",
    summary:
      "Hands-on sessions for people who want to learn the building blocks behind the food they love.",
    details:
      "A chance to unpack spice layering, prep habits and family-style techniques in a way that feels welcoming rather than formal.",
    image: aboutHands,
    accent: "Learn the method",
  },
] as const;

const FEATURE_CARDS = [
  {
    title: "Family-style flavour",
    text: "Menus are written around food that feels generous, comforting and full of character rather than overly polished for its own sake.",
  },
  {
    title: "Built for mixed diets",
    text: "Vegan-friendly dishes and flexible menu planning are part of the core offer, making it easier to feed a mixed table well.",
  },
  {
    title: "North East rooted",
    text: "The tone is warm and local, with services suited to homes, events and community gatherings across the North East.",
  },
] as const;

const MENU_HIGHLIGHTS = [
  {
    name: "Aloo Tikki Chaat",
    note: "Crisp potato, tangy chutney, cooling yogurt and herbs for a lively welcome bite.",
    image: dishAlooTikki,
  },
  {
    name: "Medu Vada",
    note: "Golden lentil fritters with chutney and warmth from black pepper, mustard seed and curry leaf.",
    image: dishMeduVada,
  },
  {
    name: "Charcoal Chicken Tikka",
    note: "A deeper, smokier option for parties where guests want something rich and celebratory.",
    image: dishChickenTikka,
  },
  {
    name: "Slow Chana Curry",
    note: "A dependable vegan centrepiece with body, spice and comfort for buffets or meal plans.",
    image: dishChana,
  },
  {
    name: "Saag Aloo",
    note: "Greens and soft potato cooked until glossy, earthy and deeply savoury.",
    image: dishSaag,
  },
  {
    name: "Hand-folded Samosa",
    note: "Crisp pastry, spiced filling and the kind of snack that disappears quickly at any gathering.",
    image: dishSamosa,
  },
  {
    name: "Heritage Dahl",
    note: "A comforting, slow-cooked pot made for colder evenings, larger trays and repeat orders.",
    image: dishDahl,
  },
] as const;

const GALLERY = [
  {
    title: "Wedding and celebration tables",
    text: "Long-table warmth, layered serving platters and food designed to bring the room together.",
    image: galleryWedding,
  },
  {
    title: "Private dinners at home",
    text: "A more intimate setup where the details matter just as much as the cooking.",
    image: galleryPrivate,
  },
  {
    title: "Street-food energy",
    text: "Bright snacks, bold colour and a more casual pace for markets, pop-ups and lively parties.",
    image: galleryStreet,
  },
  {
    title: "Everyday meal planning",
    text: "Food that still feels abundant even when it is built for your weekday routine.",
    image: galleryHome,
  },
] as const;

const PROCESS = [
  {
    step: "01",
    title: "Tell us the occasion",
    text: "Share your date, guest count, postcode and the kind of atmosphere you want to create.",
  },
  {
    step: "02",
    title: "Shape the menu",
    text: "Choose a direction that fits your guests, from event trays and private chef dinners to weekly meal prep.",
  },
  {
    step: "03",
    title: "Host with confidence",
    text: "Service, timing and food presentation are then tuned to the format so the event feels easy on the day.",
  },
] as const;

function Home() {
  const [activeId, setActiveId] = useState(OFFERINGS[0].id);
  const activeOffering = OFFERINGS.find((item) => item.id === activeId) ?? OFFERINGS[0];

  return (
    <main className="nn-site min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <SignalBar />
      <section id="formats" className="nn-section">
        <div className="nn-shell">
          <SectionIntro
            kicker="What the profile points to"
            title="A homepage shaped around the real service mix."
            body="The public Instagram metadata points clearly to North East-based catering, private chef work, healthy meal plans, vegan options, freezer curries and cookery lessons. The redesign leans into that broader studio offer."
          />

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-3">
              {OFFERINGS.map((offering) => {
                const isActive = offering.id === activeId;
                return (
                  <button
                    key={offering.id}
                    type="button"
                    onClick={() => setActiveId(offering.id)}
                    className={`nn-offering-tab ${isActive ? "nn-offering-tab-active" : ""}`}
                  >
                    <span className="block text-left">
                      <span className="block font-serif text-2xl leading-tight md:text-[2rem]">
                        {offering.title}
                      </span>
                      <span className="mt-2 block max-w-xl text-sm leading-6 text-foreground/72">
                        {offering.summary}
                      </span>
                    </span>
                    <span className="nn-accent-chip">{offering.accent}</span>
                  </button>
                );
              })}
            </div>

            <article className="nn-feature-panel">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={activeOffering.image}
                  alt={activeOffering.title}
                  className="h-[420px] w-full object-cover md:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oxblood-900/88 via-oxblood-900/14 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[0.64rem] uppercase tracking-[0.32em] text-white/88 backdrop-blur">
                    {activeOffering.accent}
                  </div>
                  <h3 className="max-w-lg font-serif text-3xl leading-tight text-white md:text-5xl">
                    {activeOffering.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 md:text-base">
                    {activeOffering.details}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="nn-section pt-0">
        <div className="nn-shell grid gap-5 md:grid-cols-3">
          {FEATURE_CARDS.map((card) => (
            <article key={card.title} className="nn-quiet-card">
              <h3 className="font-serif text-[1.75rem] leading-tight">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-foreground/72">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="menu" className="nn-section nn-section-dark">
        <div className="nn-shell">
          <SectionIntro
            kicker="Menu language"
            title="Comfort-led dishes with enough depth for both parties and weeknights."
            body="Rather than writing in the language of fine dining, this homepage keeps the tone closer to what the public profile suggests: vibrant food, practical formats and a mix of celebratory and everyday offerings."
            inverse
          />

          <div className="nn-menu-grid">
            <article className="nn-menu-story">
              <img
                src={heroCurry}
                alt="A richly spiced curry served in a copper pot"
                className="h-full min-h-[420px] w-full object-cover"
              />
              <div className="nn-menu-story-copy">
                <p className="text-[0.7rem] uppercase tracking-[0.34em] text-saffron-200/80">
                  Menu direction
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-tight text-white md:text-5xl">
                  Rich sauces, bright garnishes and food designed to feel shared.
                </h3>
                <p className="mt-5 max-w-lg text-sm leading-6 text-white/78 md:text-base">
                  The written content now prioritises warmth, abundance and recognisable home-style
                  dishes, while still feeling elevated enough for events, private chef evenings and
                  styled catering setups.
                </p>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {MENU_HIGHLIGHTS.map((dish) => (
                <article key={dish.name} className="nn-menu-card">
                  <img src={dish.image} alt={dish.name} className="h-52 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="font-serif text-2xl leading-tight text-oxblood-950">
                      {dish.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-foreground/72">{dish.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="nn-section">
        <div className="nn-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-muted">
            <img
              src={aboutPortrait}
              alt="Portrait connected to the Namaste Nima kitchen story"
              className="h-full min-h-[560px] w-full object-cover"
            />
            <div className="absolute bottom-5 right-5 hidden w-44 overflow-hidden rounded-[1.4rem] border border-white/55 shadow-2xl md:block">
              <img
                src={aboutHands}
                alt="Hands shaping dough"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="nn-kicker">Story and tone</div>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[0.98] tracking-tight text-oxblood-950 md:text-6xl">
              Rooted in the North East, written to feel generous and close to home.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-foreground/76">
              <p>
                The rewritten homepage moves away from anonymous luxury-catering language and closer
                to the profile’s public identity: a warm, regional food business offering party
                catering, private chef work, weekly meals, vegan options and cooking-led
                experiences.
              </p>
              <p>
                Visually, the logo’s deep red and gold become the foundation for the full system,
                giving the homepage a more memorable ceremonial mood without losing usability on
                mobile.
              </p>
              <p>
                Copy is intentionally practical as well as atmospheric, because the service list
                suggests a brand that balances celebration with repeat, real-life ordering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="nn-section bg-sand-100/80">
        <div className="nn-shell">
          <SectionIntro
            kicker="Visual rhythm"
            title="A gallery that can be swapped to real Instagram media later."
            body="Instagram only exposes the profile photo publicly in this environment, so the page uses the repo’s existing food and catering imagery while keeping the gallery and social section ready for real post assets."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {GALLERY.map((item, index) => (
              <article
                key={item.title}
                className={`nn-gallery-card ${index === 0 ? "md:row-span-2" : ""}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover ${index === 0 ? "h-full min-h-[540px]" : "h-[260px] md:h-[300px]"}`}
                />
                <div className="nn-gallery-copy">
                  <h3 className="font-serif text-3xl leading-tight text-white">{item.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/80">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nn-section">
        <div className="nn-shell">
          <SectionIntro
            kicker="How booking feels"
            title="Simple steps, clear menu shaping and less stress on the day."
            body="The homepage now emphasises clarity and trust rather than filler sections, with a lightweight process that fits both event clients and repeat meal customers."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {PROCESS.map((item) => (
              <article key={item.step} className="nn-process-card">
                <div className="text-[0.72rem] uppercase tracking-[0.34em] text-saffron-600">
                  {item.step}
                </div>
                <h3 className="mt-5 font-serif text-[2rem] leading-tight text-oxblood-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-foreground/72">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="nn-section nn-section-dark">
        <div className="nn-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="nn-kicker nn-kicker-inverse">Get in touch</div>
            <h2 className="mt-4 font-serif text-4xl leading-[0.98] tracking-tight text-white md:text-6xl">
              Tell Namaste Nima what you are planning.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
              For now, the strongest verified public contact point is Instagram, so the redesigned
              homepage makes that route prominent and uses the form as a clean enquiry starter.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="nn-button nn-button-light"
              >
                Open Instagram
              </a>
              <a href="#formats" className="nn-button nn-button-outline-light">
                Review services
              </a>
            </div>
          </div>

          <form className="nn-form-panel" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Service">
                <select className="nn-input" defaultValue="Party and event catering">
                  <option>Party and event catering</option>
                  <option>Private chef</option>
                  <option>Healthy meal plan</option>
                  <option>Vegan menu</option>
                  <option>Freezer curries</option>
                  <option>Cookery lessons</option>
                </select>
              </Field>
              <Field label="Guest count">
                <input className="nn-input" type="text" placeholder="e.g. 20 guests" />
              </Field>
              <Field label="Location">
                <input className="nn-input" type="text" placeholder="Town or postcode" />
              </Field>
              <Field label="Date">
                <input className="nn-input" type="date" />
              </Field>
              <Field label="What are you planning?" className="md:col-span-2">
                <textarea
                  className="nn-input min-h-36 resize-none"
                  placeholder="Tell us about the occasion, menu ideas, dietary needs and the kind of atmosphere you want."
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-white/12 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-white/60">
                Prefer a DM? The public profile is available at{" "}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-white/30 underline-offset-4"
                >
                  @namastenimauk
                </a>
                .
              </p>
              <button type="submit" className="nn-button nn-button-light">
                Draft enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-oxblood-950/78 backdrop-blur-xl">
      <div className="nn-shell flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoMark}
            alt="Namaste Nima logo"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <div className="font-serif text-2xl leading-none text-white">Namaste Nima</div>
            <div className="mt-1 text-[0.62rem] uppercase tracking-[0.32em] text-saffron-200/70">
              North East catering studio
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-[0.72rem] uppercase tracking-[0.28em] text-white/72 md:flex">
          <a href="#formats" className="transition-colors hover:text-saffron-200">
            Services
          </a>
          <a href="#menu" className="transition-colors hover:text-saffron-200">
            Menu
          </a>
          <a href="#gallery" className="transition-colors hover:text-saffron-200">
            Gallery
          </a>
          <a href="#contact" className="transition-colors hover:text-saffron-200">
            Enquiry
          </a>
        </nav>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-white/15 px-5 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-white transition-colors hover:border-saffron-200 hover:bg-saffron-200 hover:text-oxblood-950 md:inline-flex"
        >
          Visit Instagram
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,208,102,0.24),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,155,80,0.12),transparent_36%),linear-gradient(135deg,#4c0404_0%,#7d0808_44%,#320202_100%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] lg:block" />

      <div className="nn-shell relative grid gap-10 pb-18 pt-12 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="relative z-10 flex flex-col justify-center">
          <div className="nn-hero-pill">
            Public profile cues: North East · events · private chef · meal plans · vegan
          </div>
          <h1 className="mt-7 max-w-5xl font-serif text-[3.55rem] leading-[0.9] tracking-[-0.04em] text-white sm:text-[4.8rem] lg:text-[6.75rem]">
            Catering with colour, comfort and a proper sense of occasion.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
            A full homepage redesign for Namaste Nima, shaped around the public Instagram profile:
            based in the North East, offering party and event catering, private chef evenings,
            healthy meal plans, vegan menus, freezer curries, cookery lessons and a strong 5-star
            hygiene trust signal.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#formats" className="nn-button nn-button-light">
              Explore services
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="nn-button nn-button-outline-light"
            >
              Open Instagram
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              "Warm event food, not generic banquet copy",
              "Logo-led red and saffron design system",
              "Structured to drop in real post media later",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.35rem] border border-white/10 bg-white/7 px-4 py-4 text-sm leading-6 text-white/78 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -left-8 top-12 hidden h-28 w-28 rounded-full border border-saffron-200/25 lg:block" />
          <div className="nn-hero-card">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={heroCurry}
                alt="A rich curry dish with coriander and spices"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oxblood-950/82 via-oxblood-950/12 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.68rem] uppercase tracking-[0.3em] text-white/84 backdrop-blur">
                North East based
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5">
                <div className="max-w-sm rounded-[1.7rem] border border-white/12 bg-oxblood-950/56 px-5 py-4 text-sm leading-6 text-white/76 backdrop-blur-md">
                  Public profile description confirms: party and event catering, private chef,
                  healthy meal plan, vegan, freezer curries, cookery lessons and 5-star hygiene.
                </div>
                <img
                  src={logoMark}
                  alt="Namaste Nima logo mark"
                  className="hidden h-28 w-28 rounded-full border border-saffron-100/60 object-cover shadow-2xl md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalBar() {
  return (
    <section className="border-y border-oxblood-900/12 bg-sand-100/70">
      <div className="nn-shell">
        <div className="flex gap-4 overflow-x-auto py-5 text-[0.7rem] uppercase tracking-[0.28em] text-foreground/70 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PROFILE_SIGNALS.map((item) => (
            <span key={item} className="flex shrink-0 items-center gap-4">
              <span>{item}</span>
              <span className="text-saffron-600">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  kicker,
  title,
  body,
  inverse = false,
}: {
  kicker: string;
  title: string;
  body: string;
  inverse?: boolean;
}) {
  return (
    <div className="mb-12 grid gap-4 md:mb-14 md:grid-cols-[0.95fr_0.85fr] md:items-end">
      <div>
        <div className={inverse ? "nn-kicker nn-kicker-inverse" : "nn-kicker"}>{kicker}</div>
        <h2
          className={`mt-4 max-w-3xl font-serif text-4xl leading-[0.98] tracking-tight md:text-6xl ${
            inverse ? "text-white" : "text-oxblood-950"
          }`}
        >
          {title}
        </h2>
      </div>
      <p
        className={`max-w-xl text-base leading-8 ${inverse ? "text-white/72" : "text-foreground/72"}`}
      >
        {body}
      </p>
    </div>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.28em] text-white/58">
        {label}
      </span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-oxblood-900/10 bg-background py-8">
      <div className="nn-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logoMark}
            alt="Namaste Nima logo"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <div className="font-serif text-2xl leading-none text-oxblood-950">Namaste Nima</div>
            <div className="mt-1 text-[0.66rem] uppercase tracking-[0.28em] text-foreground/52">
              Homepage redesign rooted in public profile cues
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 text-[0.72rem] uppercase tracking-[0.28em] text-foreground/58">
          <a href="#formats" className="transition-colors hover:text-saffron-700">
            Services
          </a>
          <a href="#gallery" className="transition-colors hover:text-saffron-700">
            Gallery
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-saffron-700"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
