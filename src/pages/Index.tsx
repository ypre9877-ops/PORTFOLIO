import { ProfileSidebar } from "@/components/ProfileSidebar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <ProfileSidebar />
      
      <main className="ml-80 flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Navigation />
    </div>
  );
};

export default Index;