import { Navbar, Hero, Categories, Testimonials, WhatsAppFAB, Footer } from '@/components';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
