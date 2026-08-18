import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://example.com'),
  title: { default: 'The Northern Journal | Independent local news', template: '%s | The Northern Journal' },
  description: 'Trusted independent journalism covering news, politics, sport, business, culture and local life.',
  openGraph: { title: 'The Northern Journal', description: 'Independent. Local. Essential.', type: 'website', locale: 'en_GB' },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 bg-white text-[15px] leading-[1.4] text-[#101010] font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
