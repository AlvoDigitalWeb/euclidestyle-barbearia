import { motion } from "framer-motion";
import { Scissors, Droplet, Sparkles, User, Wind, Palette, Calendar } from "lucide-react";
import { siteConfig } from "../config/site";
import { Container, Section } from "../components/ui/Layout";
import { Heading } from "../components/ui/Heading";
import { Text, Card } from "../components/ui/DataDisplay";
import { Button } from "../components/ui/Button";

const iconsMap: Record<string, any> = {
  "Normal": Scissors,
  "Barba": Droplet,
  "Combo": Sparkles,
  "Platinado": Sparkles,
  "Sobrancelhas": Scissors,
};

const Services = () => {
  const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <div className="bg-bg min-h-screen pt-32 pb-20 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mb-12 sm:mb-24 relative text-center sm:text-left"
          >
            <Text className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-6">EXPERIÊNCIA EURO-CHIC</Text>
            <Heading variant="h1" className="text-4xl sm:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-[1.1] italic">
              A ARTE <br />
              <span className="text-gold-gradient">DA ALTA PERFORMANCE.</span>
            </Heading>
            <div className="max-w-xl mx-auto sm:mx-0">
              <Text variant="lead" className="text-white/40 text-sm sm:text-lg leading-relaxed uppercase tracking-widest">
                Cortes esculpidos, tratamentos premium e o compromisso inabalável com o detalhe que define a marca Euclides Style.
              </Text>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Services List - Left Column */}
            <div className="space-y-12">
              <div className="flex flex-col items-center sm:items-start space-y-2">
                <Text className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">MENU DE EXCELÊNCIA</Text>
                <div className="w-16 h-[1px] bg-primary/50" />
              </div>

              <div className="space-y-10 sm:space-y-12">
                {siteConfig.services.map((service, index) => {
                  const iconKey = Object.keys(iconsMap).find(key => service.title.includes(key)) || "Normal";
                  const Icon = iconsMap[iconKey];

                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="flex flex-row items-end gap-3 sm:gap-4 mb-2 sm:mb-3">
                        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/5 flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-700 shadow-xl bg-surface">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/30 group-hover:text-primary transition-colors duration-500" />
                          </div>
                          <Heading variant="h4" className="text-[15px] sm:text-2xl font-black text-white group-hover:text-primary transition-colors duration-500 uppercase tracking-tight italic">
                            {service.title}
                          </Heading>
                        </div>
                        <div className="flex-1 border-b border-white/10 border-dashed mb-1.5 sm:mb-2 group-hover:border-primary/30 transition-colors duration-700 opacity-50 sm:opacity-100 min-w-[20px]" />
                        <div className="shrink-0 mb-[-2px] sm:mb-0">
                          <span className="text-[15px] sm:text-2xl font-black text-primary sm:text-white italic group-hover:text-primary transition-colors duration-500">
                            {service.price}
                          </span>
                        </div>
                      </div>
                      <div className="pl-[52px] sm:pl-[68px]">
                        <Text className="text-[11px] sm:text-sm text-white/30 max-w-lg leading-relaxed group-hover:text-white/60 transition-colors duration-500 tracking-wide uppercase sm:normal-case">
                          {service.description}
                        </Text>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Visual Highlight - Right Column */}
            <div className="hidden lg:block sticky top-40">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/5 shadow-2xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent z-10 opacity-60" />
                <img
                  src={siteConfig.images.aboutBefore}
                  alt="Euclides Style Experience"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-12 left-12 right-12 z-20 space-y-6">
                  <div className="w-12 h-1 bg-primary" />
                  <Heading variant="h3" className="text-white font-black text-4xl italic leading-tight uppercase">O SEU MOMENTO DE RENOVAÇÃO.</Heading>
                  <Text className="text-[10px] text-white/40 font-black uppercase tracking-[0.5em]">QUALIDADE PREMIUM CERTIFICADA</Text>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 sm:mt-40 p-8 sm:p-24 bg-surface border border-white/5 relative overflow-hidden text-center space-y-12 sm:space-y-16 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />

            <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto relative z-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-primary/30" />
                <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em]">Experiência Única</span>
                <div className="w-8 h-[1px] bg-primary/30" />
              </div>

              <Heading variant="h2" className="text-3xl sm:text-6xl lg:text-7xl font-black italic uppercase leading-tight">
                PRONTO PARA <span className="text-gold-gradient block lg:inline">ELEVAR O SEU ESTILO?</span>
              </Heading>

              <div className="max-w-2xl mx-auto">
                <Text className="text-white/40 text-sm sm:text-xl leading-relaxed uppercase tracking-widest font-medium">
                  Não fazemos apenas cortes. Desenhamos a sua melhor versão com precisão e técnica inspirada no luxo europeu.
                </Text>
              </div>
            </div>

            <div className="flex justify-center relative z-10 pt-4 pb-2 sm:py-8 transition-transform duration-500 group-hover:scale-105">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto flex items-center justify-center gap-4 px-20 py-8 text-sm shadow-[0_30px_70px_rgba(212,175,55,0.15)] bg-primary text-black font-black uppercase tracking-[0.3em]">
                  <Calendar className="w-5 h-5 flex-shrink-0" />
                  AGENDAR HORÁRIO
                </Button>
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};

export default Services;
