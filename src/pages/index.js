import { FamiliesLoveSec } from "@/components/familiesLoveOurOnlineSec/FamiliesLoveSec";
import { KeyStagesText } from "@/components/keyStages/keyStagesText";
import HeroSection from "@/components/mainPage/heroSection/HeroSection";
import { Rating } from "@/components/mainPage/rating/Rating";
import { SchoolCard } from "@/components/schoolCard/SchoolCard";
import { SchoolTrust } from "@/components/schoolTrust/SchoolTrust";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Rating />
      <KeyStagesText />
      <SchoolCard />
      <FamiliesLoveSec />
      <SchoolTrust />
    </div>
  );
}
