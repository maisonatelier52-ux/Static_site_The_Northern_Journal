import Link from 'next/link';
import Image from 'next/image';
import { Clock, Shield, Globe, Users, Mail, ArrowUp } from 'lucide-react';
import { getArticles, formatDate } from '@/lib/data';

const ACCENT = '#a30d32';

// ── Reusable data ──────────────────────────────────────────────────────────

const footerLinkGroups = [
  {
    heading: 'Sections',
    links: [
      { label: 'Home', href: '/' },
      { label: 'News', href: '/news' },
      { label: 'Sports', href: '/sport' },
      { label: 'Business', href: '/business' },
      { label: 'Politics', href: '/politics' },
      { label: 'Life & Entertainment', href: '/life' },
      { label: 'Opinion', href: '/opinion' },
      { label: 'Investigations', href: '/investigations' },
    ],
  },
  {
    heading: 'Quick Links',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Advertise With Us', href: '/advertise' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Newsletters', href: '/newsletters' },
      { label: 'Sitemap', href: '/sitemap.xml' },
      { label: 'RSS Feed', href: '/feed.xml' },
    ],
  },
  {
    heading: 'Policies',
    links: [
      { label: 'Editorial Policy', href: '/policies/editorial' },
      { label: 'Corrections Policy', href: '/policies/corrections' },
      { label: 'Privacy Policy', href: '/policies/privacy' },
      { label: 'Terms & Conditions', href: '/policies/terms' },
      { label: 'Cookie Policy', href: '/policies/cookies' },
      { label: 'Ownership & Funding', href: '/policies/ownership' },
      { label: 'Right of Reply', href: '/policies/right-of-reply' },
      { label: 'Source Methodology', href: '/policies/methodology' },
    ],
  },
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'X', href: '#', icon: 'x' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'YouTube', href: '#', icon: 'youtube' },
];

const highlights = [
  {
    title: 'Live Updates',
    description: 'Real-time updates on developing stories',
    Icon: Clock,
  },
  {
    title: 'Trusted Journalism',
    description: 'Fact-checked reporting you can rely on',
    Icon: Shield,
  },
  {
    title: 'Global Perspective',
    description: 'Local stories with global impact',
    Icon: Globe,
  },
  {
    title: 'Community Focused',
    description: 'Amplifying voices that matter',
    Icon: Users,
  },
];

// lucide-react no longer ships brand/social marks, so these are drawn inline
// to match the stroke-icon style used everywhere else in the footer.
function SocialIcon({ icon, className }) {
  const paths = {
    facebook: 'M14 8.5h2.5V5.5H14c-1.9 0-3.5 1.6-3.5 3.5v2H8v3h2.5v6.5h3V13.5H16l.5-3h-3v-2c0-.6.4-2 1-2z',
    x: 'M6 5.5l12.5 13M18.5 5.5l-12.5 13',
    instagram: 'M7 4.5h10a2.5 2.5 0 012.5 2.5v10a2.5 2.5 0 01-2.5 2.5H7A2.5 2.5 0 014.5 17V7A2.5 2.5 0 017 4.5zM12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM16.6 7.4h.01',
    linkedin: 'M6.5 9.5v8M6.5 6.5h.01M11 17.5v-4.5a2.5 2.5 0 015 0v4.5M11 9.5v8',
    youtube: 'M20 8.3a2.7 2.7 0 00-1.9-1.9C16.4 6 12 6 12 6s-4.4 0-6.1.4A2.7 2.7 0 004 8.3 27.9 27.9 0 003.6 12 27.9 27.9 0 004 15.7a2.7 2.7 0 001.9 1.9C7.6 18 12 18 12 18s4.4 0 6.1-.4a2.7 2.7 0 001.9-1.9c.3-1.2.4-2.5.4-3.7 0-1.2-.1-2.5-.4-3.7zM10.2 14.6V9.4l4.6 2.6-4.6 2.6z',
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={paths[icon]} />
    </svg>
  );
}

