import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { siteConfig } from "../../config/site";
import { Container, Section } from "../ui/Layout";
import { Heading } from "../ui/Heading";
import { Text, Card } from "../ui/DataDisplay";
import { Button } from "../ui/Button";
import { Lightbox } from "../ui/Lightbox";
import { Separator } from "../ui/Separator";

export const ResultsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleNext = () => {
    setActiveImageIndex((prev) =>
      prev === null ? null : (prev + 1) % siteConfig.images.gallery.length
    );
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) =>
      prev === null ? null : (prev - 1 + siteConfig.images.gallery.length) % siteConfig.images.gallery.length
    );
  };

  return (
    <Section className="bg-secondary py-8 sm:py-12 relative overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6">
            <div className="w-10 h-[1px] bg-primary" />
            <span>Portfólio</span>
            <div className="w-10 h-[1px] bg-primary" />
          </div>
          <Heading variant="h2" className="text-4xl sm:text-7xl font-black italic uppercase leading-tight">
            Resultados de <span className="text-gold-gradient">Verdade</span>
          </Heading>
          <div className="max-w-2xl mx-auto mt-6">
            <Text variant="lead" className="text-white/40 text-sm sm:text-lg uppercase tracking-widest leading-relaxed">
              Veja só alguns dos trabalhos que definem a nossa excelência.
            </Text>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 mb-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {siteConfig.images.gallery.map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              className="group cursor-pointer"
              onClick={() => setActiveImageIndex(index)}
            >
              <Card variant="default" className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/5 transition-all duration-700 hover:border-primary/50 shadow-2xl">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover lg:grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-transparent lg:bg-secondary/40 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[8px] font-black text-primary uppercase tracking-[0.3em]">Euclides Style</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <a
            href={siteConfig.socials.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-block"
          >
            <Button variant="outline" className="w-full sm:w-auto px-10 py-5 text-[10px] font-black tracking-[0.3em] uppercase border-white/10 hover:border-primary hover:bg-primary hover:text-black transition-all duration-500 group">
              GALERIA COMPLETA
              <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </motion.div>
      </Container>

      <Separator className="mt-15" />

      {/* Lightbox Component */}
      <Lightbox
        images={siteConfig.images.gallery}
        index={activeImageIndex}
        onClose={() => setActiveImageIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </Section>
  );
};
