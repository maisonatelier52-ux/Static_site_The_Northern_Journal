'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { categoryList } from '@/lib/data';

const ACCENT = '#a30d32';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [today, setToday] = useState('');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const close = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    setToday(
      new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    );
  }, []);

  const socialIcons = ['f', '𝕏', 'in', '▶'];

  return (
    <>
      <header className="relative z-50 bg-white">
        <div className="mx-auto grid h-[77px] sm:h-[114px] w-[min(1120px,calc(100%-20px))] sm:w-[min(1120px,calc(100%-40px))] grid-cols-[42px_1fr_42px] sm:grid-cols-[1fr_auto_1fr] items-center border-b border-[#ddd]">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                className="flex items-center gap-2 border-0 bg-transparent p-0 sm:p-1.5 pl-0 cursor-pointer text-[#111]"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
              >
                <span className="grid w-4 gap-[3px]" aria-hidden="true">
                  <i className="block h-px bg-[#111]" />
                  <i className="block h-px bg-[#111]" />
                  <i className="block h-px bg-[#111]" />
                </span>
                <span className="hidden sm:inline text-[12px] uppercase tracking-[0.1em]">Menu</span>
              </button>
              <button className="hidden sm:grid place-items-center border-0 bg-transparent p-1.5 cursor-pointer text-[23px] leading-none text-[#111]" aria-label="Search">⌕</button>
              <div className="hidden md:flex ml-3 gap-1" aria-label="Social media">
                {socialIcons.map((icon) => (
                  <a key={icon} href="#" className="grid h-[25px] w-[25px] place-items-center border border-[#aaa] text-[10px]">{icon}</a>
                ))}
              </div>
            </div>

            <Link href="/" aria-label="The Northern Journal home" className="min-w-0 sm:min-w-[360px] text-center leading-none">
              <strong className="block whitespace-nowrap font-serif text-[17px] sm:text-[34px] tracking-[-0.3px] sm:tracking-[-0.5px]">THE NORTHERN JOURNAL</strong>
              <span className="mt-1 inline-block px-[10px] sm:px-[23px] py-0 text-[6px] sm:text-[8px] leading-[10px] sm:leading-[14px] tracking-[0.14em] text-white" style={{ background: ACCENT }}>
                INDEPENDENT LOCAL REPORTING
              </span>
            </Link>

            <div className="flex items-center justify-end gap-0 sm:gap-7">
              <span className="hidden lg:block text-right text-[12px] font-serif italic text-[#555]">
                {today}
              </span>
            </div>
        </div>
        <nav
          aria-label="Primary navigation"
          className="mx-auto hidden lg:flex w-full sm:w-[min(1120px,calc(100%-40px))] h-8 sm:h-[42px] items-center justify-center gap-5 sm:gap-8 overflow-x-auto whitespace-nowrap border-b border-[#111] px-2.5 sm:px-0 font-serif text-[12px] sm:text-[15px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <Link href="/" className="hover:text-[#a30d32]">Home</Link>
          {categoryList.map(({ slug, label }) => (
            <Link key={slug} href={`/${slug}`} className="hover:text-[#a30d32]">{label}</Link>
          ))}
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[80] bg-black/48 transition-opacity duration-200 ${open ? 'opacity-100 visible' : 'invisible opacity-0'}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`fixed left-0 top-0 z-[90] flex h-dvh w-[min(360px,92vw)] flex-col border-t-[6px] bg-[#0b0b0b] px-7 py-6 text-white transition-transform duration-[280ms] ease-out ${open ? 'translate-x-0 shadow-[18px_0_45px_rgba(0,0,0,0.28)]' : '-translate-x-[101%]'}`}
        style={{ borderTopColor: ACCENT }}
        aria-hidden={!open}
        aria-label="Main menu"
      >
        <div className="flex items-center justify-between border-b border-[#555] pb-[17px] font-serif font-extrabold">
          <span>THE NORTHERN JOURNAL</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="border-0 bg-transparent text-[35px] text-white cursor-pointer">×</button>
        </div>
        <nav className="mt-3.5 grid">
          <Link href="/" onClick={() => setOpen(false)} className="flex min-h-[51px] items-center justify-between gap-2 border-b border-[#333] font-serif text-lg hover:text-[#e96889]">
            ⌂ <span className="flex-1">Home</span>
          </Link>
          {categoryList.map(({ slug, label }) => (
            <Link key={slug} href={`/${slug}`} onClick={() => setOpen(false)} className="flex min-h-[51px] items-center justify-between border-b border-[#333] font-serif text-lg hover:text-[#e96889]">
              <span>{label}</span><b className="text-[28px] font-normal">›</b>
            </Link>
          ))}
          <Link href="#newsletter" onClick={() => setOpen(false)} className="flex min-h-[51px] items-center justify-between border-b border-[#333] font-serif text-lg hover:text-[#e96889]"><span>Newsletters</span></Link>
        </nav>

        <div className="mt-auto flex flex-col gap-3 pt-6">
          <div className="flex gap-2" aria-label="Social media">
            {socialIcons.map((icon) => (
              <a key={icon} href="#" className="grid h-[30px] w-[30px] place-items-center border border-[#555] text-[12px] text-white hover:border-[#e96889] hover:text-[#e96889]">
                {icon}
              </a>
            ))}
          </div>
          <p className="font-serif italic text-[#aaa]">Independent. Local. Essential.</p>
        </div>
      </aside>
    </>
  );
}