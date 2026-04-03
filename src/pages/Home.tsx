import { HeroSection } from "../components/sections/HeroSection";
import { ResultsSection } from "../components/sections/ResultsSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { LocationSection } from "../components/sections/LocationSection";
import { motion } from "framer-motion";
import { TemplateWarning } from "../components/ui/TemplateWarning";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* <TemplateWarning /> */}
      <HeroSection />
      <ResultsSection />
      <AboutSection />
      <ServicesSection />
      <LocationSection />
    </motion.main>
  );
};

export default Home;
