import { useState, useEffect, useRef } from "react";
import { siteConfig } from "../../config/site";
import { Section, Container } from "../ui/Layout";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/DataDisplay";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  {
    id: "alhosVedros",
    ...siteConfig.address.alhosVedros
  },
  {
    id: "barreiro",
    ...siteConfig.address.barreiro
  }
];

export function LocationSection() {
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveLocationIndex((prevIndex) => (prevIndex + 1) % locations.length);
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  const handleLocationClick = (index: number) => {
    setActiveLocationIndex(index);
    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Resume auto-switching after 60 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 60000);
  };

  const activeLocation = locations[activeLocationIndex];
  const query = `${activeLocation.street}, ${activeLocation.postal}`;
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <Section id="location" className="bg-surface relative overflow-hidden py-20">
      <Container>
        <div className="text-center mb-16 relative z-10">
          <Heading variant="h2" className="text-white mb-4">
            As Nossas Localizações
          </Heading>
          <Text className="text-gray-400 max-w-2xl mx-auto">
            Projetadas para lhe oferecer a melhor experiência, com fácil acesso e ambientes premium.
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          <div className="lg:col-span-1 space-y-4">
            {locations.map((loc, index) => (
              <button
                key={loc.id}
                onClick={() => handleLocationClick(index)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-start gap-4 cursor-pointer ${activeLocationIndex === index
                  ? "bg-white/5 border-primary/50"
                  : "bg-surface/50 border-white/5 hover:bg-white/5 hover:border-white/10"
                  }`}
              >
                <div className={`p-3 rounded-lg ${activeLocationIndex === index ? "bg-primary text-black" : "bg-white/10 text-white"}`}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg mb-1 ${activeLocationIndex === index ? "text-white" : "text-gray-300"}`}>
                    {loc.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{loc.street}</p>
                  <p className="text-gray-400 text-sm">{loc.postal}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 relative h-[500px] rounded-2xl overflow-hidden border border-primary/50 bg-surface">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, zIndex: -1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <iframe
                  title={`Mapa de ${activeLocation.title}`}
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(100%)" }} // Dark mode styling for iframe map
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10 z-10" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
