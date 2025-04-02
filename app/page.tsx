import AboutUs from "@/components/home/AboutUs";
import HeroSection from "@/components/home/HeroSection";
import  OurJourney  from "@/components/home/OurJourney";
import Services from "@/components/home/Services";
import WhatWeDo from "@/components/home/WhatWeDo";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutUs />
      <Services />
       <WhatWeDo />
     <OurJourney />
    </Layout>
  );
}
