import Link from 'next/link';

const ACCENT = '#a30d32';

export default function Footer() {
  return (
    <footer className="bg-[#070707] pt-7 text-white">
      <Link href="/" className="mx-auto block w-fit text-center font-serif text-[28px] font-extrabold">
        THE NORTHERN JOURNAL
        <span className="mt-1 block px-2 py-0.5 text-[8px] tracking-[0.12em]" style={{ background: ACCENT }}>
          INDEPENDENT LOCAL REPORTING
        </span>
      </Link>

      <div className="my-3 mb-6 flex justify-center gap-1">
        {['f', '𝕏', 'in', '▶', '◎'].map((icon) => (
          <a key={icon} href="#" className="grid h-[27px] w-[27px] place-items-center border border-[#555] text-[11px]">{icon}</a>
        ))}
      </div>

      <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] grid-cols-1 gap-6 border-t border-[#333] py-7 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_2.1fr] lg:gap-9">
        <div>
          <h3 className="mb-2.5 text-[11px] font-bold uppercase">Menu</h3>
          <Link href="/news" className="my-1.5 block text-[12px] text-[#bbb]">Latest</Link>
          <Link href="/news" className="my-1.5 block text-[12px] text-[#bbb]">World</Link>
          <Link href="/business" className="my-1.5 block text-[12px] text-[#bbb]">Business</Link>
          <Link href="/sport" className="my-1.5 block text-[12px] text-[#bbb]">Sport</Link>
          <Link href="/life" className="my-1.5 block text-[12px] text-[#bbb]">Lifestyle</Link>
        </div>
        <div>
          <h3 className="mb-2.5 text-[11px] font-bold uppercase">Multimedia</h3>
          <Link href="#latest-video" className="my-1.5 block text-[12px] text-[#bbb]">Video</Link>
          <Link href="#" className="my-1.5 block text-[12px] text-[#bbb]">Photos</Link>
          <Link href="#" className="my-1.5 block text-[12px] text-[#bbb]">Podcasts</Link>
        </div>
        <div>
          <h3 className="mb-2.5 text-[11px] font-bold uppercase">About</h3>
          <Link href="#" className="my-1.5 block text-[12px] text-[#bbb]">About us</Link>
          <Link href="#" className="my-1.5 block text-[12px] text-[#bbb]">Contact us</Link>
          <Link href="#" className="my-1.5 block text-[12px] text-[#bbb]">Advertising</Link>
          <Link href="#" className="my-1.5 block text-[12px] text-[#bbb]">Standards</Link>
        </div>
        <div>
          <h3 className="mb-2.5 text-[11px] font-bold uppercase">Follow</h3>
          <Link href="#" className="my-1.5 block text-[12px] text-[#bbb]">News alerts</Link>
          <Link href="#newsletter" className="my-1.5 block text-[12px] text-[#bbb]">Daily briefing</Link>
          <Link href="#" className="my-1.5 block text-[12px] text-[#bbb]">Print edition</Link>
        </div>
        <div className="col-span-full border-t border-[#333] pt-4 sm:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
          <p className="font-serif text-sm text-[#bbb]">
            We believe high-quality journalism should be available to everyone. Our newsroom explains what matters, challenges power and keeps communities connected.
          </p>
          <a href="#newsletter" className="mt-3 inline-block cursor-pointer border-0 px-4 py-2.5 text-[12px] font-bold text-white" style={{ background: ACCENT }}>
            Support independent news
          </a>
        </div>
      </div>
      <div className="mx-auto w-[min(1120px,calc(100%-40px))] border-t border-[#333] py-3.5 text-center text-[10px] text-[#777]">
        © 2026 The Northern Journal. Demo editorial project. All content is fictional.
      </div>
    </footer>
  );
}