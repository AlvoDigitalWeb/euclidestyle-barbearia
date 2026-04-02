import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone, Instagram, Clock, Send } from "lucide-react";
import { siteConfig } from "../config/site";
import { Container, Section } from "../components/ui/Layout";
import { Heading } from "../components/ui/Heading";
import { Text, Card } from "../components/ui/DataDisplay";
import { Button } from "../components/ui/Button";
import { LocationSection } from "../components/sections/LocationSection";

const Contact = () => {
  const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <div className="pt-24 min-h-screen bg-bg relative overflow-hidden">
      {/* Decorative effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <Section className="relative z-10 pb-20">
        <Container>
          <div className="text-center mb-16 sm:mb-24 max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6">
              <div className="w-10 h-[1px] bg-primary" />
              <span>ENTRE EM CONTACTO</span>
              <div className="w-10 h-[1px] bg-primary" />
            </div>
            <Heading variant="h1" className="text-4xl sm:text-7xl lg:text-8xl font-black italic uppercase leading-none">
              CONTACTO & <span className="text-gold-gradient">LOCALIZAÇÃO</span>
            </Heading>
            <div className="max-w-2xl mx-auto mt-8">
              <Text variant="lead" className="text-white/40 text-sm sm:text-lg leading-relaxed uppercase tracking-widest">
                Agende o seu horário ou visite as nossas unidades em Alhos Vedros e Barreiro.
              </Text>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-start">
            {/* WhatsApp CTA Dominant */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 sm:space-y-12"
            >
              <div className="bg-surface rounded-sm p-8 sm:p-16 border border-white/5 relative overflow-hidden flex flex-col items-center text-center shadow-2xl group transition-all duration-700 hover:border-primary/20">
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
                  <MessageCircle className="w-64 h-64 rotate-12" />
                </div>

                <div className="w-24 h-24 bg-[#25D366] rounded-full flex items-center justify-center mb-8 shadow-[0_20px_50px_rgba(37,211,102,0.2)] transition-transform duration-700 group-hover:scale-110">
                  <MessageCircle className="text-white w-12 h-12" />
                </div>

                <Heading variant="h2" className="text-3xl sm:text-5xl font-black italic uppercase mb-6 leading-tight">Marcação <br />Rápida</Heading>

                <div className="max-w-sm mx-auto mb-10">
                  <Text variant="p" className="text-white/40 text-sm sm:text-lg leading-relaxed uppercase tracking-widest">
                    A forma mais simples e direta de reservar o seu lugar é via WhatsApp.
                  </Text>
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full relative z-10">
                  <Button size="lg" className="w-full h-20 bg-[#25D366] hover:bg-[#20ba59] text-black border-none text-sm font-black tracking-[0.3em] uppercase shadow-2xl hover:shadow-[0_20px_60px_rgba(37,211,102,0.3)] transition-all duration-500">
                    <Send className="mr-3 w-5 h-5 rotate-45" /> AGENDAR AGORA
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <a href={siteConfig.socials.instagramUrl} target="_blank" rel="noopener noreferrer" className="block group">
                  <Card className="p-8 sm:p-10 bg-surface border border-white/5 rounded-sm hover:border-primary/30 transition-all duration-500 text-center sm:text-left h-full">
                    <Instagram className="w-6 h-6 text-primary mb-6 mx-auto sm:mx-0 group-hover:scale-110 transition-transform duration-500" />
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black mb-2">Instagram</p>
                    <p className="text-sm font-black text-white uppercase tracking-widest group-hover:text-primary transition-colors duration-500">{siteConfig.socials.instagram}</p>
                  </Card>
                </a>

                <a href={`tel:${siteConfig.socials.phone}`} className="block group">
                  <Card className="p-8 sm:p-10 bg-surface border border-white/5 rounded-sm hover:border-primary/30 transition-all duration-500 text-center sm:text-left h-full">
                    <Phone className="w-6 h-6 text-primary mb-6 mx-auto sm:mx-0 group-hover:scale-110 transition-transform duration-500" />
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black mb-2">Telemóvel</p>
                    <p className="text-sm font-black text-white uppercase tracking-widest group-hover:text-primary transition-colors duration-500">{siteConfig.socials.phone}</p>
                  </Card>
                </a>
              </div>
            </motion.div>

            {/* Locations & Hours */}
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-8">
                <div className="flex items-center gap-5 justify-center lg:justify-start">
                  <MapPin className="text-primary w-6 h-6" />
                  <Heading variant="h3" className="text-2xl sm:text-3xl font-black uppercase italic">AS NOSSAS UNIDADES</Heading>
                </div>
                <div className="grid gap-6">
                  {Object.entries(siteConfig.address).map(([key, addr]) => (
                    <Card key={key} className="p-8 sm:p-10 border border-white/5 bg-surface group hover:border-primary/20 transition-all duration-700 flex flex-col sm:flex-row justify-between items-center gap-8 shadow-2xl rounded-sm">
                      <div className="space-y-4 text-center sm:text-left">
                        <Heading variant="h4" className="text-lg sm:text-xl font-black text-white uppercase italic tracking-tight">{addr.title}</Heading>
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm text-white/40 uppercase tracking-widest leading-relaxed">{addr.street}</p>
                          <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">{addr.postal}</p>
                        </div>
                      </div>
                      <a href={addr.maps} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button size="sm" variant="outline" className="w-full sm:w-32 py-4 text-[10px] font-black tracking-[0.3em] border-white/10 hover:border-primary hover:text-primary uppercase transition-all duration-500">MAPA</Button>
                      </a>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-5 justify-center lg:justify-start">
                  <Clock className="text-primary w-6 h-6" />
                  <Heading variant="h3" className="text-2xl sm:text-3xl font-black uppercase italic">HORÁRIO</Heading>
                </div>
                <Card className="p-8 sm:p-12 border border-white/5 bg-surface/40 backdrop-blur-sm rounded-sm">
                  <div className="space-y-5">
                    {siteConfig.hours.map((h, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0 group">
                        <p className="text-xs sm:text-sm font-black text-white uppercase tracking-widest group-hover:text-primary transition-colors duration-500">{h.day}</p>
                        <p className={`text-xs sm:text-sm font-black uppercase tracking-widest ${h.time === "Fechado" ? "text-red-500/60" : "text-white/40 group-hover:text-white transition-colors duration-500"}`}>{h.time}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <LocationSection />
    </div>
  );
};

export default Contact;
