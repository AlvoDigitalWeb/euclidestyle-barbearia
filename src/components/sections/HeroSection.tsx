import { motion } from "framer-motion";
import { siteConfig } from "../../config/site";
import { Button } from "../ui/Button";
import { Container, Section } from "../ui/Layout";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/DataDisplay";

export const HeroSection = () => {

  return (
    <Section className="relative min-h-[100dvh] lg:h-[100dvh] lg:max-h-[1080px] w-full flex flex-col justify-center overflow-hidden bg-bg">
      {/* Background Layer: Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={siteConfig.images.background}
          alt=""
          className="w-full h-full object-cover opacity-20 lg:opacity-30"
        />
        <div className="absolute inset-0 bg-bg/60" />
      </div>



      {/* Mobile Visual layer: Hero image as background */}
      <div className="absolute inset-x-0 bottom-0 top-10 z-10 lg:hidden opacity-30 pointer-events-none">
        <img
          src={siteConfig.images.hero}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
      </div>

      {/* Content Container */}
      <Container className="relative z-20 w-full flex items-center justify-center  h-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] lg:gap-12 w-full h-full items-stretch">

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col justify-end lg:justify-center space-y-6 lg:space-y-10 text-center lg:text-left pt-60 lg:pt-0 lg:pb-0 lg:ml-10 h-full"
          >
            <div className="space-y-3 lg:space-y-5">
              <div className="flex items-center gap-4 text-[9px] lg:text-[10px] font-black tracking-[0.4em] text-primary uppercase justify-center lg:justify-start">
                <div className="w-8 h-[1px] bg-primary" />
                <span>Barbearia de Elite</span>
              </div>

              <Heading variant="h1" className="font-serif leading-[0.95] tracking-tighter text-3xl sm:text-4xl lg:text-7xl xl:text-[5rem] drop-shadow-2xl italic font-normal">
                O Melhor <br />
                <span className="text-primary not-italic">Corte do Mundo.</span>
              </Heading>

              <div className="max-w-md mx-auto lg:mx-0">
                <Text variant="lead" className="text-white/50 tracking-[0.2em] font-bold text-[10px] lg:text-xs uppercase leading-relaxed">
                  Referência premium em Alhos Vedros & Barreiro
                </Text>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 pt-4">
              <a href={siteConfig.agendaLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button size="lg" className="h-14 lg:h-16 px-8 lg:px-16 text-xs lg:text-sm tracking-[0.25em] font-black group relative overflow-hidden shadow-2xl bg-primary text-black border-none hover:bg-primary/90 transition-all hover:scale-105 pointer-events-auto">
                  AGENDAR AGORA
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Button>
              </a>

              <div className="hidden sm:flex items-center gap-3 text-[9px] lg:text-[10px] font-black tracking-[0.4em] text-white/30 uppercase">
                <div className="w-6 h-[1px] bg-primary/20" />
                <span>Since 2011</span>
              </div>
            </div>
          </motion.div>

          {/* Image Column (Scales with Container) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block relative w-full h-full pointer-events-none rounded-2xl overflow-hidden"
          >
            <img
              src={siteConfig.images.hero}
              alt="Euclides - Mestre Barbeiro"
              className="w-full h-full object-cover object-[50%_10%] brightness-100 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-40" />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />

            {/* Decorative Frame Elements */}
            <div className="absolute top-8 right-8 w-24 h-24 border-r border-t border-primary/20" />
            <div className="absolute bottom-8 left-8 w-24 h-24 border-l border-b border-primary/20" />
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator - Centered at bottom */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[50] flex flex-col items-center gap-2 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-9 border border-primary/40 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(212,175,55,1)]" />
        </motion.div>
      </motion.div>
    </Section>
  );
};
