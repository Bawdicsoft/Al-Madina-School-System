import { FamiliesLoveSec } from "@/components/familiesLoveOurOnlineSec/FamiliesLoveSec";
import { KeyStagesText } from "@/components/keyStages/keyStagesText";
import HeroSection from "@/components/mainPage/heroSection/HeroSection";
import { HowWeTeach } from "@/components/mainPage/howWeTeach/HowWeTeach";
import MapSection from "@/components/mainPage/map/MapSection";
import { Rating } from "@/components/mainPage/rating/Rating";
import { SchoolExperience } from "@/components/mainPage/schooExperience/SchoolExperience";
import { SchoolCategories } from "@/components/mainPage/schoolCategories/SchoolCategories";
import { SchoolInsights } from "@/components/mainPage/schoolInsight/SchoolInsights";
import { StudentLifeImages } from "@/components/mainPage/studentLifeImages/StudentLifeImages";
import { StudentSupport } from "@/components/mainPage/studentSupport/StudentSupport";
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
      <SchoolExperience />
      <StudentLifeImages />
      <HowWeTeach />
      <StudentSupport />
      <SchoolCategories />
      <MapSection />
      <SchoolInsights />
    </div>
  );
}
