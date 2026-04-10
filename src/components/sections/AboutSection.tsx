import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Scissors } from "lucide-react";
import { siteConfig } from "../../config/site";
import { Container, Section } from "../ui/Layout";
import { Heading } from "../ui/Heading";
import { Text, Card } from "../ui/DataDisplay";
import { Separator } from "../ui/Separator";

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="sobre" className="bg-secondary relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Images */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <motion.div
                initial={{ y: 20 }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="pt-12"
              >
                <Card className="aspect-[3/5] bg-surface relative overflow-hidden rounded-sm border border-white/5 shadow-2xl">
                  <img
                    src={siteConfig.images.aboutBefore}
                    alt="Euclides em ação"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                </Card>
              </motion.div>

              <motion.div
                initial={{ y: -20 }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="aspect-[3/5] bg-surface relative overflow-hidden rounded-sm border border-white/5 shadow-2xl">
                  <img
                    src={siteConfig.images.aboutAfter}
                    alt="Cliente satisfeito"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                </Card>
              </motion.div>
            </div>

            {/* Background Text Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-white/[0.02] uppercase tracking-[0.5em] pointer-events-none hidden lg:block">
              ESTILO
            </div>
          </motion.div>

          {/* Right side - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-10 text-center lg:text-left"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-primary uppercase">
                <div className="w-10 h-[1px] bg-primary" />
                <span>O Especialista</span>
              </div>

              <Heading variant="h1" className="text-5xl lg:text-7xl">
                Euclides <span className="text-gold-gradient block lg:inline">Style</span>
              </Heading>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="text-4xl font-serif text-primary italic">26+</span>
                <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black text-left leading-tight">
                  Anos de <br />Experiência
                </span>
              </div>
            </div>

            <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
              <Text variant="p" className="text-lg lg:text-xl leading-relaxed text-white/70">
                Líder em cortes <span className="text-white font-black underline decoration-primary decoration-2 underline-offset-8">modernos</span> e <span className="text-white font-black underline decoration-primary decoration-2 underline-offset-8">clássicos</span>,
                com um olhar atento aos detalhes que define o novo padrão de barbearia.
              </Text>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <p className="text-primary font-black uppercase tracking-widest text-[10px]">Técnica</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">Impecável</p>
                </div>
                <div className="space-y-2">
                  <p className="text-primary font-black uppercase tracking-widest text-[10px]">Atendimento</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">Premium</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="mt-20" />
      </Container>
    </Section>
  );
};
