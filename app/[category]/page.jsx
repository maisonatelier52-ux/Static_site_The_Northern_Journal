import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import StoryCard from '@/components/ui/StoryCard';
import SectionHeading from '@/components/ui/SectionHeading';
import Newsletter from '@/components/home/Newsletter';
import JsonLd from '@/components/JsonLd';
import { articles, getCategoryArticles } from '@/lib/data';

const ACCENT = '#a30d32';

const categoryNames = {
  news: 'News',
  opinion: 'Opinion',
  sport: 'Sport',
  business: 'Business',
  life: 'Life & Entertainment',
  world: 'World',
  'u.s': 'U.S.',
  finance: 'Finance',
};
const categoryIntros = {
  news: 'Reporting that keeps you close to the decisions, people and places shaping our communities.',
  opinion: 'Sharp thinking, considered arguments and distinctive voices from across the island.',
  sport: 'The scores, stories and human moments behind every contest.',
  business: 'Clear reporting on enterprise, work and the changing economy.',
  life: 'Culture, food, music and ideas for a richer everyday life.',
  world: 'Global affairs, diplomacy and the events shaping international headlines.',
  'u.s': 'National reporting on politics, policy and everyday life across the United States.',
  finance: 'Markets, the Federal Reserve and the economic forces moving Wall Street.',
};
const categoryTones = {
  news: 'black',
  opinion: 'red',
  sport: 'green',
  business: 'blue',
  life: 'orange',
  world: 'blue',
  'u.s': 'red',
  finance: 'green',
};

export function generateStaticParams() { return Object.keys(categoryNames).map((category) => ({ category })); }

export async function generateMetadata({ params }) {
  const { category } = await params;
  if (!categoryNames[category]) return {};
  return { title: categoryNames[category], description: categoryIntros[category] };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const items = getCategoryArticles(category);
  if (!categoryNames[category] || !items.length) notFound();

  const [lead, ...rest] = items;
  const alsoIn = rest.slice(0, 4);
  const fallback = articles.filter((article) => article.category !== category).slice(0, 4);
  const tone = categoryTones[category] || 'black';

  return (
    <main className="pb-16">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: categoryNames[category], description: categoryIntros[category] }} />

      {/* Masthead */}
      <header className="border-b border-[#111] bg-white pb-6 pt-6">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
          <nav aria-label="Breadcrumb" className="mb-2 text-[11px]" style={{ color: ACCENT }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-1.5 text-[#999]">/</span>
            <span className="text-[#666]">{categoryNames[category]}</span>
          </nav>
          <span className="inline-block bg-[#111] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-white">Section</span>
          <h1 className="m-0 mt-2 font-serif text-[40px] font-extrabold leading-[1.02] sm:text-[56px]">{categoryNames[category]}</h1>
          <p className="mt-2 max-w-[620px] font-serif text-[15px] leading-[1.5] text-[#555] sm:text-base">{categoryIntros[category]}</p>
        </div>
      </header>

      <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
        {/* Lead split: top story + rest of the section */}
        <section className="mt-6 border-b border-[#111] pb-4" aria-label={`Top ${categoryNames[category]} story`}>
          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-8">
            <div>
              <StoryCard article={lead} variant="sectionLead" priority />
            </div>
            {alsoIn.length > 0 && (
              <aside className="border-t border-[#ddd] pt-3 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0">
                <span className="mb-1 inline-block bg-[#111] px-2 text-[11px] font-extrabold uppercase leading-6 tracking-[0.05em] text-white">Also in {categoryNames[category]}</span>
                {alsoIn.map((article) => <StoryCard key={article.id} article={article} variant="line" />)}
              </aside>
            )}
          </div>
        </section>

        {/* Dummy ad slot */}
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

        {/* Full index of the section */}
        <section id="more-stories" className="mt-2 scroll-mt-6">
          <SectionHeading title={`Every ${categoryNames[category]} story`} tone={tone} />
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((article) => (
              <StoryCard key={`index-${article.id}`} article={article} variant="tile" />
            ))}
          </div>
        </section>

        <Newsletter />

        {fallback.length > 0 && (
          <section>
            <SectionHeading title="From other desks" href="/" tone="black" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {fallback.map((article) => (
                <StoryCard key={`more-${article.id}`} article={article} variant="tile" />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}