import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { VolunteerSection } from './components/VolunteerSection';
import { ElevatorPitchSection } from './components/ElevatorPitchSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white" dir="ltr">
      <Header />
      <HeroSection />
      <PortfolioSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <VolunteerSection />
      <ElevatorPitchSection />
      <ContactSection />
      <Footer />
    </div>
  );
}