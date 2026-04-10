import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Scissors, Droplet, Sparkles, Calendar, Palette } from "lucide-react";
import { siteConfig } from "../../config/site";
import { Container, Section } from "../ui/Layout";
import { Heading } from "../ui/Heading";
import { Text, Card } from "../ui/DataDisplay";
import { Button } from "../ui/Button";
import { Separator } from "../ui/Separator";

const icons = {
  "Normal": Scissors,
  "Barba": Droplet,
  "Combo": Sparkles,
  "Platinado": Sparkles,
  "Sobrancelhas": Scissors,
  "Gel": Palette,
  "Polygel": Palette,
  "Softgel": Palette,
};

export const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="serviços" className="bg-secondary relative overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6">
            <div className="w-10 h-[1px] bg-primary" />
            <span>OS NOSSOS SERVIÇOS</span>
            <div className="w-10 h-[1px] bg-primary" />
          </div>
          <Heading variant="h2" className="text-4xl sm:text-7xl font-black italic uppercase leading-tight">
            Menu de <span className="text-gold-gradient">Excelência</span>
          </Heading>
        </motion.div>

        {/* Services Categories */}
        <div className="space-y-16 sm:space-y-24 mb-16 sm:mb-24">
          {Object.entries(
            siteConfig.services.reduce((acc, service) => {
              const cat = service.category || "Menu de Excelência";
              if (!acc[cat]) acc[cat] = [];
              acc[cat].push(service);
              return acc;
            }, {} as Record<string, typeof siteConfig.services>)
          ).map(([category, services], catIndex) => (
            <div key={category}>
              <div className="text-center mb-10 sm:mb-12">
                <Text className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">{category.toUpperCase()}</Text>
                <div className="w-16 h-[1px] bg-primary/50 mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
                {services.map((service, index) => {
                  const iconKey = Object.keys(icons).find(key => service.title.includes(key)) || "Normal";
                  const Icon = icons[iconKey as keyof typeof icons];

                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`h-full ${index >= 3 ? 'hidden sm:block' : ''}`}
                    >
                      <Card hover className="bg-surface p-8 sm:p-12 flex flex-col items-center text-center space-y-8 group border border-white/5 h-full transition-all duration-700 hover:border-primary/20 rounded-sm shadow-2xl">
                        <div className="w-20 h-20 rounded-full bg-bg flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.2)] transition-all duration-700 shadow-xl shrink-0 border border-white/5 group-hover:border-primary/30 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <Icon className="w-8 h-8 text-primary relative z-10 transition-transform duration-700 group-hover:rotate-12" />
                        </div>

                        <div className="flex-1 space-y-4">
                          <Heading variant="h4" className="text-white tracking-widest uppercase text-lg sm:text-xl font-black italic">{service.title}</Heading>
                          <div className="w-12 h-0.5 bg-primary/30 mx-auto group-hover:w-20 transition-all duration-700" />
                          <Text variant="p" className="text-white/30 group-hover:text-white/60 transition-colors duration-500 text-xs sm:text-sm leading-relaxed font-medium tracking-widest uppercase">
                            {service.description}
                          </Text>
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mb-20"
        >
          <a href={siteConfig.agendaLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-block">
            <Button size="lg" className="w-full sm:w-auto items-center gap-4 px-12 py-8 text-[10px] font-black tracking-[0.3em] uppercase bg-primary text-black shadow-2xl shadow-primary/20 hover:scale-105 transition-all duration-500">
              <Calendar className="w-4 h-4" />
              GARANTIR O MEU HORÁRIO
            </Button>
          </a>
        </motion.div>
      </Container>
    </Section>
  );
};
