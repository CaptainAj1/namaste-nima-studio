import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BookOpen,
  CookingPot,
  Menu,
  Facebook,
  Heart,
  Instagram,
  Leaf,
  X,
  Package,
  Salad,
  Star,
  Users,
} from "lucide-react";

import dishChana from "@/assets/dish-chana.jpg";
import dishChickenTikka from "@/assets/dish-chicken-tikka.jpg";
import dishDahl from "@/assets/dish-dahl.jpg";
import dishSamosa from "@/assets/dish-samosa.jpg";
import galleryHome from "@/assets/gallery-home.jpg";
import heroBackgroundFull from "@/assets/hero-background-full.png";
import heroCurry from "@/assets/hero-curry.jpg";
import logoMark from "@/assets/namaste-nima-logo-cropped.png";
import storyPhotoOne from "@/assets/story-photo-one.jpg";
import storyPhotoTwo from "@/assets/story-photo-two.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const INSTAGRAM_URL = "https://www.instagram.com/namastenimauk/";
const FACEBOOK_URL = "https://www.facebook.com/namastenimauk";

const NAV_ITEMS = [
  ["Home", "#top"],
  ["Services", "#services"],
  ["Menu", "#menu"],
  ["About", "#about"],
  ["Gallery", "#gallery"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
] as const;

const SERVICES = [
  {
    title: "Party & Event Catering",
    description: "Indian feasts for birthdays, family occasions, office gatherings and community celebrations.",
    icon: Users,
    tone: "olive",
  },
  {
    title: "Street Food & Pop-Ups",
    description: "Fresh onion bhaji, chaat, wraps and warming favourites for markets, festivals and pop-up events.",
    icon: CookingPot,
    tone: "rust",
  },
  {
    title: "Takeaway Feasts",
    description: "Home-style takeaway menus for cosy nights in, weekend treats and sharing platters for two or more.",
    icon: Salad,
    tone: "olive",
  },
  {
    title: "Vegan & Vegetarian Menus",
    description: "Flavour-packed plant-based curries, rice, snacks and sides that never feel like an afterthought.",
    icon: Leaf,
    tone: "rust",
  },
  {
    title: "Chai, Lassi & Breakfasts",
    description: "Masala chai, mango lassi, poha and breakfast wraps for nourishing morning and drinks-led events.",
    icon: Package,
    tone: "olive",
  },
  {
    title: "Cookery Workshops",
    description: "Hands-on Indian cooking sessions where guests learn recipes, techniques and the stories behind the flavours.",
    icon: BookOpen,
    tone: "rust",
  },
] as const;

const DISHES = [
  {
    title: "Chana Masala",
    description: "Hearty chickpeas cooked with onions, tomatoes and warm spices.",
    image: dishChana,
  },
  {
    title: "Paneer Butter Masala",
    description: "Soft paneer in a rich and creamy tomato cashew gravy.",
    image: heroCurry,
  },
  {
    title: "Hyderabadi Biryani",
    description: "Fragrant basmati rice layered with spices and herbs.",
    image: galleryHome,
  },
  {
    title: "Seekh Kebabs",
    description: "Juicy minced kebabs flavoured with spices and herbs.",
    image: dishChickenTikka,
  },
  {
    title: "Dal Tadka",
    description: "Comforting lentils finished with garlic, cumin and ghee.",
    image: dishDahl,
  },
  {
    title: "Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas.",
    image: dishSamosa,
  },
] as const;

const TESTIMONIALS = [
  {
    quote: "The food was incredible and all our guests are still talking about it.",
    name: "Priya & Arjun",
    label: "Wedding Catering",
  },
  {
    quote: "Perfect private dining experience. Every dish was bursting with flavour.",
    name: "Mel & James",
    label: "Private Dining",
  },
  {
    quote: "The meal plans are a lifesaver during the week. Delicious and healthy.",
    name: "Radhika",
    label: "Meal Plans",
  },
] as const;

function Home() {
  return (
    <main className="nn-page" id="top">
      <Header />
      <Hero />
      <ServicesSection />
      <MenuSection />
      <StorySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : previousOverflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`nn-header ${isScrolled ? "is-scrolled" : ""} ${isMenuOpen ? "is-menu-open" : ""}`}>
        <div className="nn-shell nn-header-inner">
          <a href="#top" className="nn-logo-link" aria-label="Namaste Nima home">
            <img src={logoMark} alt="Namaste Nima logo" className="nn-logo" />
          </a>

          <nav className="nn-nav" aria-label="Primary">
            {NAV_ITEMS.map(([label, href], index) => (
              <a key={label} href={href} className={`nn-nav-link ${index === 0 ? "is-active" : ""}`}>
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nn-cta nn-cta-solid">
            Enquire Now
          </a>

          <button
            type="button"
            className="nn-menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="nn-mobile-nav"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </header>

      <div
        className={`nn-mobile-menu ${isMenuOpen ? "is-open" : ""}`}
        id="nn-mobile-nav"
        onClick={closeMenu}
      >
        <nav className="nn-mobile-nav" aria-label="Mobile primary" onClick={(event) => event.stopPropagation()}>
          {NAV_ITEMS.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={`nn-mobile-nav-link ${index === 0 ? "is-active" : ""}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="nn-cta nn-cta-solid nn-mobile-menu-cta" onClick={closeMenu}>
            Enquire Now
          </a>
        </nav>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="nn-hero">
      <div className="nn-hero-shell">
        <img src={heroBackgroundFull} alt="" aria-hidden="true" className="nn-hero-background" />
        <div className="nn-shell">
          <div className="nn-hero-copy">
            <div className="nn-divider-label">Authentic. Fresh. Made to share</div>
            <h1 className="nn-hero-title">
              Indian food
              <br />
              made <em>with heart</em>
            </h1>
            <p className="nn-hero-text">
              From event catering and street food pop-ups to chai bars, takeaway feasts and
              cookery workshops, we bring warm, homemade Indian food to gatherings of every kind.
            </p>

            <div className="nn-hero-actions">
              <a href="#services" className="nn-cta nn-cta-solid">
                View Our Services
              </a>
              <a href="#contact" className="nn-cta nn-cta-outline">
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="nn-services" id="services">
      <div className="nn-shell">
        <SectionHeading
          label="What we do"
          title={
            <>
              Catering and experiences
              <br />
              designed <em>around you</em>
            </>
          }
        />

        <div className="nn-service-grid">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="nn-service-card">
                <div className={`nn-icon-disc tone-${service.tone}`}>
                  <Icon size={28} strokeWidth={1.75} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section className="nn-menu" id="menu">
      <div className="nn-shell">
        <SectionHeading
          label="Popular event favourites"
          light
          title={
            <>
              Food your guests will <em>remember</em>
            </>
          }
        />

        <div className="nn-menu-grid">
          {DISHES.map((dish) => (
            <article key={dish.title} className="nn-dish-card">
              <img src={dish.image} alt={dish.title} />
              <div className="nn-dish-body">
                <h3>{dish.title}</h3>
                <p>{dish.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="nn-menu-action">
          <a href="#contact" className="nn-cta nn-cta-light">
            Ask For A Menu
          </a>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="nn-story" id="about">
      <div className="nn-shell nn-story-grid">
        <div className="nn-story-collage">
          <div className="nn-story-photo nn-story-photo-large">
            <img src={storyPhotoOne} alt="Fresh snacks being dipped into chutney" />
          </div>
          <div className="nn-story-photo nn-story-photo-small">
            <img src={storyPhotoTwo} alt="Chaat plated for a shared table" />
          </div>
        </div>

        <div className="nn-story-copy">
          <SectionHeading
            label="Our story"
            align="left"
            title={
              <>
                Rooted in community.
                <br />
                Cooked with <em>care.</em>
              </>
            }
          />

          <p>
            Namaste Nima is built around the kind of Indian food people remember: fresh curries,
            street food favourites, chai, lassi and generous plates made for sharing.
          </p>
          <p>
            From beachside breakfasts and vegan festivals to family parties, community gardens and
            cosy takeaway nights, every menu is cooked with care, colour and a real love for
            bringing people together.
          </p>

          <div className="nn-story-values">
            <Value icon={Leaf} title="Freshly made" text="for every gathering" />
            <Value icon={Heart} title="Homemade flavour" text="rooted in tradition" />
            <Value icon={Users} title="Welcoming service" text="for community and celebrations" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="nn-reviews" id="reviews">
      <div className="nn-shell">
        <SectionHeading
          label="Kind words"
          title={
            <>
              What our <em>customers</em> say
            </>
          }
        />

        <div className="nn-review-grid">
          {TESTIMONIALS.map((item) => (
            <article key={item.name} className="nn-review-card">
              <div className="nn-stars" aria-label="Five star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" strokeWidth={1.8} />
                ))}
              </div>
              <p className="nn-review-quote">“{item.quote}”</p>
              <div className="nn-review-name">{item.name}</div>
              <div className="nn-review-label">{item.label}</div>
            </article>
          ))}
        </div>

        <div className="nn-review-dots" aria-hidden="true">
          <span className="is-active" />
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="nn-contact" id="contact">
      <div className="nn-shell nn-contact-grid">
        <div className="nn-contact-panel">
          <SectionHeading
            label="Enquire now"
            light
            align="left"
            title={
              <>
                Let&apos;s plan your
                <br />
                next <em>gathering</em>
              </>
            }
          />

          <ul className="nn-contact-list">
            <li>
              <Instagram size={16} />
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                @namastenimauk
              </a>
            </li>
            <li>
              <Facebook size={16} />
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                facebook.com/namastenimauk
              </a>
            </li>
          </ul>
        </div>

        <form className="nn-form-panel" onSubmit={(event) => event.preventDefault()}>
          <div className="nn-form-grid">
            <input className="nn-input" type="text" placeholder="Your Name" />
            <input className="nn-input" type="email" placeholder="Email Address" />
            <input className="nn-input" type="text" placeholder="Guest Count" />
            <input className="nn-input" type="text" placeholder="Event Date" />
            <input className="nn-input" type="text" placeholder="Venue or Location" />
            <select className="nn-input" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>Party & Event Catering</option>
              <option>Street Food & Pop-Ups</option>
              <option>Takeaway Feasts</option>
              <option>Vegan & Vegetarian Menus</option>
              <option>Chai, Lassi & Breakfasts</option>
              <option>Cookery Workshops</option>
            </select>
            <textarea
              className="nn-input nn-textarea"
              placeholder="Tell us about your event, menu ideas or workshop plans"
            />
          </div>

          <button type="submit" className="nn-submit">
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="nn-footer" id="gallery">
      <div className="nn-shell nn-footer-inner">
        <img src={logoMark} alt="Namaste Nima logo" className="nn-footer-logo" />
        <p>© 2026 Namaste Nima. All rights reserved.</p>
        <div className="nn-footer-links">
          <a href="#top">Privacy Policy</a>
          <a href="#top">Terms & Conditions</a>
        </div>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
}

function SectionHeading({
  label,
  title,
  light = false,
  align = "center",
}: {
  label: string;
  title: React.ReactNode;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={`nn-section-heading ${light ? "is-light" : ""} align-${align}`}>
      <div className="nn-divider-label">{label}</div>
      <h2 className="nn-section-title">{title}</h2>
    </div>
  );
}

function Value({ icon: Icon, title, text }: { icon: typeof Leaf; title: string; text: string }) {
  return (
    <div className="nn-value">
      <Icon size={24} strokeWidth={1.7} />
      <div className="nn-value-title">{title}</div>
      <div className="nn-value-text">{text}</div>
    </div>
  );
}
