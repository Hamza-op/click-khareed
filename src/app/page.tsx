import {
  Navbar,
  Hero,
  Categories,
  FeaturedProducts,
  AboutUs,
  WhyChooseUs,
  Process,
  Testimonials,
  Newsletter,
  WhatsAppFAB,
  Footer
} from '@/components';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <AboutUs />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
