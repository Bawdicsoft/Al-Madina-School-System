import { FamiliesLoveSec } from "@/components/familiesLoveOurOnlineSec/FamiliesLoveSec";
import { KeyStagesText } from "@/components/keyStages/keyStagesText";
import { GallerySection } from "@/components/mainPage/gallery/GallerySection";
import HeroSection from "@/components/mainPage/heroSection/HeroSection";
import { HowWeTeach } from "@/components/mainPage/howWeTeach/HowWeTeach";
import MapSection from "@/components/mainPage/map/MapSection";
import { OnlineSchoolFaqs } from "@/components/mainPage/onlineSchoolFaqs/OnlineSchoolFaqs";
import { Rating } from "@/components/mainPage/rating/Rating";
import { SchoolExperience } from "@/components/mainPage/schooExperience/SchoolExperience";
import { SchoolCategories } from "@/components/mainPage/schoolCategories/SchoolCategories";
import { SchoolInsights } from "@/components/mainPage/schoolInsight/SchoolInsights";
import { SignUpForOurNext } from "@/components/mainPage/signUpFornextEvent/SignUpForOurNext";
import { StudentLifeImages } from "@/components/mainPage/studentLifeImages/StudentLifeImages";
import { StudentSupport } from "@/components/mainPage/studentSupport/StudentSupport";
import { SchoolCard } from "@/components/schoolCard/SchoolCard";
import { SchoolTrust } from "@/components/schoolTrust/SchoolTrust";

export default function Home() {
  return (
    <div className="">
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
      <GallerySection />
      <OnlineSchoolFaqs />
      <SignUpForOurNext />
    </div>
  );
}
