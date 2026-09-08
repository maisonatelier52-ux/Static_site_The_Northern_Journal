import Image from 'next/image';
import Featured from './Featured';
import LatestVideo from './LatestVideo';
import LeadNews from './LeadNews';
import Newsletter from './Newsletter';
import OpinionStrip from './OpinionStrip';
import Sponsored from './Sponsored';
import TopicSection from './TopicSection';

const ACCENT = '#a30d32';

export default function HomePage({ articles, authors }) {
  const byCategory = (category) => articles.filter((article) => article.category === category);
  return (
    <main className="mx-auto w-[min(1120px,calc(100%-40px))] pt-3 sm:pt-4">
      {/* <div className="mb-4 grid grid-cols-[auto_1fr] items-center gap-0 border border-[#d8d8d4] sm:grid-cols-[auto_1fr_auto]">
        <span className="grid h-[34px] place-items-center self-stretch px-3.5 text-[10px] font-extrabold uppercase text-white sm:h-[38px]" style={{ background: ACCENT }}>Live</span>
        <p className="mx-3.5 truncate font-serif text-[11px] sm:text-sm">Independent reporting from across the region — updated throughout the day</p>
        <a href="#latest" className="mr-3.5 hidden text-[11px] font-bold sm:inline" style={{ color: ACCENT }}>Follow updates →</a>
      </div> */}

      <LeadNews articles={articles.slice(0, 10)} />
      <LatestVideo articles={articles.filter((article) => article.video).slice(0, 4)} />

      {/* <div className="my-6 grid h-[80px] place-items-start justify-center pt-3 text-center text-[8px] uppercase tracking-[0.12em] text-[#aaa] sm:h-[145px]" aria-label="Advertisement space">
        <span>Advertisement</span>
      </div> */}
       <div className="my-8 flex justify-center">
                <div className="relative w-full max-w-[728px]">
                  <span className="absolute left-2 top-2 z-10 bg-white/90 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#999]">
                    Advertisement
                  </span>
                  <div className="relative h-[120px] w-full overflow-hidden border border-[#e2e2df] bg-[#f2f2ef] sm:h-[90px]">
                    <Image
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=60"
                      alt="Advertisement"
                      fill
                      sizes="728px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

      <TopicSection title="Latest" tone="black" articles={articles.slice(1, 7)} />
      <OpinionStrip authors={authors} />
      <TopicSection title="World" slug="world" tone="blue" articles={byCategory('world')} layout="split" />
      <Featured articles={articles.filter((article) => article.featured).slice(0, 4)} />
      <TopicSection title="Politics" slug="politics" tone="red" articles={byCategory('politics')} />
      <TopicSection title="Business" slug="business" tone="blue" articles={byCategory('business')} />
      <TopicSection title="Health" slug="health" tone="green" articles={byCategory('health')} layout="splitsecond" />
      <TopicSection title="Technology" slug="technology" tone="blue" articles={byCategory('technology')} />
      <TopicSection title="U.S." slug="us" tone="red" articles={byCategory('us')} />
      <TopicSection title="Finance" slug="finance" tone="green" articles={byCategory('finance')} />
      <TopicSection title="Investigation" slug="investigation" tone="black" articles={byCategory('investigation')} layout="split" />
      <Newsletter />
      <Sponsored articles={articles.slice(4, 8)} />
    </main>
  );
}