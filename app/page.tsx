import Header from "./components/Header";
import Hero from "./components/Hero";
import TopOffersSection from "./components/topOffers/topOffersSection";
import TeamSection from "./components/teamCard/TeamSection";
import OpinionsSection from "./components/opinions/OpinionsSection";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="min-h-screen bg-neutral-100">
        <Hero/>
        <TopOffersSection/>
        <TeamSection/>
        <OpinionsSection/>
        <ContactSection/>
        <Footer/>
      </main>
    </>
  );
}
