import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Eye,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";

const WA_LINK = "https://wa.me/917300291188";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a
          href="#services"
          className="flex items-center gap-2"
          data-ocid="nav.link"
        >
          <img
            src="/assets/uploads/Screenshot_20260317-102954-2-1.png"
            alt="Zenvora Media"
            className="h-10 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="nav.services.link"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="nav.pricing.link"
          >
            Pricing
          </a>
          <a
            href="#why-us"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="nav.whyus.link"
          >
            Why Us
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="nav.contact.link"
          >
            Contact
          </a>
        </nav>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-navy-dark transition-colors"
          data-ocid="nav.primary_button"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="services" className="bg-secondary py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-navy mb-4 bg-white px-3 py-1 rounded-full border border-border">
              Chittorgarh's #1 Digital Agency
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-charcoal leading-tight mb-6">
              We Help Chittorgarh's Top Businesses{" "}
              <span className="text-navy">Dominate the Local Market.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              High-Impact Reels and Google Maps SEO that brings customers
              directly to your doorstep.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold px-7 py-4 rounded-lg hover:bg-navy-dark transition-colors text-base shadow-card"
              data-ocid="hero.primary_button"
            >
              <MessageCircle className="h-5 w-5" />
              Claim Your 20% Discount via WhatsApp
            </a>
          </div>

          {/* Right: Stats card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-navy opacity-10 blur-2xl scale-110" />
              <div className="relative bg-white rounded-2xl shadow-card border border-border p-8 w-full max-w-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-navy rounded-xl p-2">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Standard Plan Results
                    </div>
                    <div className="text-sm font-semibold text-charcoal">
                      Monthly Average
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <StatRow
                    icon={<Eye className="h-5 w-5 text-navy" />}
                    label="Local Reel Views"
                    value="10,000+"
                  />
                  <StatRow
                    icon={<Phone className="h-5 w-5 text-navy" />}
                    label="Phone Inquiries"
                    value="50+"
                  />
                  <StatRow
                    icon={<MapPin className="h-5 w-5 text-navy" />}
                    label="Google Maps Rank"
                    value="#1"
                  />
                </div>
                <div className="mt-6 pt-5 border-t border-border text-xs text-muted-foreground text-center">
                  Results from active clients in Chittorgarh
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        {icon}
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <span className="font-extrabold text-charcoal text-lg">{value}</span>
    </div>
  );
}

function RoiSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-3">
            The Growth Projection
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See the real difference Zenvora Media makes for local businesses.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-stretch max-w-4xl mx-auto">
          {/* Before */}
          <div className="flex-1 bg-secondary rounded-2xl md:rounded-r-none md:rounded-l-2xl p-8 border border-border">
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Before Zenvora
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-6">
              Average Shop Today
            </h3>
            <ul className="space-y-3">
              {[
                "Low online visibility",
                "2–3 random walk-ins/week from Google",
                "Zero social media reach",
                "Invisible on Google Maps",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-4 md:py-0">
            <div className="hidden md:flex flex-col items-center justify-center bg-navy h-full px-5">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <div className="flex md:hidden">
              <div className="bg-navy rounded-full p-3">
                <ArrowRight className="h-6 w-6 text-white rotate-90" />
              </div>
            </div>
          </div>

          {/* After */}
          <div className="flex-1 bg-navy rounded-2xl md:rounded-l-none md:rounded-r-2xl p-8">
            <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
              After Zenvora
            </div>
            <h3 className="text-xl font-bold text-white mb-6">
              Standard Plan Results
            </h3>
            <ul className="space-y-3">
              {[
                "10,000+ Local Reel Views/month",
                "40–50 Monthly Phone Inquiries",
                "#1 Ranking on Google Maps",
                "Consistent Brand Presence",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-whatsapp flex-shrink-0" />
                  <span className="text-sm text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center mt-10 text-lg font-bold text-charcoal">
          Visible Growth. Real Results. Local Impact.
        </p>
      </div>
    </section>
  );
}

interface PricingPlan {
  name: string;
  badge?: string;
  period: string;
  priceOriginal?: string;
  pricePromo: string;
  services: string[];
  results: string[];
  cta: string;
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "The 'Trust' Demo",
    period: "/ 7 Days",
    pricePromo: "₹1,000",
    services: [
      "2 Cinematic Reels",
      "GMB Optimization",
      "1 WhatsApp Promo Graphic",
    ],
    results: ["1,500+ Local Views", "Instant Profile Professionalism"],
    cta: "Start with Trust",
  },
  {
    name: "The 'Local Star'",
    period: "/ month",
    priceOriginal: "₹5,000",
    pricePromo: "₹4,000",
    services: [
      "4 High-Quality Reels",
      "6 Static Brand Posts",
      "GMB Review Management",
    ],
    results: [
      "5,000–8,000 Local Reel Views",
      "10–15 New Customer Inquiries/month",
    ],
    cta: "Become a Local Star",
  },
  {
    name: "The 'Market Leader'",
    badge: "Most Popular",
    period: "/ month",
    priceOriginal: "₹10,000",
    pricePromo: "₹8,000",
    services: [
      "8 Cinematic Reels",
      "10 Graphics",
      "Advanced GMB SEO",
      "Meta Ads Strategy",
    ],
    results: [
      "20,000+ Views",
      "30–40 Targeted Walk-ins/Calls",
      "#1 Search Ranking",
    ],
    cta: "Lead the Market",
    popular: true,
  },
  {
    name: "The 'Empire' Plan",
    period: "/ month",
    priceOriginal: "₹15,000",
    pricePromo: "₹12,000",
    services: [
      "12 Cinematic Reels",
      "15 Premium Graphics",
      "Full Lead-Gen Ads",
      "VIP Support",
    ],
    results: [
      "40,000+ Viral Reach",
      "60+ Direct Business Leads/Month",
      "Complete Market Monopoly",
    ],
    cta: "Build Your Empire",
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-3">
            Choose Your Growth Plan
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            First-month promotional pricing available. Lock in your rate today.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  return (
    <div
      className={`relative flex flex-col rounded-xl overflow-hidden border shadow-card ${
        plan.popular ? "border-navy" : "border-border"
      } bg-white`}
      data-ocid={`pricing.item.${index}`}
    >
      {plan.badge && (
        <div className="bg-navy text-white text-xs font-bold uppercase tracking-widest text-center py-2 px-4">
          {plan.badge}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-base font-bold text-charcoal mb-3">{plan.name}</h3>
        <div className="mb-5">
          {plan.priceOriginal && (
            <span className="text-sm line-through text-muted-foreground mr-2">
              {plan.priceOriginal}
            </span>
          )}
          <span className="text-2xl font-extrabold text-navy">
            {plan.pricePromo}
          </span>
          <span className="text-sm text-muted-foreground ml-1">
            {plan.period}
          </span>
          {plan.priceOriginal && (
            <div className="text-xs text-whatsapp font-semibold mt-1">
              Promo: First month only
            </div>
          )}
        </div>

        <div className="mb-4">
          <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
            Services
          </div>
          <ul className="space-y-1.5">
            {plan.services.map((s) => (
              <li
                key={s}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-navy mt-0.5 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 flex-1">
          <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
            Expected Results
          </div>
          <ul className="space-y-1.5">
            {plan.results.map((r) => (
              <li
                key={r}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <Star className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center font-bold text-sm py-3 rounded-lg transition-colors ${
            plan.popular
              ? "bg-navy text-white hover:bg-navy-dark"
              : "border border-navy text-navy hover:bg-navy hover:text-white"
          }`}
          data-ocid={`pricing.primary_button.${index}`}
        >
          {plan.cta}
        </a>
      </div>
    </div>
  );
}

function WhyUsSection() {
  const features = [
    {
      icon: <MapPin className="h-7 w-7 text-navy" />,
      title: "Local Market Experts",
      desc: "We live and work in Chittorgarh. We know your customers, your lanes, and your competition.",
    },
    {
      icon: <Video className="h-7 w-7 text-navy" />,
      title: "On-Location Shoots",
      desc: "We come to your shop. Real visuals, real stories. No generic stock footage.",
    },
    {
      icon: <TrendingUp className="h-7 w-7 text-navy" />,
      title: "Proven ROI",
      desc: "Every rupee you spend is tracked. You see the views, the calls, the walk-ins.",
    },
    {
      icon: <Users className="h-7 w-7 text-navy" />,
      title: "Full-Service Growth",
      desc: "From content to SEO to ads — one team handles everything.",
    },
  ];

  return (
    <section id="why-us" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-3">
            Why Zenvora Media?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We are not an outside agency. We are your local growth partner.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="flex flex-col items-start"
              data-ocid={`whyus.item.${i + 1}`}
            >
              <div className="bg-secondary rounded-xl p-3 mb-4">{f.icon}</div>
              <h3 className="text-base font-bold text-charcoal mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="bg-navy py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
          Ready to Grow Your Business? <br className="hidden sm:block" />{" "}
          Message Us Now.
        </h2>
        <p className="text-white/70 mb-8 text-base">
          Join Chittorgarh's growing businesses already winning online.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp text-white font-bold px-8 py-4 rounded-full text-base hover:opacity-90 transition-opacity shadow-card"
          data-ocid="cta.primary_button"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp +91 7300291188
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-charcoal py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/assets/uploads/Screenshot_20260317-102954-2-1.png"
            alt="Zenvora Media"
            className="h-8 w-auto object-contain brightness-0 invert"
          />
          <span className="text-white/60 text-sm">
            © {year} Zenvora Media. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-whatsapp text-sm font-semibold hover:opacity-80 transition-opacity"
            data-ocid="footer.link"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
          <a
            href={caffeineLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-xs hover:text-white/60 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <main>
        <HeroSection />
        <RoiSection />
        <PricingSection />
        <WhyUsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
