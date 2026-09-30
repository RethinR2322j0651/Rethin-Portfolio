import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import InternshipSection from './components/InternshipSection';
import CertificationSection from './components/CertificationSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <main
      className="relative w-full"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <InternshipSection />
      <CertificationSection />
      <ContactSection />
    </main>
  );
};

export default App;
