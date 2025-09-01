import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShopHub - Your Premium Shopping Destination',
  description: 'Discover amazing products at unbeatable prices. Shop the latest trends in fashion, electronics, home decor, and more with fast delivery and exceptional service.',
  keywords: 'ecommerce, online shopping, fashion, electronics, home decor, sports, beauty, books',
  authors: [{ name: 'ShopHub Team' }],
  openGraph: {
    title: 'ShopHub - Your Premium Shopping Destination',
    description: 'Discover amazing products at unbeatable prices. Shop the latest trends in fashion, electronics, home decor, and more.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
