import Image from 'next/image'
import HomepageHero from './_components/homepage-hero'
import HomeEnergySection from "./_components/homepage-description";
import HomepageBusinessSolar from './_components/homepage-business-solar'
import SigenergDescriotion from './_components/homepage-sigenergy-description';

export default function Home() {
  return (
    <main className="">
      <HomepageHero />
      <HomeEnergySection />
      <HomepageBusinessSolar />
      <SigenergDescriotion />
    </main>
  );
}
