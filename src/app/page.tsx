import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContentSections from '@/components/ContentSections';
import BottomSections from '@/components/BottomSections';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ContentSections />
      <BottomSections />
      <Footer />
    </main>
  );
}