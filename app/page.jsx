import HomePage from '@/components/home/HomePage';
import { authors, getArticles } from '@/lib/data';

export default function Page() {
  return <HomePage articles={getArticles()} authors={authors} />;
}