export default function Footer() {
  const latestArticles = getArticles().slice(0, 4);

  return (
    <footer className="bg-[#070707] text-white">
      {/* 1. Newsletter banner */}
      <div className="bg-white text-[#101010]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-10">
          <div className="flex items-start gap-4 lg:max-w-[520px]">
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f2f2f2] sm:flex">
              <Mail className="h-5 w-5" style={{ color: ACCENT }} />
            </span>
            <div>
              <p className="text-[11px] font-bold tracking-[0.12em]" style={{ color: ACCENT }}>
                STAY INFORMED
              </p>
              <h2 className="mt-1 font-serif text-[26px] leading-tight sm:text-[30px]">
                The stories that shape our world.
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-[#666]">
                Get the latest headlines, in-depth analysis and exclusive updates delivered to your inbox.
              </p>
            </div>
          </div>

          <div className="hidden h-14 w-px bg-[#ddd] lg:block" />

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full min-w-0 border border-[#ddd] px-4 py-3 text-[13px] text-[#101010] outline-none placeholder:text-[#999] sm:w-72"
            />
            <button
              type="button"
              className="whitespace-nowrap px-6 py-3 text-[13px] font-semibold text-white"
              style={{ background: ACCENT }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main footer */}
      <div className="mx-auto max-w-[1200px] px-5 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block font-serif text-[22px] font-bold uppercase leading-[1.15]">
              The<br />Northern<br />Journal
            </Link>
            <span className="mt-2 block h-[3px] w-10" style={{ background: ACCENT }} />
            <p className="mt-3 text-[13px] leading-relaxed text-[#aaa]">
              Independent journalism. Trusted coverage from local communities to the global stage.
            </p>
            <div className="mt-4 flex gap-2">
              {socialLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#333] text-[#ccc] transition-colors hover:border-[#a30d32] hover:text-white"
                >
                  <SocialIcon icon={icon} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2-4: Sections, Quick Links, Policies */}
          {footerLinkGroups.map(({ heading, links }) => (
            <div key={heading} className="group/col">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.08em]">{heading}</h3>
              <span
                className="mt-2 block h-[2px] w-6 transition-all duration-300 group-hover/col:w-10"
                style={{ background: ACCENT }}
              />
              <ul className="mt-3 space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="inline-block text-[13px] text-[#aaa] underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-[#a30d32] hover:decoration-[#a30d32]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Latest Updates */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.08em]">Latest Updates</h3>
            <span className="mt-2 block h-[2px] w-6" style={{ background: ACCENT }} />
            <ul className="mt-3 space-y-3">
              {latestArticles.map((article) => (
                <li key={article.slug}>
                  <Link href={`/${article.category}/${article.slug}`} className="group flex gap-3">
                    <span className="relative block h-12 w-16 shrink-0 overflow-hidden bg-[#1a1a1a]">
                      <Image
                        src={article.image}
                        alt={article.imageAlt || article.title}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.06em]" style={{ color: ACCENT }}>
                        {article.categoryLabel}
                      </span>
                      <span className="mt-0.5 block text-[11px] leading-snug text-[#eee] transition-colors duration-200 group-hover:text-[#a30d32]">
                        {article.title}
                      </span>
                      {/* <span className="mt-0.5 block text-[11px] text-[#777]">{formatDate(article.date)}</span> */}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Editorial highlights row */}
      <div className="border-t border-[#333]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[#333]">
          {highlights.map(({ title, description, Icon }) => (
            <div key={title} className="flex items-start gap-3 lg:px-6 lg:first:pl-0">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
                style={{ borderColor: ACCENT, color: ACCENT }}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.06em]">{title}</p>
                <p className="mt-0.5 text-[12px] leading-snug text-[#aaa]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Bottom copyright bar */}
      <div className="border-t border-[#333]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-2 px-5 py-4 text-[11px] text-[#777] sm:flex-row sm:justify-between sm:gap-4">
          <p>© 2026 The Northern Journal. All rights reserved.</p>
          <p className="hidden sm:block sm:border-l sm:border-[#333] sm:pl-4">Designed for clarity. Built for readers.</p>
          <a href="#" className="flex items-center gap-1 text-[#aaa] transition-colors hover:text-white">
            Back to top
            <ArrowUp className="h-3.5 w-3.5" style={{ color: ACCENT }} />
          </a>
        </div>
      </div>
    </footer>
  );
}